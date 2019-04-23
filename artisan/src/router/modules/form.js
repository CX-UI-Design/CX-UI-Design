const Layout = resolve => require(['@/layout/layout.vue'], resolve);
export const baseRouter = [
  {
    path: '/form',
    component: Layout,
    redirect: '/form/input',
    name: '表单',
    children: [
      {
        path: 'input',
        component: () => import('../../pages/Form/input'),
        meta: {requireAuth: true, key: 'input'},
        name: 'input 布局',
      }
    ],
  },
];
