import './App.css';
import SideMenu from './Components/SideMenu';

import Caclulator from './Pages/Calculator';
import Counter from './Pages/Counter';
import PDFViewer from './Pages/PDFViewer';
import TextEditor from './Pages/TextEditor';
import TicTacToe from './Pages/TicTacToe';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = "/calculator" element = { <Caclulator/> } />
        </Routes>
      </BrowserRouter>

      <div className = "App">
        <SideMenu />
      </div>
      <div>

      </div>
    </div>
  );
}

export default App;
