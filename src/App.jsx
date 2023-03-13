import { Routes, Route, Navigate } from "react-router-dom";
import { useStoreState } from 'easy-peasy';
import Layout from "./components/layouts";
import Home from './views/home/index';
import Mocktests from './views/mocktests/index';
import Login from './views/auth/login/index';
import Account from './views/account/dashboard/index';
import Questions from './views/account/questions/index';
import CreateQuestions from './views/account/questions/create.jsx';

const RequireAuth = ({ children }) => {
  const isAuthenticated = useStoreState((state) => state.auth.token);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

const App = () => {
  return <div >
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="mocktests" element={<Mocktests />} />
        <Route path="login" element={<Login />} />
        <Route path="account" element={
          <RequireAuth >
            <Account />
          </RequireAuth>
        } />
        <Route path="questions/:mocktestid" element={<Questions />} />
        <Route path="questions/:mocktestid/create" element={<CreateQuestions />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  </div >;
};

export default App;
