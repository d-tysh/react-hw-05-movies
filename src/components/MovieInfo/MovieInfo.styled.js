import styled from "@emotion/styled";

export const InfoStyled = styled.div`
    display: flex;
    gap: 12px;
    border-bottom: 4px dashed grey;
    padding-bottom: 8px;
    font-weight: bold;

    & img {
        width: 300px;
        display: block; 
    }
`;

export const AddInfoStyled = styled.div`
    padding-bottom: 12px;
    border-bottom: 4px dotted grey; 
    font-weight: bold;
`;

export const MovieNav = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;

    & a {
        text-decoration: none;
        color: black;
        border: 2px solid black;
        border-radius: 8px;
        font-size: 16px;
        font-weight: bold;
        padding: 4px 8px;

        &:hover {
            background-color: orangered;
            color: #fff;
        }
    }
`;