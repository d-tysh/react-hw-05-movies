import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledMoviesList = styled.ul`
    display: flex;
    list-style: none;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;

`;

export const StyledListItem = styled.li`
    width: 200px;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);

    & img {
        width: 100%;
        display: block;
    }

    &:hover {
        box-shadow: 0px 10px 10px 5px rgba(0,0,0,0.3);
    }
`;

export const StyledLink = styled(NavLink)`
    color: black;
    text-decoration: none;
    
    & p {
        font-weight: bold;
        font-size: 20px;
        padding: 8px 8px 16px;
        margin: 0;
    }

    &:hover {
        color: orangered;
    }
`;