import { Transform } from "@eva/eva.js";
import { Component } from "@eva/eva.js";
import { Physics } from "@eva/plugin-matterjs";

export default class Jump extends Component {
    gameObject: any;
    static componentName = "enemy";
    //   init(obj: any) {
    //     Object.assign(this, obj);
    //   }
    onfloor: boolean
    constructor() {
        super();
        this.onfloor = false
    }
    jump() {
        this.gameObject.getComponent("SpriteAnimation").stop()
        if (this.onfloor) {
            this.gameObject.getComponent(Physics).body.force.y = -0.02
            this.onfloor = false
        }
    }
    update() {
        // this.gameObject.getComponent(Transform).position.x-=1
    }
}