import router from '@/configs/router';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import BottomMenu from './components/features/BottomMenu';
import SafeAreaContainer from './components/layout/SafeAreaContainer';
import AuthContext from './services/AuthContext';
import Hover from './services/Hover';

function App() {
  return (
    <BrowserRouter>
      <AuthContext />
      <Hover />
      <SafeAreaContainer>
        <Toaster
          toastOptions={{
            position: 'bottom-center',
            style: {
              borderRadius: 100,
              userSelect: 'none',
            },
          }}
        />
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
