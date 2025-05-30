import React from 'react';
import Header from './components/Header';
import QuadrasList from './components/QuadrasList';
import ReservaForm from './components/ReservaForm';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <h2>Aluguel e Gestão de Quadras Esportivas</h2>
        <QuadrasList />
        <ReservaForm />
      </main>
    </div>
  );
}

export default App;
