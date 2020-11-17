namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
}
function setup () {
    tiles.setTilemap(tiles.createTilemap(
            hex`10001000020202020202020202020202020202020202060606060606060606060802020202020602020202020202031006020202020206020304040404040b06080202020202060209020202020c0f06080202020202060209020202020209060606020202020602090404040a040e020206020202020602090202020902090202060202020206020902030409040b020206020202020602090209020902020202060202020206020c040e020d04040f020602020202060202020c0a0b020209020602020202060202020209020202090206020202020602020202090202020c040602020202060606060601060606060606020202020202020206060602020202020202`,
            img`
                . . . . . . . . . . . . . . . .
                . . 2 2 2 2 2 2 2 2 2 2 . . . .
                . . 2 . . . . . . . . . 2 . . .
                . . 2 . . . . . . . . 2 . . . .
                . . 2 . . . . . . . . 2 . . . .
                . . 2 . . . . . . . . 2 2 2 . .
                . . 2 . . . . . . . . . . 2 . .
                . . 2 . . . . . . . . . . 2 . .
                . . 2 . . . . . . . . . . 2 . .
                . . 2 . . . . . . . . . . 2 . .
                . . 2 . . . . . . . . . . 2 . .
                . . 2 . . . . . . . . . . 2 . .
                . . 2 . . . . . . . . . . 2 . .
                . . 2 . . . . . . . . . . 2 . .
                . . 2 2 2 2 2 . 2 2 2 2 2 2 . .
                . . . . . . 2 2 2 . . . . . . .
            `,
            [myTiles.tile0,sprites.dungeon.buttonTeal,sprites.dungeon.hazardLava0,sprites.vehicle.roadTurn1,sprites.vehicle.roadHorizontal,sprites.castle.rock1,sprites.builtin.brick,sprites.dungeon.buttonTealDepressed,sprites.dungeon.hazardLava1,sprites.vehicle.roadVertical,sprites.vehicle.roadIntersection3,sprites.vehicle.roadTurn4,sprites.vehicle.roadTurn3,sprites.vehicle.roadIntersection2,sprites.vehicle.roadIntersection4,sprites.vehicle.roadTurn2,sprites.dungeon.buttonOrange],
            TileScale.Sixteen
        ))

}

let coin: Sprite = null
let player1: Sprite = null
setup()
