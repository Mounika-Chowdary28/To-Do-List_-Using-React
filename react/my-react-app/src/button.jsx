

function Button(){

    const clickHandler=()=>{
        let par=document.getElementById("para");
        par.innerHTML="Hey You clicked me"

    }
    let count=0
    const clickHandler1=(name)=>{
        count++;
        if(count<=5){
        let par=document.getElementById("para");
        par.innerHTML=`${name} you click me ${count} times`;
        }
        else{
            let par=document.getElementById("para");
            par.innerHTML=`${name} stop clicking me`
        }

    }

    return(
        <>
    <button onClick={() => clickHandler1("Mouni")}>Click Me 👆</button>
    <p id="para"></p>
    </>
    );
}

export default Button