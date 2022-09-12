import Form from "./Form";
import { StyledHeader } from "./styled";


function App() {
  return (
    <>
      <header>
        <StyledHeader>Kalkulator walutowy</StyledHeader>
      </header>
      <main>
        <Form />
      </main>
      <footer>
        <p>Made by RJ &#128516;</p>
      </footer>
    </>
  );
};

export default App;
