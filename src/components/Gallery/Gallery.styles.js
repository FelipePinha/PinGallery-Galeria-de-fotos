import styled from "styled-components";

export const GallerySection = styled.section`
    padding: 20px;
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-gap: 15px;
`;

export const Img = styled.img`
    width: 100%;
    max-width: 250px;
    height: 200px;
    border-radius: 10px;
    margin: 0 auto;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`;
