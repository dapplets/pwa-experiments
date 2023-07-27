import React from "react";
import "./App.css";

function App() {
  const handleNext = () => {
    const url = new URL(window.location.href);
    const callbackUrl = url.searchParams.get("callback") ?? "";
    window.location.href = callbackUrl;
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Scenario Two</p>
        <p>
          <button onClick={handleNext}>Next</button>
        </p>
      </header>
    </div>
  );
}

export default App;
