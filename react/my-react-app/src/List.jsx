

function List(props){
    /*
    const fruits=["apple","orange","banana","coconut","pineapple","grapes"];
    const listItems=fruits.map(fruit => <li>{fruit}</li>);
    */
   const category=props.category
   const itemList=props.items
   /*
   fruits.sort((a,b)=>a.name.localeCompare(b.name)); //alphabetical
   fruits.sort((a,b)=>b.name.localeCompare(a.name)); //reverse alphabetical
   fruits.sort((a,b)=>a.calories-b.calories); //calories 
   fruits.sort((a,b)=>b.calories-a.calories); //reverse calories
   */
   
   const listItems=itemList.map(fruit=><li key={fruit.id}>
                                             {fruit.name}: &nbsp;
                                             {fruit.calories}
   </li>)
    return(
          <>
          <h3>{category}</h3>
          <ol>{listItems}</ol>
          </>
    );
}
export default List