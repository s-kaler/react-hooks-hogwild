import React, { useState } from "react";

function SortBar({handleSort, handleFilter}){
    const [nameSorted, setNameSort] = useState(false);
    const [weightSorted, setWeightSort] = useState(false);
    const [buttonClasses, setButtonClasses] = useState(['','']);
    const [greasedChecked, setGreased] = useState(false);
    

    function handleNameSort(){
        if(!nameSorted) { 
            setNameSort('name');
            handleSort('name')
            setButtonClasses(['button-clicked', ''])
        }
        else{
            handleSort('none')
            setButtonClasses(['',''])
        }
        setNameSort(!nameSorted);
        setWeightSort(false);
    }
    function handleWeightSort(){
        if(!weightSorted) { 
            setWeightSort('weight');
            handleSort('weight')
            setButtonClasses(['','button-clicked'])
        }
        else{
            handleSort('none')
            setButtonClasses(['',''])
        }
        setWeightSort(!weightSorted);
        setNameSort(false);
    }
    function handleCheck(){
        setGreased(!greasedChecked)
        handleFilter(greasedChecked)
    }
    
    return(
        <div className="sort-bar">
            <p>Sort By:
                <button className={buttonClasses[0]} onClick={handleNameSort}>Name</button>
                <button className={buttonClasses[1]} onClick={handleWeightSort}>Weight</button>
                Greased?
                <input type="checkbox" onClick={handleCheck}></input>
            </p>
        </div>
    )
}

export default SortBar;