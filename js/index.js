import {
    Config,
    Scene,
    View,
    Frame,
    SquareFrame,
    Img,
    SpriteSheet,
    physics
} from './PhaserHelpers/Constants.mjs'

const assets = 'js/assets/'

const view = new View(512,382)
const elements = {
    background: new Img('sky', assets + 'sky.png'),
    star: new Img('star', assets + 'star.png'),
    platform: new Img('platform', assets + 'platform.png'),
    bomb: new Img('bomb', assets + 'bomb.png'),
    dude: new SpriteSheet('dude', assets + 'dude.png', new SquareFrame(48))
}
const background = new Img('sky', 'assets/sky.png')
const dude = new SpriteSheet('dude', assets + 'dude.png', new SquareFrame(48))

const preload = () => {
    // Object.values(elements).forEach(value => {
    //     value.preload(this)
    // })
    this.load.image(background.alias, background.path)
    dude.preload(this)
}
const create = () => {
    elements.background.create(this, view.width/2, view.height/2)
    elements.star.create(this, 0,0)
}
const update = () => {}

const sceneA = new Scene(preload, create, update)
const config = new Config(view, physics.platformer, sceneA)
const game = new Phaser.Game(config)



