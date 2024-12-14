export function isArrayUndefined(arr: string[]) {
  const isAr = arr.every((item) => item === undefined);
  return isAr;
}

export function calculateDisountPrice(price: number, discount?: number) {
  if (!discount) return price;
  const finalPrice = (price * (100 - discount)) / 100;
  return finalPrice.toFixed(2);
}
