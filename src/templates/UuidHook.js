/* eslint-disable */
'use strict'

const UuidHook = (exports = module.exports = {})
const uuidv4 = require('uuid/v4')

const isset = ref => typeof ref !== 'undefined'

UuidHook.createUuid = async modelInstance => {
  isset(modelInstance.uuid)
    ? (modelInstance.uuid = modelInstance.uuid)
    : (modelInstance.uuid = await uuidv4())
}
