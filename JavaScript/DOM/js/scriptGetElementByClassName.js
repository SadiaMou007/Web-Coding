console.log("cls");

const articles = document.getElementsByClassName("articles");
for (const article of articles) {
  article.style.backgroundColor = "gray";
}
