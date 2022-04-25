import { useState, useEffect } from "react";
import { HotelsAPI } from "../utils/Api";
import { SearchBarContainer, SearchInputs, SearchTextBox, DataResults, StyledSearchIcon } from "../styles/SearchStyles";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import HotelSearchList from "../hotels/HotelSearchList";

function SearchBar({ placeholder, hotels }) {

    const [ filteredHotels, setFilteredHotels ] = useState([]);
    const [ wordEntered, setWordEntered ] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = hotels.filter((value) => {
            return value.Name.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredHotels([]);
        } else {
            setFilteredHotels(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredHotels([]);
    }
    return (
        <SearchBarContainer>
            <SearchInputs>
                <SearchTextBox type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} />
                <StyledSearchIcon>
                    {filteredHotels.length === 0 ? <SearchIcon /> : <CloseIcon onClick={clearInput} />}
                </StyledSearchIcon>
            </SearchInputs>
            {filteredHotels.length != 0 && (
            <DataResults><HotelSearchList /></DataResults>
            )}
        </SearchBarContainer>
    );
};

export default SearchBar;