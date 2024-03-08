import {
    Frame,
    SquareFrame,
    Map,
    SquareMap,
    CharacterState,
    EnvironmentImage,
    EnvironmentTileset,
    Environment,
    loadEnvironment,
    loadCharacterIdle,
    createEnvironment as addEnvironment,
    VIEW as V,
    config
} from './js/PhaserHelpers/Platformer.mjs'

import { index } from '../index.js'

const assetPath = '../assets/'

const starGather = new Environment(
    new EnvironmentImage(assetPath + 'sky.png', 800, 600),
    new EnvironmentImage(assetPath + 'platform.png', 400, 32),
    [],
    new EnvironmentImage(assetPath + 'star.png', 24, 22)
)

function preload()
{
}

function create()
{
}

function update()
{
}

export {
    index,
    preload,
    create,
    update,
    config
}