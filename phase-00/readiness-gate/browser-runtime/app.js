const planName = "Readiness Gate";
const activeSeats = 100;
const pricePerSeat = 10;

function calculateTotalPrice() {
  return activeSeats * pricePerSeat;
}

const totalPrice = calculateTotalPrice();

console.log(`Plan: ${planName}`);
console.log(`Active Seats: ${activeSeats}`);
console.log(`Price per Seat: $${pricePerSeat}`);
console.log(`Total Price: $${totalPrice}`);
