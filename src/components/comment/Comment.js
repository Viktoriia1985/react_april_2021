export default function Comment({item}) {
    return (
        <div>
           <h3> {item.id} - {item.name} </h3>
             {item.email} - {item.body}
        </div>
    );
}