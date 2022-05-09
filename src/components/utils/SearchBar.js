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
import { Link } from "react-router-dom";


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









// function SearchBar({ placeholder }) {
//     const [result, setResult] = useState([])

//     var requestOptions = {
//         method: 'GET',
//         redirect: 'follow'
//       };

//     fetch("http://localhost:1337/api/hotels", requestOptions)
//     .then(response => response.json())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));

//     const [ filteredHotels, setFilteredHotels ] = useState([]);
//     const [ wordEntered, setWordEntered ] = useState("");
//     console.log(result);
//     const handleFilter = (event) => {

//         const searchWord = event.target.value;
//         setWordEntered(searchWord);
//         const newFilter = result.filter((value) => {
//             return value.Name.toLowerCase().includes(searchWord.toLowerCase());
//         });

//         if (searchWord === "") {
//             setFilteredHotels([]);
//         } else {
//             setFilteredHotels(newFilter);
//         }
//     };

//     const clearInput = () => {
//         setFilteredHotels([]);
//         setWordEntered("");
//     }
//     return (
//         <SearchBarContainer>
//             <SearchInputs>
//                 <SearchTextBox 
//                     type="text" 
//                     placeholder={placeholder} 
//                     value={wordEntered} 
//                     onChange={handleFilter} 
//                 />
//                 <StyledSearchIcon>
//                     {filteredHotels.length === 0 ? ( 
//                         <SearchIcon />
//                     ) : (
//                         <CloseIcon onClick={clearInput} /> 
//                     )}
//                 </StyledSearchIcon>
//             </SearchInputs>
//             {filteredHotels.length != 0 && (
//             <DataResults>
//                 {filteredHotels.map((hotel) => {
//                                     console.log(hotel);
//                     return (
//                         <TargetSearchHotel key={hotel.id} id={hotel.id} Name={hotel.attributes.Name} />
//                     )
//                 })}

//             </DataResults>
//             )}
//         </SearchBarContainer>
//     );
// };

// export default SearchBar;