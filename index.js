const list = document.querySelector(".list");
const listScrollWidth = list.scrollWidth;
const listClientWidth = list.clientWidth;

let startX = 0;
let nowX = 0;
let endX = 0;
let listX = 0;

const onScrollMove = (event) => {
  nowX = getClientX(event);
  setTranslateX(listX + nowX - startX);
  console.log(`nowX${nowX}`);
};

const onScrollEnd = (event) => {
  endX = getClientX(event);
  listX = getTranslateX();
  if (listX > 0) {
    setTranslateX(0);
    list.style.transition = `all 0.3s ease`;
    listX = 0;
  } else if (listX < listClientWidth - listScrollWidth) {
    setTranslateX(listClientWidth - listScrollWidth);
    list.style.transition = `all 0.3s ease`;
    listX = listClientWidth - listScrollWidth;
  }

  window.removeEventListener("mousedown", onScrollStart);
  window.removeEventListener("touchstart", onScrollStart);
  window.removeEventListener("mousemove", onScrollMove);
  window.removeEventListener("touchmove", onScrollMove);
  window.removeEventListener("mouseup", onScrollEnd);
  window.removeEventListener("touchend", onScrollEnd);
  window.removeEventListener("click", onClick);
};

const onScrollStart = (event) => {
  startX = getClientX(event);
  window.addEventListener("mousemove", onScrollMove);
  window.addEventListener("touchmove", onScrollMove);
  window.addEventListener("mouseup", onScrollEnd);
  window.addEventListener("touchend", onScrollEnd);
  console.log(`startX${startX}`);
};

const onClick = (event) => {
  if (startX - endX !== 0) {
    event.preventDefault();
  }
};

const getClientX = (event) => {
  const isTouches = event.touches ? true : false;
  return isTouches ? event.touches[0].clientX : event.clientX;
};

const getTranslateX = () => {
  return parseInt(getComputedStyle(list).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX = (event) => {
  list.style.transform = `translateX(${event}px)`;
};

const bindEvents = () => {
  list.addEventListener("mousedown", onScrollStart);
  list.addEventListener("touchstart", onScrollStart);
  list.addEventListener("click", onClick);
};

bindEvents();

const defaultfrist = document.querySelector(".frist").innerHTML;
function frist() {
  const img = document.querySelector(".img");
  const frist = document.querySelector(".frist");
  const changeText = () => {
    frist.innerHTML = "난 사실 아무생각이 없어요";
  };
  const backText = () => {
    frist.innerHTML = defaultfrist;
  };
  img.addEventListener("mouseover", changeText);
  img.addEventListener("mouseout", backText);
}
frist();

const defaultsecond = document.querySelector(".second").innerHTML;
function second() {
  const img = document.querySelector(".house");
  const second = document.querySelector(".second");
  const changeText = () => {
    second.innerHTML = "격렬하게 아무것도 안하기";
  };
  const backText = () => {
    second.innerHTML = defaultsecond;
  };
  img.addEventListener("mouseover", changeText);
  img.addEventListener("mouseout", backText);
}
second();
