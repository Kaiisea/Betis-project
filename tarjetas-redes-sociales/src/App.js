import { Tarjeta } from "./components/Tarjeta";

function App() {
  return (
    <div style={{display: "flex", justifyContent: "space-between", maxWidth: 720, margin: '0 auto'}}>
    <Tarjeta
      title="TWITTER"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      textBoton="READ MORE"
      color="blue"
    />
    <Tarjeta
      title="INSTAGRAM"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      textBoton="READ MORE"
      color="blue"
    />
    <Tarjeta
      title="YOUTUBE"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      textBoton="READ MORE"
      color="blue"
    />
    </div>
  );
}

export default App;
