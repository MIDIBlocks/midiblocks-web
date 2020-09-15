const routes = [
  {
    path: '/',
    component: () => import('layouts/Main.vue'),
    children: [
      {
        name: 'Home',
        path: '',
        component: () => import('pages/Home.vue')
      },
      {
        name: 'Studio',
        path: '/studio',
        component: () => import('pages/StudioHome.vue')
      },
      {
        name: 'Library',
        path: '/library',
        component: () => import('pages/LibraryHome.vue')
      },
      {
        name: 'Factory',
        path: '/factory',
        component: () => import('pages/FactoryHome.vue')
      }
    ]
  },

  {
    path: '/readonly',
    component: () => import('layouts/Blank.vue'),
    children: [
      {
        name: 'ReadOnly',
        path: ':id',
        component: () => import('pages/ReadOnly.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
