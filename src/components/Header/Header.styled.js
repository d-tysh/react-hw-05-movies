import styled from "@emotion/styled";

export const StyledHeader = styled.header`
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
    
    a {
        text-decoration: none;
        font-size: 24px;
        font-weight: 700;
        color: black;
        padding: 4px 8px;

        &:hover {
            background-color: orangered;
            color: #fff;
        }

        &.active {
            background-color: orangered;
            color: #fff;
        }
    }

    nav {
        display: flex;
    }
`;