import React from "react";
import "../App.css";
import {Link, Routes, Route} from "react-router-dom";
import Gust2 from "./Gust2";
import axios from "axios";

function Gust(){
    const datacoming: any = "No data yet";
	const [data, setData] = React.useState(datacoming);

	const fetchData = React.useCallback(async () => {
		axios
			.get("http://localhost:4000/gustrequest/welcome?greeting=hello darkness my old fried")
			.then((response) => setData(response.data));
	}, []);
	React.useEffect(() => {
		fetchData();
	}, [fetchData]);
    return(
    <div>
        {/*In this subpage we can route to Gust2 because of the *
        in the routing to this page, we will keep seeing the header
        and link in the subpages, if we want to avoid this we need to
        structure them like index and app */}
        <h1>{data}</h1>
        <Link to = "../"> <button>Home</button></Link>
        <Link to="Gust2"><button>Another one</button></Link>
        <Routes>
            <Route path="Gust2" element={<Gust2 />} />
        </Routes>
    </div>
    );
}
export default Gust;