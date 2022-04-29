import { 
    HomeBody,
    StyledHomeHeading,
    StyledHomeSpan } from "../styles/HomeStyles";
import SearchBar from "../utils/SearchBar"; 
 


const Home = () => {

    return (
        
        <>
        <HomeBody>
            <StyledHomeHeading>Find your <StyledHomeSpan>Nordic Light Hotel</StyledHomeSpan></StyledHomeHeading>
            <SearchBar placeholder="Search Hotel..."  data={HotelData} />
        </HomeBody>
        
        </>
    );
};

export default Home;