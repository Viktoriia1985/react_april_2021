import {Link} from "react-router-dom";

export default function Post({item}) {
    return (
        <div>
            {item.id} - {item.title} - {item.body}
            -
            <Link to={'/posts/' + item.id + '/comments'}>
                <button>go to comments</button>
            </Link>
        </div>
    );
}
