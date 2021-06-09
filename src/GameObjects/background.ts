import { GameObject } from "@eva/eva.js";
import { TilingSprite } from "@eva/plugin-renderer-tiling-sprite";
import TilingSpriteMove from "../Components/TilingSpriteMove";
const BackGround = () => {
    const backGround = new GameObject("bg", {
        size: { width: 300, height: 200 },
    });

    backGround.addComponent(
        new TilingSprite({
            resource: "bg",
            tileScale: { x: 1, y: 1 },
            tilePosition: { x: -1, y: 0 },
        })
    );

    backGround.addComponent(new TilingSpriteMove());
    return backGround
}


export default BackGround