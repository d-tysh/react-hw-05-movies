import styled from "@emotion/styled";

export const CastListStyled = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
    list-style: 'none';

    & li {
        display: flex;
        justify-content: center;
        flex-direction: column;
        cursor: pointer;
        width: 150px;
        text-align: center;
        box-shadow: 2px 5px 5px 2px rgba(0,0,0,0.3);

        & div {
            padding: 4px;
            height: 100%;
        }

        &:hover {
            box-shadow: 5px 10px 10px 5px rgba(0,0,0,0.3);
        }
    }
`;