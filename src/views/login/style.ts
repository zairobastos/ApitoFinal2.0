import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    background-color: #fff;

    .fundo {
        background-image: url("login.jpg");
        background-size: cover;
    }
`;

export const Inputi = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    .password {
        width: calc(100% - 48px);
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: none;
    }
    .olho {
        width: 48px;
        padding: 0px 8px;
        border-left: none;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        color: #333;
    }
`;
