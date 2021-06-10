import { GameObject, Transform } from "@eva/eva.js";
import { Component } from "@eva/eva.js";
import Cacuts from "../GameObjects/cacuts";
import GameOver from "../GameObjects/gameover";
import player from "../GameObjects/player";
import GameComponent from "./Game";

export default class PlayerAction extends Component {
    gameObject: GameObject;
    static componentName = "playerAction";
    game: any
    constructor() {
        super();
    }
    setgame(game) {
        this.game = game
    }
    update() {
        const x = this.gameObject.getComponent(Transform).position.x
        // // console.log(x)
        // this.gameObject.transform.position.x-=10
        if (x <= -5) {
            // console.log('gameover', this.gameObject.scene.addChild(GameOver()))
            this.gameObject.scene.addChild(GameOver())
            // this.gameObject.destroy()
            const gameComponent: GameComponent = this.gameObject.getComponent("GameComponent")
            const g: any = gameComponent.game
            this.gameObject.removeComponent("playerAction")
            setTimeout(() => {
                g.pause()
            }, 500);
        }
    }
}