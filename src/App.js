import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";

import ButtonContainer from "./containers/ButtonContainer";
import ModalContainer from "./containers/ModalContainer";
import InputContainer from "./containers/InputContainer";
import SelectContainer from "./containers/SelectContainer";

function App() {
  return (
    <>
      <GlobalStyle />
      <ButtonContainer />
      <InputContainer />
      <ModalContainer />
      <SelectContainer />
    </>
  );
}

export default App;
