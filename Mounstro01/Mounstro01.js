/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Mounstro01 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("mounstro-01", "./Mounstro01/costumes/mounstro-01.png", {
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
    this.goto(25, 139);
    while (true) {
      yield* this.glide(3, 70, 139);
      yield* this.glide(3, -32, 139);
      if (this.toNumber(this.stage.vars.zeit) === 0) {
        this.visible = false;
      }
      yield;
    }
  }
}
