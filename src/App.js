import Users from "./components/users/Users";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import UserDetails from "./components/user-details/UserDetails";

export default function App() {
    return (
        <Router>
            <div>
                <Link to={'/users'}>users page</Link>
                <Switch>
                    <Route path={'/users'} component={Users}/>

                                    {/*// OR*/}
                    {/*<Route path={'/users'} exact component={Users}/>*/}
                    {/*<Route path={'/users/:id'} component={UserDetails}/>*/}
                </Switch>
            </div>
        </Router>
    );
}

