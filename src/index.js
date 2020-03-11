import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import LaReunion from './components/LaReunion/LaReunion'
import Search from './components/Search/Search'
import Contact from './components/Contact/Contact'
import ErrorNotFound from './components/ErrorNotFound/ErrorNotFound'
import 'bootstrap/dist/js/bootstrap.bundle.min'

const Root = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/la_reunion' component={LaReunion}/>
            <Route path='/search' component={Search}/>
            <Route path='/contact' component={Contact}/>
            <Route path="/notfound" component={ErrorNotFound}/>
            <Redirect to='/notfound'/>
        </Switch>
    </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
