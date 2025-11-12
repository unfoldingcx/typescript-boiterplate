'use strict'

import StringBuilder from '@utils/string-builder'
import chalk from 'chalk'
import winston from 'winston'

const supressFromEnvironment = winston.format((info) => {
  if (__PROD__) {
    const allowedLevels = ['error', 'warn', 'log']
    const isAllowed = allowedLevels.includes(info.level)
    return isAllowed ? info : null
  }
  return info
})

const defaultLogger = winston.createLogger({
  format: winston.format.combine(
    supressFromEnvironment(),
    winston.format.timestamp({
      format: 'DD/MM @ HH:mm',
    }),
    winston.format.splat(), // This formats %s, %d, etc. in messages
    winston.format.printf(({ timestamp, level, message }) => {
      const buffer = new StringBuilder()

      // Prints env
      if (global.__DEV__) {
        buffer.append(chalk.gray(`[${config.NODE_ENV}]`))
        buffer.append(' ')
      } else if (global.__PROD__) {
        buffer.append(chalk.red(`[${config.NODE_ENV}]`))
        buffer.append(' ')
      } else if (global.__TEST__) {
        buffer.append(chalk.yellow(`[${config.NODE_ENV}]`))
        buffer.append(' ')
      }

      // Prints timestamp
      if (level === 'info' || level === 'log') {
        buffer.append(`[${chalk.gray(timestamp)}]`)
      } else if (level === 'error') {
        buffer.append(`[${chalk.redBright.underline(timestamp)}]`)
      } else if (level === 'warn') {
        buffer.append(`[${chalk.yellow.underline(timestamp)}]`)
      } else if (level === 'debug') {
        buffer.append(`[${chalk.green.underline(timestamp)}]`)
      }

      buffer.append(' ')

      // Prints level
      if (level === 'error') {
        buffer.append(chalk.red('🚨'))
      } else if (level === 'warn') {
        buffer.append(chalk.yellow('⚠️'))
      } else if (level === 'info') {
        buffer.append(chalk.blue('ℹ️'))
      } else if (level === 'debug') {
        buffer.append(chalk.green('🐛'))
      } else if (level === 'log') {
        buffer.append(chalk.gray('💬'))
      }

      // Prints separator
      buffer.append(' → ')

      // Prints the formatted message
      if (level === 'error') {
        buffer.append(chalk.red(message))
      } else if (level === 'warn') {
        buffer.append(chalk.yellow(message))
      } else if (level === 'info') {
        buffer.append(chalk.blue(message))
      } else if (level === 'debug') {
        buffer.append(chalk.green(message))
      } else {
        buffer.append(message)
      }

      return buffer.toString()
    })
  ),
  transports: [new winston.transports.Console()],
})

export { defaultLogger as default }