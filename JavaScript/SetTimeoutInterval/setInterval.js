let count = 0;
const timeID = setInterval(() => {
  console.log(++count);
  if (count == 5) {
    clearInterval(timeID);
  }
}, 2000);
