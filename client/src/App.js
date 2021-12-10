import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.css';
import Login from './component/Login/Login';
import MainHome from './component/MainHome/MainHome';
import Register from './component/Register/Register';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <MainHome />
                </Route>

                <Route exact path="/register">
                    <Register />
                </Route>

                <Route exact path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
