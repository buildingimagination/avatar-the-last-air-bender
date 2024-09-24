sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(Fire_mushroom)
    info.changeLifeBy(-1)
})
let Mushroom: Sprite = null
let Fire_mushroom: Sprite = null
scene.setBackgroundImage(assets.image`Sosins comet`)
scroller.scrollBackgroundWithSpeed(-50, 0)
let mySprite = sprites.create(assets.image`Aang`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.setScore(0)
info.setLife(3)
forever(function () {
    Mushroom = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 8 8 8 8 8 8 8 . . . . . . . 
        . . 8 8 8 8 9 9 8 . . . . . . . 
        . . 8 9 9 8 9 9 8 . . . . . . . 
        . . 8 9 9 8 8 8 8 . . . . . . . 
        . . 9 9 8 8 9 9 8 . . . . . . . 
        . . 9 9 8 8 9 9 8 . . . . . . . 
        . . . . 1 1 . . . . . . . . . . 
        . . . . 1 1 . . . . . . . . . . 
        . . . . 1 1 . . . . . . . . . . 
        . . . . 1 1 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, -48, 0)
    Mushroom.y = randint(5, 155)
    pause(1000)
})
forever(function () {
    Fire_mushroom = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 4 4 4 4 4 4 4 . . . . . . . 
        . . 4 4 4 4 2 2 4 . . . . . . . 
        . . 4 2 2 4 2 2 4 . . . . . . . 
        . . 4 2 2 4 4 4 4 . . . . . . . 
        . . 2 2 4 4 2 2 4 . . . . . . . 
        . . 2 2 4 4 2 2 4 . . . . . . . 
        . . . . 1 1 . . . . . . . . . . 
        . . . . 1 1 . . . . . . . . . . 
        . . . . 1 1 . . . . . . . . . . 
        . . . . 1 1 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Fire_mushroom.setPosition(160, randint(0, 155))
    Fire_mushroom.setVelocity(-50, 0)
    pause(4000)
})
