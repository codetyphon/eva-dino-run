import { GameObject, Transform } from "@eva/eva.js";
import { Component } from "@eva/eva.js";
import Cacuts from "../GameObjects/cacuts";

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
        if(x<=-5){
            this.gameObject.scene.addChild(Cacuts())
            this.gameObject.destroy()

        }
        // this.gameObject.getComponent(Transform).position.x = x - 50
    }
}