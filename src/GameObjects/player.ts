import { Component, GameObject } from "@eva/eva.js";
import { Physics, PhysicsType } from "@eva/plugin-matterjs";
import { SpriteAnimation } from "@eva/plugin-renderer-sprite-animation";
import GameComponent from "../Components/Game";
import Jump from "../Components/Jump";
import PlayerAction from "../Components/PlayerAction";
const Player = () => {
    const player = new GameObject("player", {
        size: { width: 47, height: 50 },
        origin: { x: 0.5, y: 0.5 },
        position: {
            x: 50,
            y: 270,
        },
        scale: {
            x: 1,
            y: 1
        },
        anchor: {
            x: 0,
            y: 0,
        },
    });

    const frame = player.addComponent(
        new SpriteAnimation({
            resource: "dino",
            speed: 100,
        })
    );

    frame.play()

    player.addComponent(new Jump())
    player.addComponent(new PlayerAction())
    player.addComponent(new GameComponent())

    const playerPhysics = player.addComponent(new Physics({
        type: PhysicsType.RECTANGLE,
        bodyOptions: {
            isStatic: false,
            restitution: 0,
            frictionAir: 0.01,
            friction: 0,
            frictionStatic: 0,
            force: {
                x: 0,
                y: 0,
            },
            stopRotation: true,
        },
    }))
    playerPhysics.on('collisionStart', (body, gameObject1, gameObject2) => {
        // body is the target
        player.getComponent(Jump).onfloor = true
        if (body._name == 'floor') {
            frame.play();
        }
    });
    player.addComponent(new class Update extends Component {
        update() {
            playerPhysics.body.angle = 0
        }
    })

    return player
}

export default Player