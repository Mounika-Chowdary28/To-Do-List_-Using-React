

function Props(props){
    let fruits=[{name : 'Apple', color:'Red'},
                {name : 'Grapes', color:'Green'},
                {name : 'Mango', color:'Yellow'}
    ]
       
      return(
        /* <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
        // Returning array as props....
          <div>
            <ol>
               {animals.map((animal)=>(
                <li>{animal}</li>
               ))}
            </ol>
          </div>
          */
         //Returning array of objects as props...
         <div>
              {fruits.map((fruit)=>(
                <h1 key={fruit.name}> Name : {fruit.name} - Color : {fruit.color}</h1>
              ))}
         </div>
      );
}

export default Props