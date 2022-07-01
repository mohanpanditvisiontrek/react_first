import "./Expenceitem.css"

function Expenceitem(props){

    let month=props.date.toLocaleString('en-US',{month:'long'});
    let day=props.date.toLocaleString('en-US',{day:'2-digit'});
    let year=props.date.getFullYear();

return (
    <div className="expense-item">
        <div className="date">{day}-{month}-{year} </div>
        <h2>{props.title}</h2>
        <div className="expense-item_description">
       
            <div className="expense-item_price">रु {props.amount}</div>
        </div>
    </div>
);
}

export default Expenceitem;