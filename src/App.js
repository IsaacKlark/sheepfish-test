import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Main from "./pages/Main/index.js";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
