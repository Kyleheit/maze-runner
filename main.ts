controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f . . . . . 
        . . f f 7 7 7 7 f f . . . 
        . f f 7 7 7 7 7 7 f f . . 
        f f 7 7 7 7 7 7 7 7 f f . 
        f 7 7 7 7 7 7 7 7 7 7 f . 
        f 7 7 7 7 7 7 7 7 7 7 f . 
        f 7 7 7 7 7 7 7 7 7 7 f . 
        f 7 7 7 7 7 7 7 7 7 7 f . 
        f 7 7 7 7 7 7 7 7 7 7 f . 
        . f f f f f f f f f f . . 
        . f f f f f f f f f f . . 
        f e f f f f f f f f e f . 
        e 4 f 7 7 7 7 7 7 c 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f 7 7 7 7 f f . . 
        . f f f 7 7 7 7 7 7 f f . 
        f f 7 7 7 7 7 7 7 7 7 f f 
        f 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 f 
        . . f f f f f f f f f f . 
        . . e f f f f f f f f f . 
        . . e f f f f f f f f e f 
        . . 4 c 7 7 7 7 7 e 4 4 e 
        . . e f f f f f f f e e . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f 7 7 7 7 f f . . 
        . . f f 7 7 7 7 7 7 f f . 
        . f f 7 7 7 7 7 7 7 7 f f 
        f f 7 7 7 7 7 7 7 7 7 7 f 
        f 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 f 
        . . 7 7 7 7 7 7 7 7 7 7 f 
        . . f f f f f f f f f f . 
        . . f f f f f f f f f e . 
        . f e f f f f f f f f e . 
        . e 4 4 e 7 7 7 7 7 c 4 . 
        . . e e f f f f f f f e . 
        . . . . . . . . f f f . . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite.destroy(effects.ashes, 500)
    game.over(false)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . f f f f f . . . 
        . . . f 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 f f 
        f 7 7 7 7 7 7 7 7 7 7 7 f 
        f f f f f e f f f 7 7 7 f 
        . f f f e e f f f 7 7 7 f 
        . . f f e e f b f e e f f 
        . . . f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e e f . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 6 6 6 f e e f . . 
        . . . . f f f f f f . . . 
        . . . . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f 7 7 7 7 7 7 f f . 
        . . f 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 f f 
        f 7 7 7 7 7 7 7 7 7 7 7 f 
        f f f f f f f f f f 7 7 f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . f f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 e e f f f . 
        . . . f f e e 4 4 e f . . 
        . . . f 7 7 e 4 4 e f . . 
        . . f f 6 6 f e e f f f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 f 
        f 7 7 7 7 7 7 7 7 7 7 7 f 
        f f f f f e f f f 7 7 7 f 
        . f f f e e f f f f f f f 
        . f f f e e f b f e e f f 
        . . f f 4 4 f 1 e 4 e f f 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e 4 4 4 . 
        . . . f 7 7 7 7 e 4 4 e . 
        . . f f 6 6 6 6 f e e f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles12)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundCenter, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(13, 2))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.splash(game.ask("A or B", ""), "")
    if (true) {
        tiles.setTilemap(tilemap`level3`)
        mySprite.setPosition(25, 121)
    }
    if (false) {
        game.over(false, effects.splatter)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f 7 7 7 7 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 f . . 
        f 7 7 7 7 7 7 7 7 7 7 f . 
        f 7 7 7 7 7 7 7 7 7 7 7 f 
        f 7 7 f f f f f f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f f . 
        f f e 4 e 1 f 4 4 f f . . 
        . f f f e 4 4 4 4 f . . . 
        . 4 4 4 e e e e f f . . . 
        . e 4 4 e 7 7 7 7 f . . . 
        . f e e f 6 6 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f 7 7 7 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 f . . 
        f f 7 7 7 7 7 7 7 7 7 f . 
        f 7 7 7 7 7 7 7 7 7 7 7 f 
        f 7 7 f f f f f f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f f . . 
        . f f f e e 4 4 4 f . . . 
        . . f e 4 4 e e f f . . . 
        . . f e 4 4 e 7 7 f . . . 
        . f f f e e f 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `,img`
        . . . f f f f f . . . . . 
        . f 7 7 7 7 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 f . . 
        f 7 7 7 7 7 7 7 7 7 7 f . 
        f 7 7 7 7 7 7 7 7 7 7 7 f 
        f 7 7 f f f f f f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f . . . 
        . f f f e 4 4 4 4 f . . . 
        . . f e e e e e f f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . f e e f 6 6 6 f . . . 
        . . . f f f f f f . . . . 
        . . . . f f f . . . . . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite.destroy(effects.ashes, 500)
    game.over(false)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f . . . . . 
        . . f f 7 7 7 7 f f . . . 
        . f f 7 7 7 7 7 7 f f . . 
        f f 7 7 7 7 7 7 7 7 f f . 
        f 7 7 7 7 7 7 7 7 7 7 f . 
        f 7 7 7 7 7 7 7 7 7 7 f . 
        f 7 7 7 7 7 7 7 7 7 7 f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f 7 7 7 7 f f . . 
        . . f 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 f 
        . f f f b f e e f b f f f 
        . f f 4 1 f 4 4 f 1 4 f f 
        . . f e 4 4 4 4 4 e e f e 
        . f e f b 7 7 7 e 4 4 4 e 
        . e 4 f 7 7 7 7 e 4 4 e . 
        . . . f 6 6 6 6 6 e e . . 
        . . . f f f f f f f . . . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . . f 7 7 7 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 f . . 
        f 7 7 7 7 7 7 7 7 7 7 f . 
        f 7 7 7 7 7 7 7 7 7 7 f . 
        f 7 7 7 7 7 7 7 7 7 7 f . 
        f 7 7 7 7 7 7 7 7 7 7 f . 
        f f f b f e e f b f f f . 
        f f 4 1 f 4 4 f 1 4 f f . 
        e f e e 4 4 4 4 4 e f . . 
        e 4 4 4 e 7 7 7 b f e f . 
        . e 4 4 e 7 7 7 7 f 4 e . 
        . . e e 6 6 6 6 6 f . . . 
        . . . f f f f f f f . . . 
        . . . . . . . f f f . . . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDark3, function (sprite, location) {
    mySprite.destroy(effects.spray, 500)
    game.over(false)
})
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f 7 7 7 7 f f . . . 
    . f 7 7 7 7 7 7 7 7 f . . 
    f 7 7 7 7 7 7 7 7 7 7 c . 
    f 7 7 7 7 7 7 7 7 7 7 c . 
    7 7 7 7 7 7 7 7 7 7 7 7 . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level2`)
scene.setBackgroundColor(4)
scene.cameraFollowSprite(mySprite)
mySprite.setPosition(24, 110)
pause(5000)
forever(function () {
	
})
forever(function () {
    let mySprite2: Sprite = null
    pause(3000)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite2, -50, 0)
})
