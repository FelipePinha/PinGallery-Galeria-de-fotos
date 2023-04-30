import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    justify-content: center;

    input {
        display: none;
    }

    label {
        color: #efb6b2;
        margin-top: 20px;
        width: 40px;
        height: 40px;
        border: 2px solid #efb6b2;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: 0.3s ease-in-out;

        &:hover {
            background-color: #efb6b2;
            color: #fff;
        }
    }
`;
