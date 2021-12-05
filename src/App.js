import "./App.css";
import { Switch } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import Navigation from './components/Navigation';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { currentUser } from './redux/auth/auth-operations';


const ContactsPage = lazy(() => import('./pages/Contacts'));
const RegisterPage = lazy(() => import('./pages/Register'));
const LoginPage = lazy(() => import('./pages/Login'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <PrivateRoute exact path="/" redirectTo="/login">
            <ContactsPage />
          </PrivateRoute>
          <PublicRoute exact path="/register" restricted>
            <RegisterPage />
          </PublicRoute>
          <PublicRoute exact path="/login" restricted>
            <LoginPage />
          </PublicRoute>
        </Switch>
      </Suspense>
    </div>
  );
}
