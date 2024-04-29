const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "YIPPE!!!!!ᕙ(  •̀ ᗜ •́  )ᕗ";
  gif.src =
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjhsaTFwcXZrZXdmNWdvYTc0YXY0bTFtYzhraHNpcWd5b29wcHFydCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/65wE7Exx1eKZGYIP0G/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  const boundedX = Math.max(0, randomX);
  const boundedY = Math.max(0, randomY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
