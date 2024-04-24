import './Items.css';
function Items(props){
    const name=props.name;
return (
<div>
<p className="nirma">{name}</p>
{props.children}
</div>);
}
export default Items;