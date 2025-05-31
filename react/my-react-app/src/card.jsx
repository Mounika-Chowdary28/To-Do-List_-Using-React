import Pic from "./assets/image.png"

function Card(){
    return(
        <div className="card">
            <img src={Pic} alt="Profilepic" className="image"></img>
            <h1 className="head">Mounika</h1>
            <p className="para">I am S. Mounika Chowdary learning react at present and doing card in react.</p>

        </div>
    );
}

export default Card