import { useState } from 'react';
import Dashboard from './pages/Dashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="app-shell">
      <header>
        <h1>Creator's Platform Demo</h1>
      </header>
      <main>
        {isAuthenticated ? (
          <Dashboard onLogout={() => setIsAuthenticated(false)} />
        ) : (
          <div className="login-card">
            <p>Click the button to simulate an authenticated session.</p>
            <button onClick={() => setIsAuthenticated(true)}>Login</button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
