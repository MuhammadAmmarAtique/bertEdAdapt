# This will help us clean and tokenize our text for the BERT model.
import pandas as pd
import re
from transformers import BertTokenizer

# Load CSV
df = pd.read_csv("ai_backend/student_responses.csv")  

# Clean text
def clean_text(text):
    text = text.lower()
    text = re.sub(r'[^\w\s]', '', text)
    return text

df['cleaned_answer'] = df['answer'].apply(clean_text)

# Initialize tokenizer
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')

# Tokenize
tokenized = df['cleaned_answer'].apply(lambda x: tokenizer.encode_plus(
    x,
    add_special_tokens=True,
    max_length=32,
    padding='max_length',
    truncation=True,
    return_tensors='pt'
))

# Example: Show cleaned + tokenized versions
for i in range(3):
    print(f"Original: {df['answer'][i]}")
    print(f"Cleaned: {df['cleaned_answer'][i]}")
    print(f"Input IDs: {tokenized[i]['input_ids']}")  #Tokens are called input ids starting from 101 and ending in 102 
    # other 0s are padding to make sentence a fixed length.
    print(f"Attention Mask: {tokenized[i]['attention_mask']}") #BERT needs to know which parts are actual text and which
    # parts are padding where 1s are for real tokens and 0s are for padding tokens.
    print("--------")
