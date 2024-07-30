import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";


function App() {

  useEffect(() => {

    tg.ready();

  }, [])




  return (
    <div className="App">
      this is the close button
      <Header/>
    </div>
  );
}

export default App;
