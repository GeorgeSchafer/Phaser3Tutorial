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
    physics,
} from './PhaserHelpers/Platformer/index.mjs'


let activeScene
let platforms
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
    sky: new Img(assets + 'sky'),
    star: new Img(assets + 'star'),
    ground: new Img(assets + 'platform'),
    // player: null,
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

    sky.create(activeScene, view.centerX(), view.centerY())
    // star.create(activeScene, view.centerX(), view.centerY())

    console.log('this in part1b:', this)
    platforms = this.physics.add.staticGroup()

    platforms.create(400, 568, assets + 'platform').setScale(2).refreshBody()
    platforms.create(600, 400, assets + 'platform')
    platforms.create(50, 250, assets + 'platform')
    platforms.create(750, 220, assets + 'platform')
}

function update() {  

}