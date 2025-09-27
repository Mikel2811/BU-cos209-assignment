export function formatPrice(n) {
  return `₦${n.toFixed(2)}`;
}

export const TAX_RATE = 0.075;

export function applyTax(price) {
  return price * (1 + TAX_RATE);
}