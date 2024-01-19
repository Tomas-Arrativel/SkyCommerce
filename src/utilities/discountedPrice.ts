export function discountPrice(
  num: number | undefined,
  discountPercentage: number | undefined,
) {
  const discounted =
    num && discountPercentage && num - num * (discountPercentage / 100);
  return discounted && discounted.toFixed(2);
}
