import './Simpson.css'

export default function Simpson({item: {name, surname, age, photo, info}}) {

    // let {item} = props;   // ПЕРШЕ скорочення
    // let {name, surname, age, photo, info} = item;

    // console.log(item.name);
    // console.log(item.surname);


    // let {item: {name, surname, age, photo, info}} = props;  // ДРУГЕ скорочення

    let c1 = 'target';
    let c2 = 'point';
    // let clsList = [c1, c2];    //варіант з масивом 1й варіант
    let clsList = ['jack', 'black', 'door'];


    return (
        // <div className={` ${c1} ${c2} `}>
        // <div className={clsList.join(';')}>     //варіант з масивом 1й варіант


        <div className={c1 + ' ' + c2}>
        <h2 className={clsList.join(';')}> {name} {surname}, age - {age} </h2>
        <img src={photo} alt=""/>
        <div> {info}</div>

</div>
);
}








