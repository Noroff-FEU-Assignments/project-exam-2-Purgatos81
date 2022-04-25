import { HeroBanner, 
    HomeBody } from "../styles/HomeStyles";
import SearchBar from "../utils/SearchBar";    
import TargetHotel from "../hotels/HotelTarget";
import HotelSearchList from "../hotels/HotelSearchList";

console.log(HotelSearchList);

const Home = () => {
    return (
        <>
        <HomeBody>
            <h1>Search for your Hotel</h1>
            <SearchBar placeholder="Search Hotel..."/>
        </HomeBody>
        
        </>
    );
};

export default Home;