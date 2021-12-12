/* eslint-disable react/no-array-index-key */
import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Footer from "../components/Footer";
import Loader from "../components/Loader";
import Layout from "../layout/Layout";
import LandingPage from "../views/Landing";

import { menuRoutes } from "./index";

const Routes = () => {
    return (
        <Suspense fallback={Loader}>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                {menuRoutes.map(({ path, component: Component }, index) => (
                    <Route
                        key={index}
                        path={path}
                        exact
                        render={(props) => (
                            <Layout>
                                <>
                                <Component {...props} />
                                </>
                            </Layout>
                        )}
                    />
                ))}
            </Switch>
        </Suspense>
    );
};

export default Routes;
