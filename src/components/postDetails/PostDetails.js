export default function PostDetails({item}) {

    return (
        <div>
            {
               <div>
                   {item.id}
                   <br/>
                   {item.title}
                   <br/>
                   {item.body}
               </div>
            }
        </div>
    );
}

