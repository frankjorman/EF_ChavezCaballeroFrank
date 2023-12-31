
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'Registro', component: () => import('pages/PaginaRegister.vue') },
      { path: 'Login', component: () => import('pages/PaginaLogin.vue') },
      { path: 'Listar', component: () => import('pages/PaginaListar.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
