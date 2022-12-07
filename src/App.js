
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Pages/Home';
import Next from './Pages/Next';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/next" element={<Next/>}/>
      </Routes>
  );
}

export default App;
