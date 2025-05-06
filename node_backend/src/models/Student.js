import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: String,
  registrationNo: String,
  answers: [
    {
      question: String,
      response: String,
      feedback: String,
      recommendedTopic: String
    }
  ]
});

export default mongoose.model('Student', studentSchema);
