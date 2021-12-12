import async from "../components/Async";

const Privacy = async(() => import("../views/Privacy"));

const menuRoutes = [
    {
        path: '/privacy',
        component: Privacy,
    }
];

export {
    menuRoutes
};
