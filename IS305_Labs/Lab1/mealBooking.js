/*
  Program: Dining Meal Booking Feature
  Student Name: Sandrick Wete Luther
  Student ID: YOUR STUDENT ID
  Date: 17 July 2026
  Description: A JavaScript program demonstrating classes,
  objects, constructors, private fields and methods.
*/

class MealBooking {

    // Private Fields
    #studentId;
    #studentName;
    #mealDate;
    #mealType;
    #quantity;
    #dietaryNote;
    #bookingStatus;

    // Constructor
    constructor(studentId, studentName, mealDate, mealType, quantity, dietaryNote) {
        this.#studentId = studentId;
        this.#studentName = studentName;
        this.#mealDate = mealDate;
        this.#mealType = mealType;
        this.#quantity = quantity;
        this.#dietaryNote = dietaryNote;
        this.#bookingStatus = "Pending";
    }

    // Getters
    getStudentId() { return this.#studentId; }
    getStudentName() { return this.#studentName; }
    getMealDate() { return this.#mealDate; }
    getMealType() { return this.#mealType; }
    getQuantity() { return this.#quantity; }
    getDietaryNote() { return this.#dietaryNote; }
    getBookingStatus() { return this.#bookingStatus; }

    // Setters
    setStudentId(studentId) { this.#studentId = studentId; }
    setStudentName(studentName) { this.#studentName = studentName; }
    setMealDate(mealDate) { this.#mealDate = mealDate; }
    setMealType(mealType) { this.#mealType = mealType; }
    setQuantity(quantity) { this.#quantity = quantity; }
    setDietaryNote(dietaryNote) { this.#dietaryNote = dietaryNote; }
    setBookingStatus(status) { this.#bookingStatus = status; }

    // Calculate Total
    calculateTotal() {

        let price = 0;

        if (this.#mealType === "Breakfast") {
            price = 15;
        } else if (this.#mealType === "Lunch") {
            price = 25;
        } else if (this.#mealType === "Dinner") {
            price = 35;
        }

        return price * this.#quantity;
    }

    // Booking Summary
    getSummary() {
        return `
========== DINING MEAL BOOKING ==========
Student ID     : ${this.#studentId}
Student Name   : ${this.#studentName}
Meal Date      : ${this.#mealDate}
Meal Type      : ${this.#mealType}
Quantity       : ${this.#quantity}
Dietary Note   : ${this.#dietaryNote}
Booking Status : ${this.#bookingStatus}
Total Cost     : K${this.calculateTotal()}
=========================================
`;
    }
}

module.exports = MealBooking;
