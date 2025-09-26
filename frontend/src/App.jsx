import "./App.css";
import Jobs from "./components/pages/Jobs";

function App() {
  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4 font-bold">Job Tracker</h1>

      <main>
        <Jobs />
      </main>
    </div>
  );
}

export default App;
