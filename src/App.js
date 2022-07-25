import Loading from './Loading';
import Events from './Events';
import './App.css';
import React,{useState} from 'react';

function App() {
  const [loading, setLoading] = useState(false)
  const [events, setEvents] = useState([])

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    )}
  return (
    <div>
      <Events  />
    </div>
  );
}

export default App;
