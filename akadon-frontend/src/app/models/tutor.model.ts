import { ServicePackage } from "./service-package.model";

export class Tutor {
    tutorId?: number;
    email?: string;
    password?: string;
    fullName?: string;
    gender?: string;
    city?: string;
    district?: string;
    ward?: string;
    phoneNumber?: string;
    birthDay?: Date;
    role?: string;
    status?: Boolean;
    image?: string;
    rating?: number;
    behaviorPoint?: number;
    verificationCode?: string;
    objServicePackage?: ServicePackage;
    otpRequestTime?: Date;
    taughtStudentNumber?: number;
    taughtCourseNumber?: number;
    lastLogin?: Date;
}
