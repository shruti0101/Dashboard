import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/Store';
import { PersistGate } from 'redux-persist/integration/react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import DummyList from './components/DummyList';
import PrivateRoute from './routes/PrivateRoute';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/dummy-list" element={<PrivateRoute><DummyList /></PrivateRoute>} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
