import './App.css';
import './IntroPage.js'
import IntroPage from './IntroPage.js';

function App() {
  return (
    <div className="App">
      <div class = "sidebar-wrapper">
        <div class = "sidebar">
          <div class = "sidebar-button">

          </div>
          <div class = "button-padding"></div>
          <div class = "sidebar-button">

          </div>
          <div class = "button-padding"></div>
          <div class = "sidebar-button">

          </div>
          <div class = "button-padding"></div>
          <div class = "sidebar-button">

          </div>
        </div>
      </div>
      <div class = "main-page">
        <>
          <IntroPage />
        </>
      </div>
    </div>
  );
}

export default App;
