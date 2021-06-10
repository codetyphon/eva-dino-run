import { GameObject, Scene, Transform } from "@eva/eva.js";
import { Component } from "@eva/eva.js";
import Cacuts from "../GameObjects/cacuts";
import { Text } from '@eva/plugin-renderer-text'
import { Physics } from "@eva/plugin-matterjs";

export default class Enemy extends Component {
    gameObject: GameObject;
    static componentName = "enemy";
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
        if (x <= 0) {
            const scene: Scene = this.gameObject.scene
            const score = scene.gameObjects.find((item) => { return item.name == "score" })
            const text = score.getComponent(Text)
            const number:number = parseInt(text.text)
            text.text = (number + 1) + ""
            this.gameObject.getComponent(Physics).removeAllListeners()
            this.gameObject.scene.addChild(Cacuts())
            scene.removeChild(this.gameObject)
            this.gameObject.destroy()
        }
        // this.gameObject.getComponent(Transform).position.x = x - 50
    }
}