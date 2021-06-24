import Posts from "../posts/Posts";


export default function Post({items}) {

    return (

        <div className={'wrap'}>
            {

                items.map(value => <Posts item={value}/>)

            }

        </div>
    );
}


