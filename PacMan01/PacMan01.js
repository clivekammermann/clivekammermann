/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PacMan01 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("pac-man-01", "./PacMan01/costumes/pac-man-01.png", {
        x: 360,
        y: 360
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "right arrow" },
        this.whenKeyRightArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "left arrow" },
        this.whenKeyLeftArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "up arrow" },
        this.whenKeyUpArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "down arrow" },
        this.whenKeyDownArrowPressed
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenKeyRightArrowPressed() {
    this.direction = 90;
    this.move(10);
  }

  *whenKeyLeftArrowPressed() {
    this.direction = -90;
    this.move(10);
  }

  *whenKeyUpArrowPressed() {
    this.direction = 0;
    this.move(10);
  }

  *whenKeyDownArrowPressed() {
    this.direction = 180;
    this.move(10);
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.direction = 90;
    this.goto(211, 136);
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (
        this.touching(Color.rgb(255, 255, 255)) ||
        this.touching(Color.rgb(0, 0, 254))
      ) {
        yield* this.glide(1, 211, 136);
      }
      if (
        this.touching(Color.rgb(0, 168, 46)) ||
        this.touching(Color.rgb(255, 151, 0))
      ) {
        yield* this.glide(1, 211, 136);
      }
      if (this.touching(Color.rgb(227, 7, 19))) {
        this.say("du hast gewonen");
      }
      if (this.toNumber(this.stage.vars.zeit) === 0) {
        this.visible = false;
      }
      yield;
    }
  }
}
