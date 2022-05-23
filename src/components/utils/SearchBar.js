import { useState, useEffect } from "react";
import { SearchBarContainer, 
    SearchInputs, 
    SearchTextBox, 
    DataResults, 
    StyledSearchIcon,
    StyledSearchHotelLink,
    StyledSearchH2
 } from "../styles/SearchStyles";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
function SearchBar({ placeholder, data }) {
    const [filteredData, setFilteredData ] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const handleFilter = (event) => {
        const searchWord = event.target.value
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.attributes.Name.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilteredData([]);
          } else {
            setFilteredData(newFilter);
          }
        };
        const clearInput = () => {
          setFilteredData([]);
          setWordEntered("");
        };
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
                    {filteredData.length === 0 ? (
                        <SearchIcon />
                    ) : (
                        <CloseIcon onClick={clearInput} />
                    )}
                </StyledSearchIcon>
            </SearchInputs>
            { filteredData.length != 0 && (
            <DataResults>
                {filteredData.slice(0, 5).map((value) => {
                    return (
                        <>
                            <StyledSearchHotelLink  key={value.id} to={`/details/${value.id}`}>
                                <StyledSearchH2>{value.attributes.Name} </StyledSearchH2>
                            </StyledSearchHotelLink>
                        </>
                    );
                })}
            </DataResults>
            )}
        </SearchBarContainer>
    )
}
export default SearchBar;
