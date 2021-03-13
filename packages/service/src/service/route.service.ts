import { createRouteGenerator } from '../libs/generator/route-generator'
import { __DEV__ } from '../shared/index'
import { RouteConfigData } from '../types/index'

const devViewRooPath = 'C:\\all\\code\\cli\\fast-admin-view\\fast-admin-view-default'
const generator = createRouteGenerator({
  base: __DEV__ ? devViewRooPath : process.cwd()
})

export class RouteService {
  list () {
    return generator.readRouteConfigs()
  }

  add ({ path, route }: { path: string, route: string}) {
    try {
      const routeObj = JSON.parse(route) as RouteConfigData
      generator.writeRouteConfig(path, routeObj)
      generator.generatePageRoutes()
      return true
    } catch (err) {
      return false
    }
  }

  refresh () {
    try {
      generator.refresh()
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }
}
