console.log("Grading system");
var name = ["stu1", "stu2", "stu3", "stu4", "stu5"];
var marks = [65, 75, 40, 55, 99];
for (var i = 0; i < marks.length; i++) {
  console.log(name[i]);
  if (marks[i] >= 50 && marks[i] < 60) console.log(" got C");
  else if (marks[i] >= 60 && marks[i] < 70) console.log(" got B");
  else if (marks[i] >= 70 && marks[i] < 80) console.log(" got A");
  else if (marks[i] >= 80 && marks[i] < 100) console.log(" got A+");
  else console.log("F");
}
