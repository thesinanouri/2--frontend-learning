const productName = "Node.js";
const activeCustomers = 1000;
const priceperCustomer = 50;
const monthlyRevenue = activeCustomers * priceperCustomer;
const annualRevenue = monthlyRevenue * 12;

console.log(`Product Name: ${productName}`);
console.log(`Active Customers: ${activeCustomers}`);
console.log(`Price per Customer: $${priceperCustomer}`);
console.log(`Monthly Revenue: $${monthlyRevenue}`);
console.log(`Annual Revenue: $${annualRevenue}`);
console.log(typeof annualRevenue);
