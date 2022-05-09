import styled from "styled-components";
import { Link } from "react-router-dom";

export const SearchBarContainer = styled.div`

`;

export const SearchInputs = styled.div`
    margin-top: 25px;
    display: flex;
    :focus {
        outline: none;
    }
`;

export const SearchTextBox = styled.input`
    background-color: white;
    border: 0;
    border-radius: 2px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    font-size: 18px;
    padding: 15px;
    height: 60px;
    width: 300px;
`;

export const DataResults = styled.div`
  margin-top: 5px;
  width: 300px;
  height: 200px;
  background-color: white;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  overflow-y: auto;
`;

export const StyledSearchIcon = styled.div`
  height: 60px;
  width: 50px;
  background-color: white;
  display: grid;
  place-items: center;
`;

export const StyledSearchHotelLink = styled(Link)`
    text-decoration: none;
`;

export const StyledSearchH2 = styled.h2`
  color: black;
  padding-left: 15px;
`;