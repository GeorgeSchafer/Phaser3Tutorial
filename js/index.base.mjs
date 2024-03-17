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
}

const player = null

function preload() {
    activeScene = this
    for(let [key] of Object.entries(elements)){
        elements[key].preload(activeScene)
    }
}

function create() {
    elements.sky.create(activeScene, view.centerX(), view.centerY())
    elements.star.create(activeScene, view.centerX(), view.centerY())
}

function update() {  

}

sceneA = new Scene(preload, create, update)
config = new Config(view, physics, sceneA)
game = new Phaser.Game(config)