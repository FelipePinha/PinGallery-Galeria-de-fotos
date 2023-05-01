import * as C from "./Gallery.styles";

export const Gallery = () => {
    const images = [
        "https://i.pinimg.com/originals/df/35/00/df35000e7ec82d3b6fbf6318fc9ed3f5.jpg",
        "https://i.pinimg.com/564x/46/df/7f/46df7f20c1be1bcc4e08a25c47b10ac4.jpg",
        "https://i.pinimg.com/564x/0a/ee/3a/0aee3a20fe927e2831bceccec45d863d.jpg",
        "https://i.pinimg.com/564x/b4/66/44/b466448408074c240ab6b2bc6e3099b3.jpg",
        "https://i.pinimg.com/originals/df/35/00/df35000e7ec82d3b6fbf6318fc9ed3f5.jpg",
        "https://i.pinimg.com/564x/46/df/7f/46df7f20c1be1bcc4e08a25c47b10ac4.jpg",
        "https://i.pinimg.com/564x/0a/ee/3a/0aee3a20fe927e2831bceccec45d863d.jpg",
        "https://i.pinimg.com/564x/b4/66/44/b466448408074c240ab6b2bc6e3099b3.jpg",
        "https://i.pinimg.com/originals/df/35/00/df35000e7ec82d3b6fbf6318fc9ed3f5.jpg",
        "https://i.pinimg.com/564x/46/df/7f/46df7f20c1be1bcc4e08a25c47b10ac4.jpg",
        "https://i.pinimg.com/564x/0a/ee/3a/0aee3a20fe927e2831bceccec45d863d.jpg",
        "https://i.pinimg.com/564x/b4/66/44/b466448408074c240ab6b2bc6e3099b3.jpg",
    ];

    return (
        <C.GallerySection>
            {
                // Prettier-ignore
                images &&
                    images.map((image, index) => {
                        return <C.Img src={image} key={index} />;
                    })
            }
        </C.GallerySection>
    );
};
