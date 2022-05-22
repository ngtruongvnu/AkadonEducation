import { StudentRequest } from './student-request.model';
import { Tutor } from './tutor.model';

export class TutorRequest {
  tutorRequestId?: number;
  objTutor?: Tutor;
  objStudentRequest?: StudentRequest;
  receiveDate?: Date;
  requestType?: String;
  status?: string;
  testDate?: number;
}
