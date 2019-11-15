export interface Prescription {
    conditions: string[];
    courseDurationDays: number;
    doctorName: string;
    doctorNumber: string;
    instructions: string[];
    intervalSeconds: number;
    medication: string[];
    nextPrescriptionSeconds: number;
    perDay: number;
    quantityRemaining: number;
    quantityTotal: number;
    sideEffects: string[];
    patientName: string;
    patientEmail: string;
}