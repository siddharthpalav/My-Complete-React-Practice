// const firstBasket = document.querySelector(".basket1");
// const secondBasket = document.querySelector(".basket2");
// const leftButton = document.querySelector(".left-button");
// const rightButton = document.querySelector(".right-button");

// let totalBasket = 0;
// let leftBasket = 0;
// let rightBasket = 10;

// leftButton.addEventListener("click", () => {
//   if (rightBasket === 0) return;
//   leftBasket++;
//   rightBasket--;
//   console.log(leftBasket, rightBasket);
//   firstBasket.innerText = leftBasket;
//   secondBasket.innerText = rightBasket;
// });

// rightButton.addEventListener("click", () => {
//   if (leftBasket === 0) return;
//   leftBasket--;
//   rightBasket++;
//   console.log(leftBasket, rightBasket);
//   firstBasket.innerText = leftBasket;
//   secondBasket.innerText = rightBasket;
// });

const firstBasket = document.querySelector(".basket-1 span");
const secondBasket = document.querySelector(".basket-2 span");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

const totalApples = 10;

let secondBasketAppleCount = 0;
let firstBasketAppleCount = totalApples - secondBasketAppleCount;

firstBasket.innerText = firstBasketAppleCount;
secondBasket.innerText = secondBasketAppleCount;

rightArrow.addEventListener("click", () => {
  if (firstBasketAppleCount > 0) {
    firstBasketAppleCount--;
    firstBasket.innerText = firstBasketAppleCount;
    secondBasketAppleCount++;
    secondBasket.innerText = secondBasketAppleCount;
  }
});

leftArrow.addEventListener("click", () => {
  if (secondBasketAppleCount > 0) {
    firstBasketAppleCount++;
    firstBasket.innerText = firstBasketAppleCount;
    secondBasketAppleCount--;
    secondBasket.innerText = secondBasketAppleCount;
  }
});
