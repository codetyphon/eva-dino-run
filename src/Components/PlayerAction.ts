import { GameObject, Transform } from "@eva/eva.js";
import { Component } from "@eva/eva.js";
import Cacuts from "../GameObjects/cacuts";
import GameOver from "../GameObjects/gameover";

export default class PlayerAction extends Component {
    gameObject: GameObject;
    static componentName = "player";
    //   init(obj: any) {
    //     Object.assign(this, obj);
    //   }
    constructor() {
        super();
    }
    update() {
        const x = this.gameObject.getComponent(Transform).position.x
        // // console.log(x)
        // this.gameObject.transform.position.x-=10
        if (x <= -5) {
            console.log('gameover', this.gameObject.scene.addChild(GameOver()))
            // this.gameObject.destroy()
        }
        // this.gameObject.getComponent(Transform).position.x = x - 50
    }
}