import { gogo } from './gogo/gogo.js'

export const services = (app) => {
  app.configure(gogo)

  // All services will be registered here
}
