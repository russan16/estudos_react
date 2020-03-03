import React from 'react';
import Header from './Header';
import Main from './pages/main';
import './styles.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => (
    <main className="container-fluid">
        <Header/>
        <Main/>
    </main>
);
export default App;
