import { Game, GameObject, Transform } from '@eva/eva.js';
import { Physics, PhysicsType } from '@eva/plugin-matterjs';
import { Img } from '@eva/plugin-renderer-img';
import Enemy from '../Components/Enemy';
import { Text } from '@eva/plugin-renderer-text'
import {
    Event,
    EventSystem,
    HIT_AREA_TYPE,
} from '@eva/plugin-renderer-event';
import { Scene } from '@eva/eva.js';
import Cacuts from './cacuts';
import PlayerAction from '../Components/PlayerAction';
import GameComponent from '../Components/Game';
import { Sprite } from '@eva/renderer-adapter';
import Player from './player';
const GameOver = () => {
    const gameOver = new GameObject("cacuts", {
        size: { width: 200, height: 20 },
        origin: { x: 0.5, y: 0.5 },
        position: {
            x: 150,
            y: 100
        },
        anchor: {
            x: 0,
            y: 0
        }
    });

    gameOver.addComponent(
        new Img({
            resource: 'gameOver'
        })
    );

    const evt = gameOver.addComponent(new Event())

    evt.on('touchstart', e => {
        console.log('restart')
        const scene: Scene = gameOver.scene
        const score = scene.gameObjects.find((item) => { return item.name == "score" })
        const text = score.getComponent(Text)
        text.text = 0 + ""

        const player: GameObject = scene.gameObjects.find((item) => { return item.name == "player" })
        console.log(player)
        const cacuts = scene.gameObjects.find((item) => { return item.name == "cacuts" })
        scene.removeGameObject(cacuts)
        cacuts.getComponent(Physics).removeAllListeners()
        cacuts.removeComponent(Physics)
        cacuts.destroy()

        const gameComponent: GameComponent = player.getComponent("GameComponent")
        const game: Game = gameComponent.game
        player.getComponent(Physics).removeAllListeners()
        player.removeComponent(Physics)
        scene.removeGameObject(player)
        player.destroy()
        game.start()
        gameOver.destroy()

    })
    return gameOver;
}
export default GameOver