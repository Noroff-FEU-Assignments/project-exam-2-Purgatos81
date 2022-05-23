import HotelList from "../components/hotels/HotelsList";
import { 
    StyledHotelsMainContainer,
    StyledHotelsContainer,
    StyledHotelsHeading
} from "../components/styles/HotelTargetStyles"
const Hotels = () => {
    return (
        <StyledHotelsMainContainer>
            <StyledHotelsHeading>Accomodations</StyledHotelsHeading>
            <StyledHotelsContainer>
                <HotelList />
            </StyledHotelsContainer>
        </StyledHotelsMainContainer>
    );
};
export default Hotels;