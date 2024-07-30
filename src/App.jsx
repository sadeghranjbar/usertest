import { useEffect } from "react";
import "./App.css";
const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {

    tg.ready();

  }, [])


  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
      work latest username injast
      <button onClick={onClose}> close </button>
      <span>{tg.initDataUnsafe?.user?.username}</span>
    </div>
  );
}

export default App;
