import {
    Config,
    Scene,
    View,
    Player,
    Frame,
    SquareFrame,
    Img,
    SpriteSheet,
    physics
} from './PhaserHelpers/Constants.mjs'

const assets = '../js/assets/'
const view = new View(512,382)
const imgs = {
    background: new Img('ALIAS', assets + 'FILENAME.png'),
    star: new Img('ALIAS', assets + 'FILENAME.png'),
    platform: new Img('ALIAS', assets + 'FILENAME.png'),
    bomb: new Img('ALIAS', assets + 'FILENAME.png'),
}

const player = new Player(new SpriteSheet('ALIAS', assets + 'FILENAME.png', new Frame(WIDTH,HEIGHT)))
const sceneA = new Scene(preload, create, update)

function preload()
{
    Object.values(imgs).forEach(value => {
        value.preload(this)
    })
    player.preload(this)
}

function create()
{
    Object.values(imgs).forEach(value => {
        value.create(this, view.centerX(), view.centerY())
    })
    player.create(view, this)

}

function update()
{
    
}

const config = new Config(view, physics.platformer, sceneA)
const game = new Phaser.Game(config)