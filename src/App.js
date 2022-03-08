import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

const appName = 'todoList';

function App(props) {
  const queryParams = new URLSearchParams(window.location.search);
  console.log(queryParams.get('manager'));
  const manager = queryParams.get('manager');
  const appScheme = `exp://192.168.1.87:19000/--/signup?manager=${manager}&rank=2`;

  useEffect(()=>{
    console.log(window.location.href)
  },[])

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
