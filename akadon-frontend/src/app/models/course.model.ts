import { StudentRequest } from './student-request.model';
import { TutorRequest } from './tutor-request.model';

export class Course {
  courseId?: number;
  startTime?: number;
  startDate?: Date;
  endTime?: number;
  endDate?: Date;
  studyDate?: string;
  status?: string;
  objStudentRequest?: StudentRequest;
  objTutorRequest?: TutorRequest;
  createdDate?: Date;
  courseName?: string;
  paymentStatus?: Boolean;
}
