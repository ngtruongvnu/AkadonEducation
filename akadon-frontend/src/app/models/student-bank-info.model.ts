import { Bank } from './bank.model';
import { Student } from './student.model';

export class StudentBankInfo {
  studentBankId?: number;
  accountNumber?: string;
  surplus?: number;
  defaultBank?: boolean;
  objStudent?: Student;
  objBank?: Bank;
}
