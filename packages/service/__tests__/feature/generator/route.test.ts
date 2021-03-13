import { resolve } from 'path'
import { createRouteGenerator } from '../../../src/libs/generator/route-generator'
import { RouteConfigData } from '../../../src/types/index'

const MOCK_ROUTES = [
  {
    path: '/',
    name: 'dashboard',
    title: 'Dashboard',
    redirect: '/dashboard',
    icon: 'el-icon-s-promotion',
    viewPath: 'dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboardIndex',
        title: 'Dashboard',
        viewPath: '@/views/dashboard/index.vue',
        icon: 'el-icon-s-promotion',
        children: []
      }
    ]
  }
]

describe('RouteGenerator Test Group', () => {
  const basepath = resolve(__dirname, '../../mock')
  const generator = createRouteGenerator({
    base: basepath,
    settings: resolve(basepath, 'route.config.json')
  })

  it('readRouteConfigs', () => {
    expect(generator.readRouteConfigs()).toEqual(MOCK_ROUTES)
  })

  it('writeRouteConfig', async () => {
    const routeObj: RouteConfigData = {
      path: '/demo',
      name: 'aa',
      title: 'Nice',
      viewPath: '@/views/demo/index.vue'
    }

    generator.writeRouteConfig('', routeObj)
    expect(generator.readRouteConfigs().length).toBe(2)
  })

  it('generateRouteConfigAST', () => {
    // TODO
  })
})
