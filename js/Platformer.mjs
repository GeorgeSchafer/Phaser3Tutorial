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

const assets = '../js/assets/'
const view = new View(512,382)
const imgs = {
    background: new Img('sky', assets + 'sky.png'),
    star: new Img('star', assets + 'star.png'),
    platform: new Platform(new Img('platform', assets + 'platform.png')),
    bomb: new Img('bomb', assets + 'bomb.png'),
}

const dude = new Player(new SpriteSheet('dude', assets + 'dude.png', new Frame(32,48)))

function preload()
{
    Object.values(imgs).forEach(value => {
        value.preload(this)
    })
    dude.preload(this)
    
}

function create()
{
    imgs.background.create(this, view.centerX(), view.centerY())
    dude.create(view, this)
}

function update()
{
    dude.update()
}

const sceneA = new Scene(preload, create, update)
const config = new Config(view, physics.platformer, sceneA)
const game = new Phaser.Game(config)



