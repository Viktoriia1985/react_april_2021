import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

export default function App() {
    return (
        <Router>
            <div>


                <div><Link to="/">home page</Link></div>
                <div><Link to="/users">users page</Link></div>
                <div><Link to="/posts">posts page</Link></div>
                <div><Link to="/comments">comments page</Link></div>

                <Switch>
                    <Route path="/" exact render={() => {
                        return <div>Home page</div>
                    }}/>
                    {/*//exact ставимо тільки на найкоротших url*/}

                    <Route path={'/users'} render={(props) => {   //найдинамічний спосіб
                        console.log(props);                                                         // тут props містять об'єкт history
                        return <Users {...props} x={'hello'}/>;
                    }}/>

                    <Route path={'/posts'} component={Posts}/>
                    {/*// тут props також містять об'єкт history*/}


                    <Route path={'/comments'}>
                        <Comments/>
                    </Route>


                    <Route path={'/comments'}>
                        <Comments/>
                    </Route>
                </Switch>

            </div>
        </Router>

    );
}


