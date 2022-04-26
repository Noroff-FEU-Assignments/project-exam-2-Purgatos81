import { 
    HeroBanner, 
    HomeBody,
    StyledHomeHeading,
    StyledHomeSpan } from "../styles/HomeStyles";
import SearchBar from "../utils/SearchBar";    
import TargetHotel from "../hotels/HotelTarget";
import HotelSearchList from "../hotels/HotelSearchList";

console.log(HotelSearchList);

const Home = () => {
    return (
        <>
        <HomeBody>
            <StyledHomeHeading>Find your <StyledHomeSpan>Nordic Light Hotel</StyledHomeSpan></StyledHomeHeading>
            <SearchBar placeholder="Search Hotel..." />
        </HomeBody>
        
        </>
    );
};

export default Home;