import React from "react";
import logo from "./logo.svg";
import "./App.css";

// ToDo: make recursive with array of urls
function createCallbackUrl(baseUrl: string, callbackUrl: string): string {
  const url = new URL(baseUrl);
  url.searchParams.append("callback", callbackUrl);
  return url.href;
}

function App() {
  const handleScenarioOne = () => {
    const scenarioOneUrl = process.env.REACT_APP_DOMAIN_SCENARIO_ONE || "";
    window.location.href = createCallbackUrl(
      scenarioOneUrl,
      window.location.href
    );
  };

  const handleScenarioTwo = () => {
    const scenarioTwoUrl = process.env.REACT_APP_DOMAIN_SCENARIO_TWO || "";
    window.location.href = createCallbackUrl(
      scenarioTwoUrl,
      window.location.href
    );
  };

  const handleScenarioOneTwo = () => {
    const scenarioOneUrl = process.env.REACT_APP_DOMAIN_SCENARIO_ONE || "";
    const scenarioTwoUrl = process.env.REACT_APP_DOMAIN_SCENARIO_TWO || "";
    window.location.href = createCallbackUrl(
      scenarioOneUrl,
      createCallbackUrl(scenarioTwoUrl, window.location.href)
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>
            Should redirect to the 1st scenario, then return to the main page
          </p>
          <button onClick={handleScenarioOne}>Scenario 1</button>
        </div>
        <div>
          <p>
            Should redirect to the 2nd scenario, then return to the main page
          </p>
          <button onClick={handleScenarioTwo}>Scenario 2</button>
        </div>
        <div>
          <p>
            Should redirect to the 1st scenario, then to the 2nd, then return to
            the main page
          </p>
          <button onClick={handleScenarioOneTwo}>Scenario 1 + 2</button>
        </div>
      </header>
    </div>
  );
}

export default App;
