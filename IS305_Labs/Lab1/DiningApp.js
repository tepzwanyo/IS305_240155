/*
  Program: Dining Meal Booking Feature
  Student Name: Sandrick Wete Luther
  Student ID: YOUR STUDENT ID
  Date: 17 July 2026
*/

const MealBooking = require("./MealBooking");

// Create a booking object
const booking = new MealBooking(
    "DWU2026123",
    "Sandrick Wete Luther",
    "17 July 2026",
    "Lunch",
    3,
    "Vegetarian"
);

// Display booking summary
console.log(booking.getSummary());

// Display total cost
console.log("Calculated Total: K" + booking.calculateTotal());

// Update booking
booking.setBookingStatus("Confirmed");
booking.setQuantity(4);

// Display updated details
console.log("\n----- UPDATED BOOKING -----");
console.log("Booking Status : " + booking.getBookingStatus());
console.log("Quantity       : " + booking.getQuantity());
console.log("New Total Cost : K" + booking.calculateTotal());
