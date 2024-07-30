import { useEffect } from "react";
import "./App.css";


function App() {

  useEffect(() => {

    tg.ready();

  }, [])




  return (
    <div className="App">
      this is the close button

    </div>
  );
}

export default App;
