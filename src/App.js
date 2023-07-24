import './all.css';
import TabSwitcher from './context/TabSwitcher';

import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <TabSwitcher>
              <HomePage />
            </TabSwitcher>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
