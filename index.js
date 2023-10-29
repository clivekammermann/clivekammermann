import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import PacMan01 from "./PacMan01/PacMan01.js";
import Mounstro01 from "./Mounstro01/Mounstro01.js";
import Mounstro3 from "./Mounstro3/Mounstro3.js";
import Mounstro2 from "./Mounstro2/Mounstro2.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  PacMan01: new PacMan01({
    x: 211,
    y: 136,
    direction: 180,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 5,
    visible: true,
    layerOrder: 4
  }),
  Mounstro01: new Mounstro01({
    x: 22.434000000000005,
    y: 139,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 5,
    visible: true,
    layerOrder: 3
  }),
  Mounstro3: new Mounstro3({
    x: 172,
    y: -36.16466666666667,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 5,
    visible: true,
    layerOrder: 1
  }),
  Mounstro2: new Mounstro2({
    x: -108.98,
    y: -24,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 5,
    visible: true,
    layerOrder: 2
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
