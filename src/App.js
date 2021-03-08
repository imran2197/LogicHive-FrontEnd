import React, {useState, useEffect} from 'react';
import "./App.css";
import OurServices from './components/OurServices';

const App = () => {
  const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9999/services")
        .then(res => res.json())
        .then(res => setData(res));
    }, [])
    console.log("data",data);
  return (
    <>
        <h1 className="header">Our Services</h1>
        <div className="cards">
          {
            data.map((item) => (
              <OurServices item={item} />
            ))
          }
        </div>
    </>
  )
}

export default App;
