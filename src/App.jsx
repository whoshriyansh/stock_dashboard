import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import ModalsPage from "./pages/ModalsPage";
import { ModalProvider } from "./context/ModalContext";
import InputFields from "./pages/InputFields";
import AnalyticsPage from "./pages/AnalyticsPage";
import SignUpPage from "./pages/SignUpPage";
import CustomerList from "./pages/e-commerce/CustomerList";
import OrderList from "./pages/e-commerce/OrderList";
import InvoiceList from "./pages/e-commerce/InvoiceList";

const App = () => {
  return (
    <ModalProvider>
      <Router>
        <Routes>
          {/* Routes with Layout */}
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/modals" element={<ModalsPage />} />
            <Route path="/input-field" element={<InputFields />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/customer-list" element={<CustomerList />} />
            <Route path="/order-list" element={<OrderList />} />
            <Route path="/invoice-list" element={<InvoiceList />} />
          </Route>

          {/* Full-screen SignUpPage without Layout */}
        </Routes>
      </Router>
    </ModalProvider>
  );
};

export default App;
