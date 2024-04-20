import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./src/pages/Layout";
import Landing from "./src/pages/Landing";
import Join from "./src/pages/account/Join";
import Login from "./src/pages/account/Login";
import KakaoLogin from "./src/pages/account/KakaoLogin";
import NotFound from "./src/pages/NotFound";

import QRScan from "./src/pages/qrcode/QRScan";
import QRDetail from "./src/pages/qrcode/QRDetail";
import QREdit from "./src/pages/qrcode/QREdit";
import QRRegister from "./src/pages/qrcode/QRRegister";
import QRList from "./src/pages/qrcode/QRList";

import Dashboard from "./src/pages/dashboard/Dashboard";
import PostDetail from "./src/pages/dashboard/PostDetail";
import MyPosts from "./src/pages/dashboard/MyPosts";
import FavoritePosts from "./src/pages/dashboard/FavoritePosts";
import WritePost from "./src/pages/dashboard/WritePost";

import ChatList from "./src/pages/chat/ChatList";
import ChatRoom from "./src/pages/chat/ChatRoom";

import Mypage from "./src/pages/account/MyPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/kakaologin" element={<KakaoLogin />} />
          <Route path="/qrscan" element={<QRScan />} />
          <Route path="/qrscan/:ID" element={<QRDetail />} />
          <Route path="/qrregister/:ID" element={<QRRegister />} />
          <Route path="/qredit/:ID" element={<QREdit />} />
          <Route path="/qrlist" element={<QRList />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/:ID" element={<PostDetail />} />
          <Route path="/dashboard/write" element={<WritePost />} />
          <Route path="/mypost" element={<MyPosts />} />
          <Route path="/bookmark" element={<FavoritePosts />} />
          <Route path="/chatlist" element={<ChatList />} />
          <Route path="/chatroom/:ID" element={<ChatRoom />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
