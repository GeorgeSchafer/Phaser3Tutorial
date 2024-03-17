import {
    Config,
    Scene,
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
let sceneA
let config
let game
const assets = '../js/assets/'
const view = new View(512, 382)
const elements = {
    sky: new Img(assets + 'sky'),
    star: new Img(assets + 'star'),
    platforms: new Platform(new Img(assets + 'platform')),
    // player: null,
}

function preload() {
    activeScene = this
    for(let [key] of Object.entries(elements)){
        elements[key].preload(activeScene)
    }
}

function create() {
    let platforms
    
    elements.platforms.create(this)
    elements.sky.create(activeScene, view.centerX(), view.centerY())
    elements.star.create(activeScene, view.centerX(), view.centerY())

    platforms = elements.platforms.get('physicsGroup')
    
    platforms.create(400, 568, 'ground').setScale(2).refreshBody()
    platforms.create(600, 400, 'ground')
    platforms.create(50, 250, 'ground')
    platforms.create(750, 220, 'ground')
}

function update() {  

}

sceneA = new Scene(preload, create, update)
config = new Config(view, physics, sceneA)
game = new Phaser.Game(config)