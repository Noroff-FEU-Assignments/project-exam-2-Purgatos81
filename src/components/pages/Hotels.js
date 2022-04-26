import HotelList from "../hotels/HotelsList";
import { 
    StyledHotelsMainContainer,
    StyledHotelsContainer,
    StyledHotelsHeading
} from "../styles/HotelTargetStyles"

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