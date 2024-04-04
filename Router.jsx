import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './src/page/Landing';
import NotFound from './src/page/NotFound';
import Layout from './src/components/layout/Layout';
import Join from './src/components/account/Join';
import MyPage from './src/page/MyPage';
import QRScan from './src/page/qrcode/QRScan';
import QRDetail from './src/page/qrcode/QRDetail';
import QREdit from './src/page/qrcode/QREdit';
import QRRegister from './src/page/qrcode/QRRegister';
import Login from './src/components/account/Login';
import ChatList from './src/page/Chatlist';
import ChatRoom from './src/page/ChatRoom';
import KakaoLogin from './src/components/account/KakaoLogin';
import QRList from './src/page/qrcode/QRList';
import Dashboard from './src/page/Dashboard';
// import DashboardPost from './src/page/DashBoardPost';
import MyDashboard from './src/components/dashboard/MyDashboard';
import MyPost from './src/page/MyPost';
import PostBookmark from './src/page/PostBookmark';
import WritePost from './src/page/WritePost';

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
          <Route path="/kakaologin" element={<KakaoLogin />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/qrregister/:ID" element={<QRRegister />} />
          <Route path="/qredit/:ID" element={<QREdit />} />
          <Route path="/qrlist" element={<QRList />} />
          {/* <Route path="/qrlist/:ID" /> */}
          <Route path="/chatlist" element={<ChatList />} />
          <Route path="/chatroom/:ID" element={<ChatRoom />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/write" element={<WritePost />} />
          <Route path="/mypost" element={<MyPost />} />
          <Route path="/bookmark" element={<PostBookmark />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
