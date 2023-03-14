import React from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
import {Link, Route, Routes} from "react-router-dom"



function App() {
	const datacoming: any = "No data yet";
	const [data, setData] = React.useState(datacoming);

	const fetchData = React.useCallback(async () => {
		axios
			.get("http://localhost:4000/")
			.then((response) => setData(response.data));
	}, []);
	React.useEffect(() => {
		fetchData();
	}, [fetchData]);
	
	return (
		<>
		<div className="App">
			{/*Note that most of these links don't work yet it but that doesn't matter
			 if you click a link with an invalid path it will return an empty component
			 but still load the parent page (index, which is empty in this case)*/}
			<Link to = "/"><button> Home</button></Link> 
			<Link to = "Gust"><button> Gust</button></Link> 
			<Link to = "Oscar"><button>Oscar</button></Link>
			<Link to = "Nigel"><button>Nigel</button></Link>
			<Link to = "Jippe"><button>Jippe</button></Link>
			<Link to = "Joost"><button>Joost</button></Link>
			<Link to = "Cerine"><button>Cerine</button></Link>
			<Link to = "Artur"><button>Artur</button></Link>
			<Link to = "Nasr"><button>Nasr</button></Link>
			<Link to = "Kasper"><button>Kasper</button></Link>
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<p>{data}</p>
			</header>
		</div>
		</>
		
	);
}

export default App;
