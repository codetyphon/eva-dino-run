import { GameObject } from "@eva/eva.js";
import { TilingSprite } from "@eva/plugin-renderer-tiling-sprite";
import TilingSpriteMove from "../Components/TilingSpriteMove";
const BackGround = () => {
    const backGround = new GameObject("bg", {
        size: { width: 640, height: 320 },
    });

    backGround.addComponent(
        new TilingSprite({
            resource: "bg",
            tileScale: { x: 320/200, y: 320/200 },
            tilePosition: { x: -1, y: 0 },
        })
    );

    backGround.addComponent(new TilingSpriteMove());
    return backGround
}


export default BackGround