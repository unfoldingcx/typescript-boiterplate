'use strict'

import EventEmitter from 'events'
import path from 'path'

import { AppEnvType } from '@types'
import dotenv from 'dotenv'
import _ from 'lodash'

dotenv.config({
  path: path.resolve(process.cwd(), '.env'),
  encoding: 'utf8',
  override: true,
  quiet: true,
})

import defaultLogger from '@/utils/logger.utils'

/**
 * Bootstrap the application
 */
const bootstrap = async () => {
  console.clear()

  // Load config
  global.config = process.env as unknown as AppEnvType

  // Add environment type flags
  global.__PROD__ = global.config.NODE_ENV?.includes('prod')
  global.__TEST__ = global.config.NODE_ENV?.includes('test')
  global.__DEV__ = !__PROD__ && !__TEST__

  // Init basics (globals)
  global.logger = defaultLogger
  logger.info('Config loaded for environment %s', config.NODE_ENV)
  logger.info('Bootstraping the application...')

  // Prepare our event emitter
  global.events = new EventEmitter({
    captureRejections: true,
  })

  // Avoid changing the event emitter instance
  global.events = Object.freeze(events)

  // Add graceful shutdown function
  global.shutdown = () => {
    logger.info('Shutting down the application gracefully...')
    process.exit(0)
  }

  // Init logger
  logger.info('Application bootstrapped successfully')

  // Emit ready event
  events.emit('app:ready', global)
}

export default bootstrap