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



let config
let game
let activeScene
const assets = '../js/assets/'
const view = new View(512,382)
const player = new Player(new SpriteSheet('ALIAS', assets + 'FILENAME.png', new Frame(WIDTH,HEIGHT)))
const sceneA = new Scene(preload, create, update)
const imgs = {
    background: new Img('ALIAS', assets + 'FILENAME.png'),
    star: new Img('ALIAS', assets + 'FILENAME.png'),
    platform: new Img('ALIAS', assets + 'FILENAME.png'),
    bomb: new Img('ALIAS', assets + 'FILENAME.png'),
}

function preload()
{
    activeScene = this
    Object.values(imgs).forEach(value => {
        value.preload(activeScene)
    })
    player.preload(activeScene)
}

function create()
{
    Object.values(imgs).forEach(value => {
        value.create(activeScene, view.centerX(), view.centerY())
    })
    player.create(view, activeScene)

}

function update()
{
    
}

config = new Config(view, physics.platformer, sceneA)
game = new Phaser.Game(config)