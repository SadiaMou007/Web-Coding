// Problem 1: ana to vori
function anaToVori(ana) {
  // check input validity
  if (typeof ana != "number" || ana < 0) {
    return "Please enter a valid number!";
  }
  return ana / 16;
}
console.log(anaToVori(17));

// Problem 2: pandaCost
function pandaCost(singaraQuantity, somucaQuantity, jilibiQuantity) {
  // check input validity
  if (
    typeof singaraQuantity != "number" ||
    typeof somucaQuantity != "number" ||
    typeof jilibiQuantity != "number"
  ) {
    return "Please enter numbers as food quantity!";
  }

  const singaraPrice = 7;
  const somucaPrice = 10;
  const jilibiPrice = 15;
  //   calculate total cost
  let totalprice =
    singaraPrice * singaraQuantity +
    somucaPrice * somucaQuantity +
    jilibiPrice * jilibiQuantity;
  return totalprice;
}
console.log(pandaCost(2, 2, 2));

// Problem 3: Picnic Budget
function picnicBudget(noOfPeople) {
  // initialize fixed costs
  const budgetForFirst100 = 5000;
  const budgetFor101To200 = 4000;
  const budgetFor201ToEnd = 3000;
  let totalCost = 0;
  //   check invalid input
  if (typeof noOfPeople != "number" || noOfPeople < 0) {
    return "Invalid input!";
  }
  //   calculate budget
  if (noOfPeople <= 100) {
    totalCost = noOfPeople * budgetForFirst100;
    return totalCost;
  } else if (noOfPeople <= 200) {
    totalCost =
      100 * budgetForFirst100 + (noOfPeople - 100) * budgetFor101To200;
    return totalCost;
  } else {
    totalCost =
      100 * budgetForFirst100 +
      100 * budgetFor101To200 +
      (noOfPeople - 200) * budgetFor201ToEnd;
    return totalCost;
  }
}
console.log(picnicBudget(201));

// Problem 4: First odd length Name
function oddFriend(names) {
  for (let i = 0; i < names.length; i++) {
    //   check invalid input
    if (typeof names[i] != "string") {
      return "Invalid name!";
    }
    // check odd length name
    if (names[i].length % 2 != 0) {
      return names[i];
    }
  }
  return "No Odd length Name!";
}
console.log(oddFriend(["Fayeja", "Sadia"]));
