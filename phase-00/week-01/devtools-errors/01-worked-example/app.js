const activeCustomers = 250;
const revenuePerCustomer = 40;

function calculateMonthlyRevenue() {
  return activeCustomers * revenuePerCustomer;
}

const monthlyRevenue = calculateMonthlyRevenue();

console.log(`Monthly revenue: $${monthlyRevenue}`);
