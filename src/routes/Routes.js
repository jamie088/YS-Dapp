import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Loader from "../components/Loader";
import Layout from "../layout/Layout";
import LandingPage from "../views/Landing";
import Privacy from "../views/Privacy";
import ProvableFairness from "../views/ProvableFairness";
import {menuRoutes} from "./index";

const Routes = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={Loader}>
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    {menuRoutes.map(({ path, component: Component }) => (
                        <Route
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
                    {/* <Route path="/privacy" exact>
                        <Privacy />
                    </Route>
                    <Route path="/provableFairness" exact>
                        <ProvableFairness />
                    </Route> */}
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
};

export default Routes;
