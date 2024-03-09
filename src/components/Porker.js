import React, {useState} from "react";
/*
porker object from porkers_data.js
{
    name: "Babe",
    specialty: "Being incredibly cute",
    greased: false,
    weight: 2.0,
    "highest medal achieved": "bronze",
    image:
      "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/babe.jpg",
  }
*/

function Porker({name, specialty, greased, weight, medal, image}){
    const minClass = "pigTile minPigTile"
    const maxClass = "pigTile maxPigTile"
    const [isClicked, setClicked] = useState(false);
    const [porkerClass, setClass] = useState(minClass);
    function handleClick(){
        setClicked(!isClicked);
        if(isClicked){
            setClass(minClass)
        }
        else {
            setClass(maxClass)
        }
    }
    function MoreInfo(){
        return(
            <div>
                <p>specialty: {specialty}</p>
                <p>Weight: {weight}</p>
                <p>Greased? {greased ? 'Yes' : 'No'}</p>
                <p>Highest Medal Achieved: {medal}</p>
            </div>
        )
    }
    return(
        <div className="ui eight wide column">
            <div className={porkerClass} onClick={handleClick}>
                <h3>{name}</h3>
                {isClicked  && <MoreInfo />}
                <img src={image} alt={name} className="hogPic"></img>
            </div>
        </div>
    )
}

export default Porker;