import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { HotelsAPI, ImgURL } from "../utils/Api";
import { DetailsAPI } from "../utils/Api";
import {
	StyledDetailsInfoContainer,
	DetailsImgStyles,
	StyledTextContainer,
	StyledPriceAndRatingContainer,
	StyledPriceContainer,
	StyledPriceH2,
	StyledDetailPriceSpan,
	StyledRatingContainer,
	StyledRatingSpan
} from "../styles/DetailsStyles";

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
		<>
			<StyledDetailsInfoContainer>
				<DetailsImgStyles src={hotel.attributes.imgurl} />
				<StyledTextContainer>
					<h1>{hotel.attributes.Name}</h1>
					<p>{hotel.attributes.Description}</p>
				</StyledTextContainer>
			</StyledDetailsInfoContainer>
			<StyledPriceAndRatingContainer>
				<StyledPriceContainer>
					<StyledPriceH2>{hotel.attributes.Price}<StyledDetailPriceSpan> NOK</StyledDetailPriceSpan></StyledPriceH2>
				</StyledPriceContainer>
				<StyledRatingContainer>
					<h3>Rating: <StyledRatingSpan>{hotel.attributes.Rating}</StyledRatingSpan></h3>
				</StyledRatingContainer>
			</StyledPriceAndRatingContainer>
		</>
	);
}

export default HotelDetails;