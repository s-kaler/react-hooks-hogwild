import React, { useState } from "react";
import Nav from "./Nav";
import PorkerTiles from "./PorkerTiles";
import Porker from "./Porker";
import hogs from "../porkers_data";
import SortBar from "./SortBar";

function App() {
	//console.log(hogs)
	const [hogsWithState, setHogs] = useState(hogs)
	const [unfilteredHogs, setUnfiltered] = useState(hogs)
	let globalSortType = "";
	function handleSort(sortType){
		let sortedHogs = [...hogsWithState]
		globalSortType = sortType;
		if (sortType === 'name'){
			sortedHogs.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
			setHogs(sortedHogs)
			console.log(sortedHogs)
            console.log('names sorted')
		}
		else if(sortType === 'weight'){
			sortedHogs.sort((a,b) => (a.weight > b.weight) ? 1 : ((b.weight > a.weight) ? -1 : 0))
			setHogs(sortedHogs)
            console.log('weights sorted')
		}
		else{
			setHogs([...hogs])
            console.log('none sorted')
		}
	}

	function handleFilter(isGreased){
		if(!isGreased){
			setUnfiltered(hogsWithState)
			setHogs(hogsWithState.filter((hog) => hog.greased))
		}
		else{
			handleSort(unfilteredHogs)
		}
	}

	return (
		<div className="App">
			<Nav />
			<SortBar handleSort={handleSort} handleFilter={handleFilter}/>
			<div>
				<h3></h3>
			</div>
			<PorkerTiles hogs={hogsWithState}/>
			
			{/*
			<Porker name={hogs[0].name} image={hogs[0].image} />
			<div className="ui grid container">
				<div className="ui eight wide column">
					<div className="pigTile minPigTile">
						<h3>{hogs[0].name}</h3>
						<img src={hogs[0].image} alt={hogs[0].name} className="hogPic"></img>
					</div>
					<div className="pigTile minPigTile">
						<h3>{hogs[1].name}</h3>
						<img src={hogs[1].image} alt={hogs[1].name} className="hogPic"></img>
					</div>
					<div className="pigTile minPigTile">
						<h3>{hogs[2].name}</h3>
						<img src={hogs[2].image} alt={hogs[2].name} className="hogPic"></img>
					</div>
				</div>
			</div>
			*/}
		</div>
	);
}

export default App;
