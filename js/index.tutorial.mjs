import {
    Config,
    View,
    Player,
    Typeface,
    Frame,
    SquareFrame,
    Img,
    SpriteSheet,
} from './PhaserHelpers/Constants.mjs'
import {
    Platform,
    PlatformerPlayer,
    physics,
} from './PhaserHelpers/Platformer/index.mjs'


let activeScene
let stars
let bombs

const scoreTypeface = new Typeface(32, '#000')
let scoreText
let score = 0

let playerSprite
let cursors

const view = new View(800, 600)
const config = new Config(view, physics)
config.scene = {
    preload: preload,
    create: create,
    update: update,
}
const game = new Phaser.Game(config)
const assets = '../js/assets/'
const elements = {
    sky: new Img('sky', assets + 'sky.png'),
    star: new Img('star', assets + 'star.png'),
    platform: new Platform(new Img('platform', assets + 'platform.png')),
    player: new PlatformerPlayer(new SpriteSheet('dude', assets + 'dude.png', new Frame(32, 48))),
    bomb: new Img('bomb', assets + 'bomb.png')
}

function preload() {
    activeScene = this
    for(let [key] of Object.entries(elements)){
        elements[key].preload(activeScene)
    }
}

function create() {
    const sky = elements.sky
    const star = elements.star
    const platform = elements.platform
    const player = elements.player
    
    sky.create(activeScene, view.centerX(), view.centerY())
    platform.create(activeScene)

    player.create(activeScene, playerSprite)

    activeScene.physics.add.collider(player.get('physicsGroup'), platform.get('physicsGroup'))
    cursors = this.input.keyboard.createCursorKeys()

    stars = this.physics.add.group({
        key: star.get('alias'),
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    })

    stars.children.iterate(function (child) {
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    })

    this.physics.add.collider(stars, platform.get('physicsGroup'))
    this.physics.add.overlap(player.get('physicsGroup'), stars, collectStar, null, this)

    scoreText = activeScene.add.text(16, 16, `score: ${score}`, scoreTypeface.transform())

    bombs = this.physics.add.group();

    this.physics.add.collider(bombs, platform.get('physicsGroup'))

    this.physics.add.collider(player.get('physicsGroup'), bombs, hitBomb, null, this)

}

function collectStar (player, star)
{
    star.disableBody(true, true)

    score += 10
    scoreText.setText('Score: ' + score)

    if (stars.countActive(true) === 0)
    {
        stars.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true)

        })

        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400)

        var bomb = bombs.create(x, 16, 'bomb')
        bomb.setBounce(1)
        bomb.setCollideWorldBounds(true)
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20)
    }

}

function hitBomb (player, bomb)
{
    this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play('turn');

    gameOver = true;
}


function update() {
    const player = elements.player
    player.update(cursors)
}