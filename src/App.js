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
      <div className = "App">
        <BrowserRouter>
          <SideMenu />
          <Routes>
            <Route path = '/counter' exact element = { <Counter/> } />
            <Route path = "/calculator" element = { <Caclulator/> } />
            <Route path = "/pdfviewer" element = { <PDFViewer/> } />
            <Route path = "/texteditor" element = { <TextEditor/> } />
            <Route path = "/tictactoe" element = { <TicTacToe/> } />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
