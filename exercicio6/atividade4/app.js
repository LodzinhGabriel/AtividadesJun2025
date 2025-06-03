// src/App.js
import React from 'react';
import FixedAppBar from './FixedAppBar';

function App() {
  return (
    <div>
      <FixedAppBar />
      <div style={{ marginTop: '64px', padding: '20px' }}> {/* Add margin-top equal to AppBar height */}
        <h1>Bem-vindo!</h1>
        <p>Este é o conteúdo da sua página. Role para baixo para ver a barra de navegação fixa em ação.</p>
        {/* Adicione bastante conteúdo para permitir a rolagem */}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>...</p> {/* Repita este parágrafo várias vezes para simular conteúdo longo */}
        <p>Fim do conteúdo.</p>
      </div>
    </div>
  );
}

export default App;