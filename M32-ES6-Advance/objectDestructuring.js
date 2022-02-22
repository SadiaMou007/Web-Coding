// Simple example //
const obj = {
  name: "Sadia",
  address: "Dhaka",
  phone: "01982075321",
  status: "Tired Now",
};
const { name, address, phone, status } = obj;
console.log(phone, name, status);

// Complex example //
const company = {
  cName: "Bjit",
  ceo: {
    name: "Mr Z",
    phone: "01717XXX",
  },
  employee: {
    female: "22",
    male: 22,
  },
  framework: {
    frontend: { first: "Bootstrap", second: "react" },
    backend: "vary",
  },
};
const { cName, ceo, framework } = company;
console.log(cName, ceo.phone, framework.frontend.second);
// or
const { first, second } = company.framework.frontend;
console.log(first, second);
