/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Mounstro3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("mounstro-3", "./Mounstro3/costumes/mounstro-3.png", {
        x: 360,
        y: 360
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.goto(172, -14);
    while (true) {
      yield* this.glide(3, 172, -80);
      yield* this.glide(3, 172, 14);
      if (this.toNumber(this.stage.vars.zeit) === 0) {
        this.visible = false;
      }
      yield;
    }
  }
}
