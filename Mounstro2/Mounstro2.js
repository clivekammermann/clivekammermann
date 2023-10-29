/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Mounstro2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("mounstro-2", "./Mounstro2/costumes/mounstro-2.png", {
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
    this.goto(174, -14);
    while (true) {
      yield* this.glide(3, -81, -24);
      yield* this.glide(3, -141, -24);
      if (this.toNumber(this.stage.vars.zeit) === 0) {
        this.visible = false;
      }
      yield;
    }
  }
}
