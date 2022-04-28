import { 
    HeroBanner, 
    HomeBody,
    StyledHomeHeading,
    StyledHomeSpan } from "../styles/HomeStyles";
import SearchBar from "../utils/SearchBar";    






const Home = () => {
    async function getData() {
        const response = await fetch("http://localhost:1337/api/hotels");
                 const hotels = await response.json();
                 console.log(hotels.data)
                 return hotels;
             }
        getData();
    return (
        
        <>
        <HomeBody>
            <StyledHomeHeading>Find your <StyledHomeSpan>Nordic Light Hotel</StyledHomeSpan></StyledHomeHeading>
            <SearchBar placeholder="Search Hotel..." data={getData} />
        </HomeBody>
        
        </>
    );
};

export default Home;