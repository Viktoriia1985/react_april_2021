export default function CommentDetails({item}) {

    return (
        <div>
            {
                <div>
                    {item.id}
                    <br/>
                    {item.name}
                    <br/>
                    {item.email}
                    <br/>
                    {item.body}
                </div>
            }
        </div>
    );
}