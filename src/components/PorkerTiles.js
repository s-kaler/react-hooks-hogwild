import React from "react";
import Porker from "./Porker";

function PorkerTiles({hogs}){
    const hogList = hogs.map((hog, i) => (
        <Porker key={i} 
        name={hog.name} 
        image={hog.image} 
        specialty={hog.specialty}
        greased={hog.greased}
        weight={hog.weight}
        medal={hog['highest medal achieved']}
        />
    ))
    //console.log(hogList)
    return(
        <div className="ui grid container">
            {hogList}
        </div>
    )
}

export default PorkerTiles;