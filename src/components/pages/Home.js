import { 
    HomeBody,
    StyledHomeHeading,
    StyledHomeSpan } from "../styles/HomeStyles";
import SearchBar from "../utils/SearchBar"; 
import { HotelsAPI } from "../utils/Api";
import { useEffect, useState } from "react";
import axios from "axios";
import FeaturedHotelList from "../hotels/FeaturedHotelsList";
import { 
    StyledHotelsMainContainer,
    StyledHotelsContainer,
    StyledHotelsHeading
} from "../styles/HotelTargetStyles"
 


const Home = () => {
    const [hotels, setHotels] = useState ([])
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get(HotelsAPI)
        .then((results) => {
            console.log(results.data.data);
            setHotels(results.data.data)
        })
        .catch(error => {
            setError(error.message)
        })
    }, [])

    return (
        <>
        <HomeBody>
            <StyledHomeHeading>Find your <StyledHomeSpan>Nordic Light Hotel</StyledHomeSpan></StyledHomeHeading>
            <SearchBar placeholder="Search Hotel..."  data={hotels} />
        </HomeBody>
        <StyledHotelsMainContainer>
            <StyledHotelsHeading>Featured Hotels</StyledHotelsHeading>
            <StyledHotelsContainer>
                <FeaturedHotelList />
            </StyledHotelsContainer>
        </StyledHotelsMainContainer>
        </>
    );
};

export default Home;