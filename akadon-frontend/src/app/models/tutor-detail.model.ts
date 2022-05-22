import { Level } from './level.model';
import { Subject } from './subject.model';
import { Tutor } from './tutor.model';

export class TutorDetail {
  tutorDetailId?: number;
  objTutor?: Tutor;
  objSubject?: Subject;
  objLevel?: Level;
}
