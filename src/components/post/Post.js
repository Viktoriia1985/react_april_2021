import styles from './Post.module.css';

export default function Post({value}) {

    return (
        <div className={value.id % 2 ? styles.wrap1 : styles.wrap2}>
            <br/>
            postsId - {value.userId} <br/>
            id - {value.id} <br/>
            title - {value.title} <br/>
            body - {value.body} <br/>
        </div>
    )
}


