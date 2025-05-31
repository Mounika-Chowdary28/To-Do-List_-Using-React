import Header from "./Header"
import Footer from "./Footer"
import Food from "./food"
import Card from "./card"
import Props from "./Props"
import UserGreeting from "./UserGreeting"
import List from "./List"
import Button from "./button.jsx"
import ProfilePic from "./profilepic.jsx"
import MyComp from "./MyComponent.jsx"
import Counter from "./Counter.jsx"
import Form from "./Form.jsx"

function App() {
    /*
 return (
  <>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Header/>
  <Food/>
  <Footer/>
  </>
 );


return(
    <>
    <Props name="Mounika Chowdary" age={19} isStudent={true}/>
    <Props name="Kavya" age={19} isStudent={false}/>
    </>
);

/*
return(
    <>
    <UserGreeting isLogged={true} username="Mounika"/>
    </>
);
 
const fruits=[{id:1, name:"apple", calories:95},
    {id:2, name:"orange", calories:45},
    {id:3, name:"banana", calories:105},
    {id:4, name:"coconut", calories:159},
    {id:5, name:"pineapple", calories:37},
    {id:6, name:"grapes", calories:120}
   ];
const vegetables=[{id:1, name:"Tomato", calories:95},
    {id:2, name:"onion", calories:45},
    {id:3, name:"brinjal", calories:105},
    {id:4, name:"carrot", calories:159},
    {id:5, name:"beetroot", calories:37},
    {id:6, name:"garlic", calories:120}
   ];
return(
    <>
    <List items={fruits} category="Fruits"/>
    <List items={vegetables} category="Vegetables"/>
    </>
);

return (
    <Button/>
);
/*
return(
    <ProfilePic/>
);



return(
    <MyComp/>
);


return(
    <Props/>
);
*/
return(
    <Form/>
)
}

export default App
