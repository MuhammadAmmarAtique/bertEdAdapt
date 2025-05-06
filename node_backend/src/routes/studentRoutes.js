import express from 'express';
import {
  registerStudent,
  submitAnswer,
  getStudentData
} from '../controllers/studentController.js';

const router = express.Router();

router.post('/register', registerStudent);
router.post('/answer', submitAnswer);
router.get('/:regNo', getStudentData);

export default router;
