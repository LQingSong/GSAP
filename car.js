import { gsap } from "gsap";

// 注： 在普通htmlcssjs里是不能直接引入json文件的，因为使用了vite这样的打包工具才可以
import { car_info } from "./src/data/db.json";

class Car {
  data = [];
  constructor(info) {
    info ? this._create(info) : null;
  }
  _create = (info) => {
    info.forEach((car) => {
      const dom = document.querySelector(car.id);
      const effect = gsap.to(dom, {
        duration: car.duration,
        ease: car.ease,
        x: car.position.x,
        y: car.position.y,
        repeat: car.repeat,
        repeatDelay: car.repeatDelay,
        paused: true,
      });
      // HTMLAudioElement
      const audio = new Audio(`./src/sound/${car.sound_effect}`);
      const listener = this._addListener(dom, effect, audio);

      this.data.push({ dom, effect, listener });
    });
  };

  _addListener = (dom, effect, audio) => {
    // 因为双击事件 会 在第一次点进click，所以用一个timer区分
    let timer = null;
    const click = dom.addEventListener("click", () => {
      this._clearTimer(timer);
      timer = setTimeout(() => {
        effect.paused(!effect.paused());
      }, 200);
    });
    const dblclick = dom.addEventListener("dblclick", () => {
      this._clearTimer(timer);
      audio.play();
    });

    return { click, dblclick };
  };

  _clearTimer = (timer) => {
    timer && clearTimeout(timer);
  };

  play = () => {
    this.data.forEach((car) => {
      car.effect.play();
    });
  };

  paused = () => {
    this.data.forEach((car) => {
      car.effect.paused();
    });
  };
}

const car = new Car(car_info);

export { car };
