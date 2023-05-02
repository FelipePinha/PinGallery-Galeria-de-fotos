import styled from "styled-components";

export const Form = styled.form`
    width: 100%;
    padding: 0 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

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

export const ErrorCard = styled.div`
    max-width: 370px;
    background-color: #efb6b2;
    color: #fff;
    padding: 14px;
    border-radius: 8px;
    display: ${props => (props.error ? "block" : "none")};
    position: relative;
`;
