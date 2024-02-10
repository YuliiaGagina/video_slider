import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

import Layout from "./components/Layout";

import Something from "./pages/Something";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="something" element={<Something />} />
      </Routes>
    </div>
  );
}

export default App;
