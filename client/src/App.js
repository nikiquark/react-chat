import './App.css';
import {useEffect, useRef, useState} from 'react';

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(()=>{
    setInterval(()=>{
      fetch('http://127.0.0.1:5000/api/message').
      then(x=>x.json()).
      then(x=>setMessages(x));
    }, 100);
  },[]);
  function sendMessage(){
    let text = inpRef.current.value;
    if (text == '')
      return;
    let message = {user:"ИМЯ в коде прописано", text: text};
    fetch('http://127.0.0.1:5000/api/message',{
      method: 'POST',
      body: JSON.stringify(message), 
      headers: {
        'Content-Type': 'application/json'
      }
    })
    inpRef.current.value = '';
  }
  const inpRef = useRef();
  return (
    <div className="App">
      {messages.map(mes=><div><h2>{mes.user}</h2><p>{mes.text}</p></div>)}
      <div>
        <input ref={inpRef}/>
        <button onClick={sendMessage}>Отправить</button>
      </div>
    </div>
  );
}

export default App;
