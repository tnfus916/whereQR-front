import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./src/components/landing/Landing";
import NotFound from "./src/components/notfound/NotFound";
import Layout from "./src/components/layout/Layout";
import Join from "./src/components/account/Join";
import MyPage from "./src/components/account/MyPage";
import QRScan from "./src/components/qrcode/QRScan";
import QRDetail from "./src/components/qrcode/QRDetail";
import QREdit from "./src/components/qrcode/QREdit";
import QRSave from "./src/components/qrcode/QRSave";
import QRRegister from "./src/components/qrcode/QRRegister";
import Redirection from "./src/Redirection";
import Login from "./src/components/account/Login";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/qrscan" element={<QRScan />} />
          <Route path="/qrscan/:ID" element={<QRDetail />} />
          <Route path="/signup" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/redirect" element={<Redirection />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/qrsave" element={<QRSave />} />
          <Route path="/qrsave/:ID" element={<QRRegister />} />
          <Route path="/qredit/:ID" element={<QREdit />} />
          <Route path="/qrlist" />
          {/* <Route path="/qrlist/:ID" /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
