import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import Home from './components/Home';

function App() {
  return (
    <div class="container App">
      <Home />
    </div>
  );
}

export default App;
