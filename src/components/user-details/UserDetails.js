export default function UserDetails({item}) {

    return (
        <div>


            {
                <div>
                    {item.username},
                    <br/>
                    {item.name},
                    <br/>
                    {item.email}
                </div>

            }

        </div>)
};
