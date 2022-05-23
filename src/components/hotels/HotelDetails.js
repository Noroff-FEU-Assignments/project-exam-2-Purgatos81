import { useState, useEffect, createContext, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { HotelsAPI, ImgURL } from "../utils/Api";
import { DetailsAPI } from "../utils/Api";
import { GetHotelNameContext } from "../context/HotelnameContext";
import {
	StyledDetailsInfoContainer,
	DetailsImgStyles,
	StyledTextContainer,
	StyledPriceAndRatingContainer,
	StyledPriceContainer,
	StyledPriceH2,
	StyledDetailPriceSpan,
	StyledRatingContainer,
	StyledRatingSpan,
	StyledDetailHotelH1,
	StyledDetailHotelP
} from "../styles/DetailsStyles";
function HotelDetails() {
    const [hotel, setHotel] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
	const {bookedHotelName, setBookedHotelName} = useContext(GetHotelNameContext);
	const { id } = useParams();
	const url = HotelsAPI + "/" + id;
	useEffect(
		function () {
			async function fetchData() {
				try {
					const response = await fetch(url);
					if (response.ok) {
						const json = await response.json();
						setHotel(json.data);
						setBookedHotelName(json.data.attributes.Name);
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
					<StyledDetailHotelH1>{hotel.attributes.Name}</StyledDetailHotelH1>
					<StyledDetailHotelP>{hotel.attributes.Description}</StyledDetailHotelP>
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