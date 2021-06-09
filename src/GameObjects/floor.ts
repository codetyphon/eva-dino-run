import { GameObject } from "@eva/eva.js";
import { Physics, PhysicsType } from "@eva/plugin-matterjs";
import { Img } from "@eva/plugin-renderer-img";
const Floor = () => {
    const floor = new GameObject("floor", {
        size: { width: 600, height: 2 },
        origin: { x: 0.5, y: 0.5 },
        position: {
            x: 150,
            y: 195,
        },
        anchor: {
            x: 0,
            y: 0,
        },
    });

    floor.addComponent(
        new Img({
            resource: 'floor'
        })
    );

    floor.addComponent(new Physics({
        type: PhysicsType.RECTANGLE,
        bodyOptions: {
            isStatic: true,
            restitution: 0,
            frictionAir: 0,
            friction: 0,
            frictionStatic: 0,
            force: {
                x: 0,
                y: 0,
            },
            stopRotation: true,
        },
    }))
    return floor
}


export default Floor