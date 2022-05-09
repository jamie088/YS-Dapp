import async from "../components/Async";

const ProvableFairness = async(() => import("../views/ProvableFairness"));
const Privacy = async(() => import("../views/Privacy"));
const Terms = async(() => import("../views/Terms"));

const menuRoutes = [
    // {
    //     path: '/provableFairness',
    //     component: ProvableFairness,
    // },
    // {
    //     path: '/privacy',
    //     component: Privacy,
    // },
    {
        path: '/terms',
        component: Terms,
    }
];

export {
    menuRoutes
};
