export default function User({item}) {
    return (
        <div>
           <h3> {item.id} - {item.name} </h3>
            {item.username}
        </div>
    )
}
