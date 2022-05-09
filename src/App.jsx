/** @format */

import { Suspense, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';

import './styles/app.scss';

import Loading from './pages/Loading';
import AppRoutes from './routes/routes';
import { fetchUser } from './features/user/userSlice';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('LibelAcademyToken');  

    if (token) {
      dispatch(fetchUser());
    }
  }, [dispatch]);

  return (
    <main className='App'>
      <BrowserRouter>
        <ToastContainer
          position='top-center'
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          style={{
            zIndex: 99999,
          }}
        />
        <Suspense fallback={<Loading />}>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </main>
  );
};

export default App;
