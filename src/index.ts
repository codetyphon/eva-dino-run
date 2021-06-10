import { resource, Game, GameObject } from "@eva/eva.js";
import { RendererSystem } from "@eva/plugin-renderer";
import { Img, ImgSystem } from "@eva/plugin-renderer-img";
import { EventSystem } from "@eva/plugin-renderer-event";
import { Text, TextSystem } from '@eva/plugin-renderer-text'
import {
  SpriteAnimation,
  SpriteAnimationSystem,
} from "@eva/plugin-renderer-sprite-animation";
import { RenderSystem } from "@eva/plugin-renderer-render";
import { TransitionSystem } from "@eva/plugin-transition";
import { GraphicsSystem } from "@eva/plugin-renderer-graphics";
import { PhysicsSystem, Physics, PhysicsType } from "@eva/plugin-matterjs";
import {
  TilingSprite,
  TilingSpriteSystem,
} from "@eva/plugin-renderer-tiling-sprite";
import Res from './res'
import BackGround from "./GameObjects/background";
import Floor from "./GameObjects/floor";
import Player from "./GameObjects/player";
import Cacuts from "./GameObjects/cacuts";
import Jump from "./Components/Jump";
import Score from "./GameObjects/score";
import GameComponent from "./Components/Game";

resource.addResource(Res);

const game = new Game({
  autoStart: true,
  frameRate: 70, // Compatible with Eva's own bug, the frame rate must be greater than 60
  systems: [
    new RendererSystem({
      canvas: document.querySelector("#canvas"),
      width: 640,
      height: 320,
      // antialias: true,
    }),
    new ImgSystem(),
    new TransitionSystem(),
    new SpriteAnimationSystem(),
    new RenderSystem(),
    new EventSystem(),
    new GraphicsSystem(),
    new TextSystem(),
    new GraphicsSystem(),
    new EventSystem(),
    new PhysicsSystem({
      resolution: window.devicePixelRatio / 2, // 保持RendererSystem的resolution一致
      isTest: false, // 是否开启调试模式
      element: document.getElementById("container"), // 调试模式下canvas节点的挂载点
      world: {
        gravity: {
          y: 1 // 重力
        },
      },
    }),
    new TilingSpriteSystem(),
  ],
});



game.scene.addChild(BackGround())
game.scene.addChild(Floor());

const player = Player()
game.scene.addChild(player);

document.addEventListener("click", () => {
  const player: GameObject = game.scene.gameObjects.find((item) => { return item.name == "player" })
  if (player) {
    player.getComponent(Jump).jump()
  } else {
    const player = Player()
    game.scene.addChild(player);
    game.scene.addChild(Cacuts())
    const gameComponent: GameComponent = player.getComponent("GameComponent")
    gameComponent.setgame(game)
  }
});

game.scene.addChild(Cacuts())
game.scene.addChild(Score())

const gameComponent: GameComponent = player.getComponent("GameComponent")
gameComponent.setgame(game)