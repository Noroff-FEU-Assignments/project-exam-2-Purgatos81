import { useState, useEffect } from "react";
import { HotelsAPI } from "../utils/Api";
import { SearchBarContainer, SearchInputs, SearchTextBox, DataResults, StyledSearchIcon } from "../styles/SearchStyles";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import HotelSearchList from "../hotels/HotelSearchList";
import TargetSearchHotel from "../hotels/HotelSearchTarget";

function SearchBar({ placeholder }) {
    const [result, setResult] = useState([])

      fetch("https://eksamstrapi.herokuapp.com/api/hotels")
        .then(response => response.jso())
        .then(result => setResult(result))
        .catch(error => console.log('error', error));

    const [ filteredHotels, setFilteredHotels ] = useState([]);
    const [ wordEntered, setWordEntered ] = useState("");
    console.log(result);
    const handleFilter = (event) => {

        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = result.filter((value) => {
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
        setWordEntered("");
    }
    return (
        <SearchBarContainer>
            <SearchInputs>
                <SearchTextBox 
                    type="text" 
                    placeholder={placeholder} 
                    value={wordEntered} 
                    onChange={handleFilter} 
                />
                <StyledSearchIcon>
                    {filteredHotels.length === 0 ? ( 
                        <SearchIcon />
                    ) : (
                        <CloseIcon onClick={clearInput} /> 
                    )}
                </StyledSearchIcon>
            </SearchInputs>
            {filteredHotels.length != 0 && (
            <DataResults>
                {filteredHotels.map((hotel) => {
                                    console.log(hotel);
                    return (
                        <TargetSearchHotel key={hotel.id} id={hotel.id} Name={hotel.attributes.Name} />
                    )
                })}

            </DataResults>
            )}
        </SearchBarContainer>
    );
};

export default SearchBar;