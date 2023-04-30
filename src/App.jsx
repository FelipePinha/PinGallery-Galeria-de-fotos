// Styles import
import GlobalStyle from "./styles/global";
import * as C from "./styles/App.styles";

// Components import
import { Title } from "./components/Title/Title";

function App() {
    return (
        <>
            <GlobalStyle />

            <C.AppContainer>
                <C.Header>
                    <span>PinGallery</span>
                </C.Header>
                <Title />
            </C.AppContainer>
        </>
    );
}

export default App;
