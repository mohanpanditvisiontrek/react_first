import Expenceitem from './components/Expenceitem';

function App() {

  // let expensedate=new Date(2022, 3, 26);
  // let expensedate="2022, 3, 26"
  // let expensetitle="school fee"
  // let expenseamout=500

  let data=[
    {'title':"Food","amount":7000,date:new Date(2022, 3, 26)},
    {'title':"Hospital","amount":500,date:new Date(2022, 5, 45)},
  ];

  // for(let i=0;i <data.length;i++){
  //     document.write(data[i].title)  
  // }

  return (
    <div>
   
       <Expenceitem
       date={data[0].date}
       title={data[0].title} 
       amount={data[0].amount}
       ></Expenceitem>
     </div>
  );
}

export default App;
