import Quiz from "./components/Quiz";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="header-inner">
          <span className="logo-icon">🤖</span>
          <div>
            <h1 className="app-title">GitHub Copilot Trainer</h1>
            <p className="app-subtitle">
              Test and sharpen your GitHub Copilot knowledge
            </p>
          </div>
        </div>
      </header>
      <main className="app-main">
        <Quiz />
      </main>
      <footer className="app-footer">
        <p>Built to help developers master GitHub Copilot ✨</p>
      </footer>
    </div>
  );
}

export default App;
