import { GogoService, getOptions } from './gogo.class.js'

export const gogoPath = 'gogo'
export const gogoMethods = ['find', 'get', 'create', 'patch', 'remove']

export * from './gogo.class.js'

// A configure function that registers the service and its hooks via `app.configure`
export const gogo = (app) => {
  // Register our service on the Feathers application
  app.use(gogoPath, new GogoService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: gogoMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(gogoPath).hooks({
    around: {
      all: []
    },
    before: {
      all: [],
      find: [],
      get: [],
      create: [],
      patch: [],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}
