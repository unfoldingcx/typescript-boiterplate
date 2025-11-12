import { EventEmitter } from "events"

import { Logger } from "winston"

import { AppEnvType } from "@/types/env"

declare global {
  var logger: Logger                    // Logger instance
  var config: AppEnvType                // App config
  var shutdown: () => Promise<void>     // Graceful shutdown
  var __DEV__: boolean                  // Development flag
  var __PROD__: boolean                 // Production flag
  var __TEST__: boolean                 // Test flag
  var events: EventEmitter              // EventEmitter instance
}