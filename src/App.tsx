import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/HomePage";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index path="/" element={<Homepage />} />
        <Route path="*" element={<Homepage />} />
      </Route>
    </Routes>
  );
}

export default App;
