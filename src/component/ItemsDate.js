import './ItemsDate.css';
function ItemsDate(props){
    const day=props.day;
    const year=props.year;
    const year1=props.year1;
return (<div className='date'>

<div>{day} </div>
<div>{year}</div>
<div>{year1}</div>

</div>);
}
export default ItemsDate;