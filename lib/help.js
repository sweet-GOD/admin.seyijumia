export const NGnaira = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "NGN",
  currencyDisplay: "narrowSymbol", // Use "narrowSymbol" instead of "symbol"
});

export function formatCurrency(amount) {
  return NGnaira.format(amount);
}

// Example usage:
const formattedAmount = formatCurrency(1000); // ₦1,000
