import { Subject } from "./subject.model";
import { Student } from "./student.model";
import { Level } from "./level.model";

export class StudentRequest {
    studentRequestId?: number;
    studentRequestTitle?: string;
    costPerHour?: number;
    beginTime?: number;
    endTime?: number;
    durationPerSession?: number;
    learningDate?: string;
    studentWishes?: string;
    introduction?: string;
    testLearning?: Boolean;
    learningMethod?: string;
    status?: string;
    objStudent?: Student;
    objLevel?: Level;
    objSubject?: Subject;
    createdDate?: Date;
    endDate?: Date;
    quantityTutorRequest?: number;
    payTime?: number;
}
