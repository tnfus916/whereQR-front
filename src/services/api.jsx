import axiosInstance from "./axios";

export const getUserInfo = async () => {
    const res = await axiosInstance.get('/member/detail');

    if (res.data.status === 'SUCCESS') {
        return res.data.data;
    } else {
        alert(res.data.message);
    }
}

export const getUserQRCode = async () => {
    const res = await axiosInstance.get('/qrcode/my');

    if (res.data.status === 'SUCCESS') {
        return res.data.data;
    } else {
        alert(res.data.message);
    }
};

export const getUserChatId = async () => {
    const res = await axiosInstance.get('/member/me');
    return res.data.data;
}

export const getChatRoomList = async () => {
    const res = await axiosInstance.get('/chat/chatrooms/');

    if (res.data.status === 'SUCCESS') {
        return res.data.data;
    } else {
        alert(res.data.message);
    }
}

export const getChatHistory = async (chatroomId) => {
    const res = await axiosInstance.get('/chat/messages/', { params: { chatroomId: chatroomId, } });

    if (res.data.status === 'SUCCESS') {
        return res.data.data;
    } else {
        alert(res.data.message);
    }
}