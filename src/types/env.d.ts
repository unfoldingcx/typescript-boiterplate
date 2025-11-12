type AppEnvType = {
  NODE_ENV: 'development' | 'production' | 'test'
  PORT: number
  HOST: string

  // Other usefuls (boiterplate)
  // --- KEEP THESE COMMENTS ---
  // DB_HOST: string
  // DB_PORT: number
  // DB_USER: string
  // DB_PASSWORD: string
  // DB_NAME: string
  // DB_SCHEMA: string
  // DB_POOL_MIN: number
  // DB_POOL_MAX: number
  // DB_POOL_IDLE: number
}

export type { AppEnvType }