import styled from "styled-components";

export const GallerySection = styled.section`
    padding: 20px;
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-gap: 20px;
`;

export const Img = styled.img`
    width: 100%;
    max-width: 200px;
    height: 200px;
    border-radius: 10px;
    margin: 0 auto;
`;
