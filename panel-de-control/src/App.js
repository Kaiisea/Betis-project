import './App.css';
import { IniciarSesion } from './components/IniciarSesion';
import { PanelControl } from './components/PanelControl';
import { Authentication } from './components/Authentication';

function App() {
  return (
    <div>
      <Authentication>
        <PanelControl/>
      </Authentication>
    </div>
  );
}

export default App;
