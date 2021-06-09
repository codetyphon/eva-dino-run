import { Component } from "@eva/eva.js";
import { TilingSprite } from "@eva/plugin-renderer-tiling-sprite";

export default class Move extends Component {
    gameObject: any;
    static componentName = "Move";
    constructor() {
        super();
    }
    update() {
        this.gameObject.getComponent(TilingSprite).tilePosition.x -= 1
    }
}
