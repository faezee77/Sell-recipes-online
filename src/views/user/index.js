import React, { Component, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';


const Home = React.lazy(() =>
    import(/* webpackChunkName: "views-home" */ './login')
);

const Home_s = React.lazy(() =>
    import(/* webpackChunkName: "views-home" */ './signup')
);

class App extends Component {
    render() {
        const {match} = this.props;

        return (
            <div id='root' dir='rtl' className="dashboard-wrapper">
                <Suspense fallback={<div className="loading"/>}>
                    <Switch>
                        <Redirect exact from={`${match.url}/`} to={`${match.url}/login`}/>
                        <Route
                            path={`${match.url}/login`}
                            render={props => <Home {...props} />}
                        />
                                                <Redirect exact from={`${match.url}/`} to={`${match.url}/signup`}/>
                        <Route
                            path={`${match.url}/signup`}
                            render={props => <Home_s {...props} />}
                        />

                    </Switch>
                </Suspense>
            </div>
        )
    }
}

export default App;