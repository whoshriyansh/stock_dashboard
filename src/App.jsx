import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import ModalsPage from "./pages/ModalsPage";
import { ModalProvider } from "./context/ModalContext";
import InputFields from "./pages/InputFields";

const App = () => {
  return (
    <ModalProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/modals" element={<ModalsPage />} />
            <Route path="/input-field" element={<InputFields />} />
          </Route>
        </Routes>
      </Router>
    </ModalProvider>
  );
};

export default App;
