import router from '@/configs/router';
import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import BottomMenu from './components/features/BottomMenu';
import SafeAreaContainer from './components/layout/SafeAreaContainer';

function App() {
  return (
    <BrowserRouter>
      <SafeAreaContainer>
        <Routes>
          {router.map((item) => (
            <Route path={item.path} element={<item.Component />} />
          ))}
        </Routes>
        <BottomMenu />
      </SafeAreaContainer>
    </BrowserRouter>
  );
}

export default App;
