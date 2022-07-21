import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: "/login",
        name: "Login",
        component: () => import('@/components/LoginComponent')
    },
    {
        path: "/",
        name: "Search",
        component: () => import('@/components/SearchAnimeMangaComponent')
    },
    {
        path: "/Library",
        name: "PersonalLibrary",
        component: () => import('@/components/PersonalLibraryComponent')
    }
];

let router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
        next('/login');
    } else {
        next();
    }
});

export default router;