import "./App.css";
const tg = window.Telegram.WebApp;

function App() {
  const onClose = () => {
    console.log(EventTargetShim);
  };

  return (
    <div className="App">
      work
      <button onClick={onClose}> close </button>
    </div>
  );
}

export default App;
