import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { useSearchParams } from "react-router-dom";

const appScheme = "exp://192.168.1.87:19000/--/signup?company=Test Inc&manager=Kai Burkholder";
const appName = 'todoList';

function App(props) {
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(()=>{
    console.log(window.location.href)
  },[])

  function handleSubmit(event) {
    event.preventDefault();
    // The serialize function here would be responsible for
    // creating an object of { key: value } pairs from the
    // fields in the form that make up the query.
    let params = serializeFormQuery(event.target);
    setSearchParams(params);
    console.log(params);
  }


  const isIos = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
  window.location.href = appScheme;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Moving to {appName} {isIos ? 'Iphone' : 'Android'} App
        </p>
        <a className="App-link" href={appScheme}>
          Click here to move back to the mobile app!!
        </a>
      </header>
    </div>
  );
}

export default App;
