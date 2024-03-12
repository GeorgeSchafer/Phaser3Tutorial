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
    background: new Img('sky', assets + 'sky.png'),
    star: new Img('star', assets + 'star.png'),
    platform: new Platform(new Img('platform', assets + 'platform.png')),
    bomb: new Img('bomb', assets + 'bomb.png'),
}

const dude = new Player(new SpriteSheet('dude', assets + 'dude.png', new Frame(32,48)))

function preload()
{
    activeScene = this
    Object.values(elements).forEach(element => {
        element.preload(activeScene)
    })
    dude.preload(activeScene)   
}

function create()
{
    let platforms
    elements.background.create(activeScene, view.centerX(), view.centerY())
    dude.create(view, activeScene)
    elements.platform.setPhysicsGroup(this.physics.add.staticGroup())
    platforms = elements.platform.getPhysicsGroup()
    platforms.create(400, 568, 'ground').setScale(2).refreshBody()
    platforms.create(600, 400, 'ground')
    platforms.create(50, 250, 'ground')
    platforms.create(750, 220, 'ground')
}

function update()
{
    dude.update()
}

sceneA = new Scene(preload, create, update)
config = new Config(view, physics.platformer, sceneA)
game = new Phaser.Game(config)