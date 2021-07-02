import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";
import Users from "./components/users/Users";

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

                    <Route exact path={'/users'} component={Users}/>
                    <Route exact path={'/posts'} component={Posts}/>

                    <Route path={'/users/:id/posts'} render={(({match: {params: {id}}}) => {
                        return <Posts id={id}/>
                    })}/>

                    <Route exact path={'/comments'} component={Comments}/>

                    <Route path={'/posts/:id/comments'} render={(({match: {params: {id}}}) => {
                        return <Comments id={id}/>
                    })}/>>

                </Switch>

            </div>
        </Router>

    );
}




