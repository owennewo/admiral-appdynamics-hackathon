package com.admiral.hackathon.model;

public class Prescription {

	public static final Prescription PRESCRIPTION1 = create1();
    public static final Prescription PRESCRIPTION2 = create2();

    private String[] medication;
    private String[] instructions;
    private String[] conditions;
    private String[] sideEffects;

    private int intervalSeconds;
    private int nextPrescriptionSeconds;
    private int quantityTotal;
    private int quantityRemaining;
    private int perDay;
    private int courseDurationDays;

    private String doctorName;
    private String doctorNumber;
    
    private static Prescription create1() {
        Prescription p = new Prescription();
        p.medication = new String[] { "2x Extra strong mints", "3x Polos" };
        p.instructions = new String[] { "Please take 4 times a day", "Place on tongue and suck", "Do not give to children or plants" };
        p.sideEffects = new String[] { "Contains laxatives, stay within 50 yards of restroom", "May cause minty breath", "Family and friends will thank you" };
        p.conditions = new String[] { "halitosis","sugar addictions"};
        p.intervalSeconds = 10;
        p.nextPrescriptionSeconds = 5;
        p.quantityTotal = 3;
        p.quantityRemaining = 3;
        p.perDay = 4;
        p.courseDurationDays = 90;
        p.doctorName = "Dr. Theodor Seuss Geisel";
        p.doctorNumber = "07988 638 427";
    
        return p;
    
    }

    private static Prescription create2() {
        Prescription p = new Prescription();
        p.medication = new String[] { "2x Diazapan", "2x Cocodomol" };
        p.instructions = new String[] { "Please take 3 times a day", "Take 30mins after food", "Keep away from children" };
        p.sideEffects = new String[] { "Drowsiness", "Mild nausea", "Light headedness" };
        p.conditions = new String[] { "Arrhythmia","Myalgia"};
        p.intervalSeconds = 20;
        p.nextPrescriptionSeconds = 5;
        p.quantityTotal = 14;
        p.quantityRemaining = 3;
        p.perDay = 3;
        p.courseDurationDays = 14;
        p.doctorName = "Dr. Strangelove";
        p.doctorNumber = "07988 222 2343";

        return p;
    }

    public static Prescription getPrescription1() {
        return PRESCRIPTION1;
    }

    public static Prescription getPrescription2() {
        return PRESCRIPTION2;
    }

    public String[] getMedication() {
        return medication;
    }

    public void setMedication(String[] medication) {
        this.medication = medication;
    }

    public String[] getInstructions() {
        return instructions;
    }

    public void setInstructions(String[] instructions) {
        this.instructions = instructions;
    }

    public String[] getConditions() {
        return conditions;
    }

    public void setConditions(String[] conditions) {
        this.conditions = conditions;
    }

    public String[] getSideEffects() {
        return sideEffects;
    }

    public void setSideEffects(String[] sideEffects) {
        this.sideEffects = sideEffects;
    }

    public int getIntervalSeconds() {
        return intervalSeconds;
    }

    public void setIntervalSeconds(int intervalSeconds) {
        this.intervalSeconds = intervalSeconds;
    }

    public int getNextPrescriptionSeconds() {
        return nextPrescriptionSeconds;
    }

    public void setNextPrescriptionSeconds(int nextPrescriptionSeconds) {
        this.nextPrescriptionSeconds = nextPrescriptionSeconds;
    }

    public int getQuantityTotal() {
        return quantityTotal;
    }

    public void setQuantityTotal(int quantityTotal) {
        this.quantityTotal = quantityTotal;
    }

    public int getQuantityRemaining() {
        return quantityRemaining;
    }

    public void setQuantityRemaining(int quantityRemaining) {
        this.quantityRemaining = quantityRemaining;
    }

    public int getPerDay() {
        return perDay;
    }

    public void setPerDay(int perDay) {
        this.perDay = perDay;
    }

    public int getCourseDurationDays() {
        return courseDurationDays;
    }

    public void setCourseDurationDays(int courseDurationDays) {
        this.courseDurationDays = courseDurationDays;
    }

    public String getDoctorName() {
        return doctorName;
    }

    public void setDoctorName(String doctorName) {
        this.doctorName = doctorName;
    }

    public String getDoctorNumber() {
        return doctorNumber;
    }

    public void setDoctorNumber(String doctorNumber) {
        this.doctorNumber = doctorNumber;
    }

    
    public Prescription clone() {

        Prescription p = new Prescription();
        p.medication = this.medication;
        p.instructions = this.instructions;
        p.sideEffects = this.sideEffects;
        p.conditions = this.conditions;
        p.intervalSeconds = this.intervalSeconds;
        p.nextPrescriptionSeconds = this.nextPrescriptionSeconds;
        p.quantityTotal = this.quantityTotal;
        p.quantityRemaining = this.quantityRemaining;
        p.perDay = this.perDay;
        p.courseDurationDays = this.courseDurationDays;
        p.doctorName = this.doctorName;
        p.doctorNumber = this.doctorNumber;

        return p;
    }
    
}