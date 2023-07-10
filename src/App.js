import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";

import ButtonContainer from "./containers/ButtonContainer";
import ModalContainer from "./containers/ModalContainer";
import InputContainer from "./containers/InputContainer";

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Button</h1>
      <ButtonContainer />
      <h1>Input</h1>
      <InputContainer />
      <h1>Modal</h1>
      <ModalContainer />
      <h1>Select</h1>
      <section className="Selects">
        <h1>Select</h1>
        <select></select>
        <select></select>
      </section>
    </>
  );
}

export default App;
