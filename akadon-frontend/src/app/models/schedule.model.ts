import { Student } from './student.model';
import { Tutor } from './tutor.model';

export class Schedule {
  id?: number;
  subject?: String;
  startTime?: number;
  endTime?: number;
  objTutor?: Tutor;
  objStudent?: Student;
}
