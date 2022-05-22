import { Bank } from './bank.model';
import { Tutor } from './tutor.model';

export class TutorBankInfo {
  tutorBankId?: number;
  accountNumber?: string;
  surplus?: string;
  defaultBank?: boolean;
  objTutor?: Tutor;
  objBank?: Bank;
}
