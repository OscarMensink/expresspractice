import React from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

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
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>{data}</p>
			</header>
		</div>
	);
}

export default App;
