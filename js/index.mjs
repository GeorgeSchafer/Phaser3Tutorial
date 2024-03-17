import {
    Config,
    Scene,
    View,
    Player,
    Frame,
    SquareFrame,
    Img,
    Platform,
    SpriteSheet,
    physics
} from './PhaserHelpers/Constants.mjs'



let activeScene
let sceneA
let config
let game
const assets = '../js/assets/'
const view = new View(512,382)
const elements = {

}

const player = null

function preload()
{
    activeScene = this
}

function create()
{

}

function update()
{

}

sceneA = new Scene(preload, create, update)
config = new Config(view, physics.platformer, sceneA)
game = new Phaser.Game(config)