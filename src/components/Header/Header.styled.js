import styled from "@emotion/styled";

export const StyledHeader = styled.header`
    /* border-bottom: 1px solid black; */
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
    
    a {
        text-decoration: none;
        font-size: 20px;
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