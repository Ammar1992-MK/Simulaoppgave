import {useEffect,useState} from 'react'
import json from './data.json'
import './App.css';

function App() {
    const [data, setData] = useState();

    const getData = () => {
        if(json){
            setData(json.data)
        }
    }

    const renderDataItem = (id,displayId, description, type ) => {
        return <div key={id} className={"data-inner-container"}>
            <div id={type} className={"display-id"}>{displayId}</div>
            <div className={"data"}>{description}</div>
        </div>
    }

    useEffect( getData, [])

    if(!data){
        return <div>Loading...</div>
    }

  return (
    <div className="App">
      <header>
         <div className={"header-content"}>
             <div className={"logo"}>
                 <img src={'../logo_icon_blå.png'} alt={"logo"}/>
             </div>
             <div className={"name"}>
                 <p>Disputas</p>
             </div>
         </div>
      </header>

        <div className={"main-data-container"}>
                <div className={"data-container"}>
                    {data.map((data) => (
                        renderDataItem(data.id,data.displayId, data.description, data.type)
                    ))}
                </div>
        </div>
    </div>
  );
}

export default App;
