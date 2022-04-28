// import { useState, useEffect } from "react";
// import TargetSearchHotel from "./HotelSearchTarget";
// import { HotelsAPI } from "../utils/Api";

// function HotelSearchList() {
//     const [hotels, setHotels] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(function() {
//         async function fetchData() {
//             try {
//                 const response = await fetch(HotelsAPI);

//                 if (response.ok) {
//                     const json = await response.json();
//                     console.log(json.data);
//                     setHotels(json.data);
//                 } else {
//                     setError("An error occured");
//                 }
//             } catch (error) {
//                 setError(error.toString());
//             }
//             finally {
//                 setLoading(false);
//             }
//         }
//         fetchData();
//     }, []);

//     if(loading) {
//         return <div>Loading...</div>
//     }

//     if(error) {
//         return <div>{error}</div>
//     }

//     return (
//         <>
//             {hotels.map(function (hotel) {
//                 console.log(hotel);
//                 const { id, Name, Description } = hotel
//                 return <TargetSearchHotel key={hotel.id} id={hotel.id} Name={hotel.attributes.Name} />;
//             })}
//         </>
//     );
// }

// export default HotelSearchList;


//Removed to try another option
// function HotelSearchList() {
//     const [hotels, setHotels] = useState([]);

//     useEffect(function() {
//         async function fetchData() {
//                 const response = await fetch(HotelsAPI);
//                     const json = await response.json();
//                     console.log(json.data);
//                     setHotels(json.data);
//         }
//         fetchData();
//     }, []);

//     return (
//         <>
//             {hotels.map(function (hotel) {
//                 console.log(hotel);
//                 const { id, Name } = hotel
//             })}
//         </>
//     );
// }

// export default HotelSearchList;