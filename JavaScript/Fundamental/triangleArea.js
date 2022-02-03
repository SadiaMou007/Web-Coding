function triangleArea(v1, v2, v3) {
  const halfParameter = (v1 + v2 + v3) / 2;
  const area = Math.sqrt(
    halfParameter *
      (halfParameter - v1) *
      (halfParameter - v2) *
      (halfParameter - v3)
  );
  return area;
}
const a1 = 3;
const a2 = 6;
const a3 = 7;
console.log("Area of Triangle is: ", triangleArea(a1, a2, a3).toFixed(2));
