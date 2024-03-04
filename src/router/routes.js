const routes = [
  {
    path: "/",
    component: () => import("layouts/padrao.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/home.vue")
      }
    ]
  },
  {
    path: "/trabalhe",
    component: () => import("layouts/padrao.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/trabalhe.vue")
      }
    ]
  }
];

export default routes;
