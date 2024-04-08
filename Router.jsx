import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './src/pages/Layout';
import Landing from './src/pages/Landing';
import NotFound from './src/pages/NotFound';

import QRScan from './src/pages/qrcode/QRScan';
import QRDetail from './src/pages/qrcode/QRDetail';
import QREdit from './src/pages/qrcode/QREdit';
import QRRegister from './src/pages/qrcode/QRRegister';
import QRList from './src/pages/qrcode/QRList';

import Dashboard from './src/pages/dashboard/Dashboard';
// import DashboardPost from './src/page/dashboard/DashBoardPost';
// import MyDashboard from './src/components/dashboard/MyDashboard';
import MyPost from './src/pages/dashboard/MyPost';
import PostBookmark from './src/pages/dashboard/PostBookmark';
import WritePost from './src/pages/dashboard/WritePost';

import ChatList from './src/pages/chat/Chatlist';
import ChatRoom from './src/pages/chat/ChatRoom';

import Join from './src/pages/account/Join';
import Mypage from './src/pages/account/MyPage';
import Login from './src/pages/account/Login';
import KakaoLogin from './src/pages/account/KakaoLogin';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <Layout /> }>
          <Route path="/" element={ <Landing /> } />
          <Route path="/qrscan" element={ <QRScan /> } />
          <Route path="/qrscan/:ID" element={ <QRDetail /> } />
          <Route path="/signup" element={ <Join /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/kakaologin" element={ <KakaoLogin /> } />
          <Route path="/mypage" element={ <Mypage /> } />
          <Route path="/qrregister/:ID" element={ <QRRegister /> } />
          <Route path="/qredit/:ID" element={ <QREdit /> } />
          <Route path="/qrlist" element={ <QRList /> } />
          {/* <Route path="/qrlist/:ID" /> */ }
          <Route path="/chatlist" element={ <ChatList /> } />
          <Route path="/chatroom/:ID" element={ <ChatRoom /> } />
          <Route path="/dashboard" element={ <Dashboard /> } />
          <Route path="/dashboard/write" element={ <WritePost /> } />
          <Route path="/mypost" element={ <MyPost /> } />
          <Route path="/bookmark" element={ <PostBookmark /> } />
          <Route path="*" element={ <NotFound /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
