import { GameObject } from '@eva/eva.js';
import { Physics, PhysicsType } from '@eva/plugin-matterjs';
import { Img } from '@eva/plugin-renderer-img';
import Enemy from '../Components/Enemy';
const Cacuts = () => {
    const cacuts = new GameObject("cacuts", {
        size: { width: 80 / 4, height: 132 / 4 },
        origin: { x: 0.5, y: 0.5 },
        position: {
            x: 300,
            y: 190
        },
        anchor: {
            x: 0,
            y: 0
        }
    });

    cacuts.addComponent(
        new Img({
            resource: 'cacuts'
        })
    );

    const physics: Physics = cacuts.addComponent(new Physics({
        type: PhysicsType.RECTANGLE,
        bodyOptions: {
            isStatic: false, // Whether the object is still, any force acting on the object in a static state will not produce any effect
            restitution: 1,
            frictionAir: 0,
            friction: 0,
            frictionStatic: 0,
            force: {
                x: -0.01,
                y: 0,
            },
            stopRotation: true, // default false, usually do not need to be set
        },
    }))

    physics.on('collisionStart', (body, gameObject1, gameObject2) => {
        // body is the target
        console.log('hit floor', gameObject1)
        if (body._name == 'floor') {
            console.log('run left!!!')
            // gameObject1.getComponent(Physics).body.force.x = -10
        }
    });

    cacuts.addComponent(new Enemy());

    return cacuts;
}
export default Cacuts