import styled from "@emotion/styled";

export const SearchFormStyled = styled.form`
    display: flex;
    gap: 8px;
    justify-content: center;
    height: 40px;
    margin-top: 20px;
    
    & input {
        font-size: 16px;
        width: 400px;
        padding: 8px 12px;
        border: 2px solid;
        border-radius: 8px;

        &:hover {
            border-color: orangered;
        }
    }  

    & button {
        border: 2px solid black;
        border-radius: 8px;
        padding: 0 16px;
        font-size: 20px;
        cursor: pointer;

        &:hover {
            background-color: orangered;
            color: #fff;
        }
    }
`;