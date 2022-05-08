import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { HotelsAPI, ImgURL } from "../utils/Api";
import { DetailsAPI } from "../utils/Api";

function HotelDetails() {
    const [hotel, setHotel] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

	// let history = useHistory();Use Navigate?

	const { id } = useParams();

	// if (!id) {
	// 	history.push("/");
	// }

	const url = HotelsAPI + "/" + id;

	useEffect(
		function () {
			async function fetchData() {
				try {
					const response = await fetch(url);
					console.log(url);

					if (response.ok) {
						const json = await response.json();
						console.log(json.data);
						setHotel(json.data);
					} else {
						setError("An error occured");
					}
				} catch (error) {
					setError(error.toString());
				} finally {
					setLoading(false);
				}
			}
			fetchData();
		},
		[url]
	);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>An error occured: {error}</div>;
	}

	return (
		<div>
			<h1>{hotel.attributes.Name}</h1>
			<p>{hotel.attributes.Description}</p>
			<img src={hotel.attributes.imgurl} />
		</div>
	);
}

export default HotelDetails;