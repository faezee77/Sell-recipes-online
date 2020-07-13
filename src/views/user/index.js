import React, { Component, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';


const SignUp = React.lazy(() =>
    import(/* webpackChunkName: "views-home" */ './signupChef'),

);
const PassWord = React.lazy(() =>
    import(/* webpackChunkName: "views-home" */ './password')
);
const Verification = React.lazy(() =>
    import(/* webpackChunkName: "views-home" */ './verification')
);

class App extends Component {
    render() {
        const {match} = this.props;

        return (
            <div className="dashboard-wrapper">
                <Suspense fallback={<div className="loading"/>}>
                    <Switch>
                        <Redirect exact from={`${match.url}/`} to={`${match.url}/login`}/>
                        <Route
                            path={`${match.url}/login`}
                            render={props => <SignUp {...props} />}
                        />
                        <Route
                            path={`${match.url}/password`}
                            render={props => <PassWord {...props} />}
                        />
                        <Route
                            path={`${match.url}/verification`}
                            render={props => <Verification {...props} />}
                        />
                    </Switch>
                </Suspense>
            </div>
        )
    }
}

export default App;