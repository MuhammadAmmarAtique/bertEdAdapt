import Student from '../models/Student.js';

export const registerStudent = async (req, res) => {
  const { name, registrationNo } = req.body;
  try {
    const student = new Student({ name, registrationNo });
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const submitAnswer = async (req, res) => {
  const { registrationNo, question, response } = req.body;
  try {
    const student = await Student.findOne({ registrationNo });
    if (!student) return res.status(404).json({ error: 'Student not found' });

    // Feedback and recommendedTopic will be filled later by AI
    student.answers.push({ question, response, feedback: "", recommendedTopic: "" });
    await student.save();

    res.json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getStudentData = async (req, res) => {
  try {
    const student = await Student.findOne({ registrationNo: req.params.regNo });
    if (!student) return res.status(404).json({ error: 'Student not found' });
    res.json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
