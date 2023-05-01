// Styles import
import GlobalStyle from "./styles/global";
import * as C from "./styles/App.styles";

// Components import
import { Title } from "./components/Title/Title";
import { UploadForm } from "./components/UploadForm/UploadForm";
import { Gallery } from "./components/Gallery/Gallery";

function App() {
    return (
        <>
            <GlobalStyle />

            <C.AppContainer>
                <C.Header>
                    <span>PinGallery</span>
                </C.Header>
                <Title />
                <UploadForm />
                <Gallery />
            </C.AppContainer>
        </>
    );
}

export default App;
