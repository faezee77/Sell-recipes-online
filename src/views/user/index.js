import React, { Component, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const Change_pass = React.lazy(() =>
    import(/* webpackChunkName: "views-home" */ '../user/changepass')
);


class App extends Component {
    render() {
        const {match} = this.props;

        return (
            <div id='root' dir='rtl' className="dashboard-wrapper">
                <Suspense fallback={<div className="loading"/>}>
                    <Switch>

<Redirect exact from={`${match.url}/`} to={`${match.url}/changepass`}/>
                        <Route
                            path={`${match.url}/changepass`}
                            render={props => <Change_pass {...props} />}
                        />
                    </Switch>
                </Suspense>
            </div>
        )
    }
}

export default App;