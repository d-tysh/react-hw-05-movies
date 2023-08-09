import { NavLink } from "react-router-dom"

import { StyledHeader } from "./Header.styled";

export const Header = () => {
    return (
        <StyledHeader>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/movies'>Movies</NavLink>
            </nav>
        </StyledHeader>
    )
}