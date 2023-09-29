const arrows = document.querySelectorAll(".arrow");
const shopLists = document.querySelectorAll(".shop-list");

arrows.forEach((arrow, i) => {
  const itemNumber = shopLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 280);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      shopLists[i].style.transform = `translateX(${
        shopLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      shopLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 280));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.shop-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
