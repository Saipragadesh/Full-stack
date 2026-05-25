import { useEffect, useState } from 'react';
import socket from '../services/socket';

function Dashboard({ onLogout }) {
  const [status, setStatus] = useState('disconnected');
  const [socketId, setSocketId] = useState(null);

  useEffect(() => {
    function handleConnect() {
      setStatus('connected');
      setSocketId(socket.id);
      console.log('Socket connected:', socket.id);
    }

    function handleDisconnect(reason) {
      setStatus('disconnected');
      setSocketId(null);
      console.log('Socket disconnected:', reason);
    }

    function handleConnectError(error) {
      console.error('Socket connection error:', error);
      setStatus('error');
    }

    socket.on('connect', handleConnect);
    socket.on('disconnect', handleDisconnect);
    socket.on('connect_error', handleConnectError);

    socket.connect();

    return () => {
      socket.off('connect', handleConnect);
      socket.off('disconnect', handleDisconnect);
      socket.off('connect_error', handleConnectError);
      socket.disconnect();
    };
  }, []);

  return (
    <section className="dashboard-card">
      <h2>Dashboard</h2>
      <p>Status: <strong>{status}</strong></p>
      {socketId && <p>Socket ID: <code>{socketId}</code></p>}
      <button onClick={onLogout}>Logout</button>
    </section>
  );
}

export default Dashboard;
