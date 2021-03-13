const Layout = {}
const PAGE_ROUTES = [
  {
    path: '/',
    name: 'dashboard',
    redirect: '/dashboard',
    hidden: false,
    meta: {
      icon: 'el-icon-s-promotion',
      title: 'Dashboard'
    },
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: 'dashboardIndex',
        hidden: false,
        meta: {
          icon: 'el-icon-s-promotion',
          title: 'Dashboard'
        },
        component: () => import('@/views/dashboard/index.vue'),
        children: []
      },
      {
        path: 'element',
        name: 'element',
        hidden: false,
        meta: {
          icon: 'el-icon-document',
          title: 'Element'
        },
        component: () => import('@/views/dashboard/element.vue'),
        children: []
      }
    ]
  }
]
export default PAGE_ROUTES
