import "./App.css";
import logo from "./assets/holberton-logo.jpg";

function App() {
  const year = new Date().getFullYear();

  return (
    <>
      <header className="App-header">
        <img src={logo} alt="holberton logo" />
        <h1>School dashboard</h1>
      </header>

      <main className="App-body">
        <p>Login to access the full dashboard</p>
      </main>

      <footer className="App-footer">
        <p>Copyright {year} - Holberton School</p>
      </footer>
    </>
  );
}

export default App;