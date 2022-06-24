import { gsap } from "gsap";

const tween = gsap.timeline();

const sizeState = {
  BIG: "big",
  SMALL: "small",
};

class Navbar {
  sizeState = undefined;

  constructor() {
    this.sizeState = sizeState.BIG;
  }

  // 因为adjust内部引用了Navbar的this，如果在外部引用这个adjust，会找不到这个this，
  // 所以这里用箭头函数绑定了Navbar的this，而不使用普通函数
  adjust = () => {
    let currentState = window.innerWidth > 800 ? sizeState.BIG : sizeState.SMALL;

    if (this.sizeState !== currentState) {
      this.sizeState = currentState;
      this._navAdjust();
    }
  };

  _navAdjust = () => {
    switch (this.sizeState) {
      case sizeState.SMALL:
        this._navBecomeSmall();
        break;
      case sizeState.BIG:
        this._navBecomeBig();
        break;
      default:
        break;
    }
  };

  _navBecomeBig = () => {
    tween.to("nav", { duration: 0.6, ease: "power2", opacity: 1, x: 0, display: "flex" });
    tween.to("header i", { duration: 0.3, opacity: 0, display: "none" });
    // tween 是一个动画的时间线，所以有先后顺序，这里关闭menu是独立的，就用gsap独立而不是继续用tween
    gsap.to(".menu", { duration: 1, ease: "power2", opacity: 0, display: "none" });
  };

  _navBecomeSmall = () => {
    tween.to("nav", { duration: 0.6, ease: "power2", opacity: 0, x: 300, display: "none" });
    tween.to("header i", { duration: 0.3, opacity: 1, display: "flex" });
  };
}

const navbar = new Navbar();
export { navbar };
