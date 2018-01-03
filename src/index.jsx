import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';


import './css/style';
import Home from './views/home';
import CompletedTasks from './views/CompletedTasks';
import NotFound from './views/404';

class App extends React.Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path={"/"} component={Home} />
                    <Route path={"/complete"} component={CompletedTasks}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));