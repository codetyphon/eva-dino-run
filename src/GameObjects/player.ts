import { GameObject } from "@eva/eva.js";
import { Physics, PhysicsType } from "@eva/plugin-matterjs";
import { SpriteAnimation } from "@eva/plugin-renderer-sprite-animation";
import Jump from "../Components/Jump";
import PlayerAction from "../Components/PlayerAction";
const Player = () => {
    const player = new GameObject("dino", {
        size: { width: 47, height: 50 },
        origin: { x: 0.5, y: 0.5 },
        position: {
            x: 50,
            y: 170,
        },
        scale: {
            x: 0.5,
            y: 0.5
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
    return player
}

export default Player