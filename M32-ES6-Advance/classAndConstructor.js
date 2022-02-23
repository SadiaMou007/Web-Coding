class empDetails {
  name;
  id;
  address = "UK";
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}

const emp1 = new empDetails("sadia", 007);
const emp2 = new empDetails("Tuplus", 28);
console.log(emp1, emp2);
