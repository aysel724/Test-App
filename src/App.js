import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import MainPage from "./MainPage";
import Page from "./Page";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/:index" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
