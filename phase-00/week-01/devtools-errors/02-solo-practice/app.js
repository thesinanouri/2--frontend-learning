const planName = "Professional";
const activeSeats = 75;
const monthlyPricePerSeat = 18;

function calculateSubscriptionTotal() {
  return activeSeats * monthlyPricePerSeat;
}

const subscriptionTotal = calculateSubscriptionTotal();

console.log(`Plan: ${planName}`);
console.log(`Monthly total: $${subscriptionTotal}`);
console.log(document.title);
