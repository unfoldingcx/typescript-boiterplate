'use strict'

import "./src/types/globals.d"
import bootstrap from "@/bootstrap"

const main = async (): Promise<void> => {
  await bootstrap()
  logger.info('Service has been finished successfully')
}

export default main()