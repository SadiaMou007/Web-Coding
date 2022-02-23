class teamMember {
  name;
  duty;
  constructor(name, duty) {
    this.name = name;
    this.duty = duty;
  }
}
class address extends teamMember {
  address = "BD";
}
const m1 = new address("sadia", "web dev");
const m2 = new address("Mou", "SE");
// console.log(m1, m2);
