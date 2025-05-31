

function UserGreeting(props){
/*
        if(props.isLogged){
            return(<h2>Welcome {props.username}</h2>);
        }
        return (<h2>Please Login to Continue</h2>);
        */

        const m1=<h2>
            Welcome {props.username}
        </h2>
        const m2=<h2>
            Please Log in to continue
        </h2>
        return(props.isLogged ? m1:m2);
}

export default UserGreeting