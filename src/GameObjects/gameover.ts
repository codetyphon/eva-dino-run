import { GameObject } from '@eva/eva.js';
import { Physics, PhysicsType } from '@eva/plugin-matterjs';
import { Img } from '@eva/plugin-renderer-img';
import Enemy from '../Components/Enemy';
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

    return gameOver;
}
export default GameOver