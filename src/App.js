import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import * as S from "./styles/styledComponents";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

const fontColor = {
  color: "#d63031",
};

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Button</h1>
      <S.BtSection>
        <S.PriButton color="#55efc4">
          Large Primary Button &nbsp;
          <FontAwesomeIcon icon={faChevronRight} />
        </S.PriButton>
        <S.LButton color="#55efc4">Medium</S.LButton>
        <S.SButton color="#55efc4">Small</S.SButton>
      </S.BtSection>
      <S.BtSection>
        <S.PriButton theme={fontColor} color="#fab1a0">
          Large Negative Button &nbsp;
          <FontAwesomeIcon icon={faBell} />
        </S.PriButton>
        <S.LButton color="#fab1a0" theme={fontColor}>
          Medium
        </S.LButton>
        <S.SButton color="#fab1a0" theme={fontColor}>
          Small
        </S.SButton>
      </S.BtSection>
      <h1>Input</h1>
      <section>
        <div>
          <span>이름</span>
          <input />
        </div>
        <div>
          <span>가격</span>
          <input />
        </div>
        <button>저장</button>
      </section>
      <h1>Modal</h1>
      <section>
        <button>open modal</button>
        <button>open modal</button>
      </section>
      <section>
        <h1>Select</h1>
        <select></select>
        <select></select>
      </section>
    </>
  );
}

export default App;
