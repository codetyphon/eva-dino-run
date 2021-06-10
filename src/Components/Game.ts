import { GameObject, Transform } from "@eva/eva.js";
import { Component } from "@eva/eva.js";
import Cacuts from "../GameObjects/cacuts";
import GameOver from "../GameObjects/gameover";

export default class GameComponent extends Component {
    gameObject: GameObject;
    static componentName = "GameComponent";
    game:any
    constructor() {
        super();
    }
    setgame(game) {
        this.game = game
    }
}