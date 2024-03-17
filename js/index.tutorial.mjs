import {
    Config,
    View,
    Player,
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
let platforms
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
}

function update() {
    const player = elements.player
    player.update(cursors)
}