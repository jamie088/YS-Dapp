import async from "../components/Async";

const ProvableFairness = async(() => import("../views/ProvableFairness"));
const Privacy = async(() => import("../views/Privacy"));

const menuRoutes = [
    {
        path: '/provableFairness',
        component: ProvableFairness,
    },
    {
        path: '/privacy',
        component: Privacy,
    }
];

export {
    menuRoutes
};
