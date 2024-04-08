import { BrowserRouter, Route, Routes } from "react-router-dom";
import Qr from "./Qr";
import Dummy from "./Dummy";
import { AmountProvider } from "./context/AmountContext";
import { Toaster } from "sonner";
import Success from "./Success";

function App() {
  return (
    <>
      <AmountProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dummy />} />
            <Route path="/qr" element={<Qr />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </BrowserRouter>
      </AmountProvider>
      <Toaster
        toastOptions={{ className: "flex justify-center" }}
        position="top-center"
        richColors
      />
    </>
  );
}

export default App;
