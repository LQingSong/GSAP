import "./style.css";

import { gsap } from "gsap";
import { navbar } from "./navbar";
import { car } from "./car";

window.onload = () => {
  navbar.adjust();
  loadAnimation();
};

window.onresize = () => {
  navbar.adjust();
};

function loadAnimation() {
  // 通过gsap的时间线功能 创建补间动画
  const tween = gsap.timeline({ delay: 0.8 });

  /* === loading === start */
  tween.to(".loading", { duration: 0.5, opacity: 0, display: "none" });
  /* === loading === end */

  /* === header === start */
  // header 从上往下, from 从tween创建的动画过渡 到 css里的header标签 6 --header-height
  tween.from("header", { duration: 0.5, ease: "power2", y: -16 * 6 });
  // 再到tween来
  tween.to("header", { duration: 0, transition: 0.3 });
  /* === header === end */

  /* === aside === start */
  // y 是相对于css设定的位置的相对值
  tween.from(".info", { duration: 0.5, ease: "power2", opacity: 0, y: 40 });
  /* === aside === end */

  /* === svg === start */
  // 会遇到一个问题，刷新会出现滚动条 原先x设定为80，会拉大页面
  tween.from(".background-svg", { duration: 1.5, ease: "power2", opacity: 0, x: -80 });
  /* === svg === end */

  tween.call(carAnimation);
}

function carAnimation() {
  car.play();
}

const navIcon = document.querySelector("header i");
navIcon.addEventListener("click", () => {
  gsap.fromTo(
    ".menu",
    { y: -window.innerHeight, opacity: 0, display: "none" },
    { duration: 1.2, ease: "power2", opacity: 1, x: 0, y: 0, display: "flex" }
  );
});

const menuIcon = document.querySelector(".menu i");
menuIcon.addEventListener("click", () => {
  const tween = gsap.timeline();
  tween.to(".menu", { duration: 0.3, y: 30 });
  tween.to(".menu", { duration: 1, y: -window.innerHeight, opacity: 0, display: "none" });
});
