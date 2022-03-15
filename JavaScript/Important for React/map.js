const friendsList = [
  { name: "rofik" },
  { name: "jobbar" },
  { name: "salam" },
  { name: "borkot" },
  undefined,
];
let i = 0;
const res = friendsList.map((x) => {
  i++;
  return `name ${i}: ${x ? x.name : "No data found"}`;
});
console.log(res);
