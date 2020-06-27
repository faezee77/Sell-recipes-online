import React, { Component, Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';


const Home = React.lazy(() =>
    import(/* webpackChunkName: "views-home" */ './home')
);



class App extends Component {
    render() {
        const { match } = this.props;

        return (
            <div id='root' dir='rtl' className="dashboard-wrapper">
                <Suspense fallback={<div className="loading" />}>
                    <Switch>
                        <Redirect exact from={`${match.url}/`} to={`${match.url}/home`} />
                        <Route
                            path={`${match.url}/home`}
                            render={props => <Home {...props} />}
                        />
                    </Switch>
                </Suspense>
            </div>
        )
    }
}

export default App;