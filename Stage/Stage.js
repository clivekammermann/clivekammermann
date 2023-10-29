/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Laberinto", "./Stage/costumes/Laberinto.jpg", {
        x: 480,
        y: 339
      }),
      new Costume("Laberinto2", "./Stage/costumes/Laberinto2.svg", {
        x: 235.00609756097538,
        y: 157.01524390243898
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.zeit = 9e123;

    this.watchers.zeit = new Watcher({
      label: "zeit",
      style: "normal",
      visible: true,
      value: () => this.vars.zeit,
      x: 245,
      y: 175
    });
  }

  *whenGreenFlagClicked() {
    this.costume = "Laberinto";
    this.vars.zeit = 9e123;
    while (true) {
      while (!(this.toNumber(this.vars.zeit) === 0)) {
        yield* this.wait(1);
        this.vars.zeit--;
        yield;
      }
      if (this.toNumber(this.vars.zeit) === 0) {
        this.costume = "Laberinto2";
      }
      yield;
    }
  }
}
