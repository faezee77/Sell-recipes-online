import React, { Component, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';


const SignUpChef = React.lazy(() =>
    import(/* webpackChunkName: "views-home" */ './signupStepChef'),

);

const SignUp = React.lazy(() =>
    import(/* webpackChunkName: "views-home" */ './signupStep'),

);
const Login = React.lazy(() =>
    import(/* webpackChunkName: "views-home" */ './login'),

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
                            path={`${match.url}/Chef/signup`}
                            render={props => <SignUpChef {...props} />}
                        />

                        <Route
                            path={`${match.url}/normal/signup`}
                            render={props => <SignUp {...props} />}
                        />
                        <Route
                            path={`${match.url}/login`}
                            render={props => <Login {...props} />}
                        />
                    </Switch>
                </Suspense>
            </div>
        )
    }
}

export default App;