import { useQuery } from 'react-query';

import { getUserQRCode } from '../../services/api';

import QRListItem from '../../components/qrcode/QRListItem';
import {
  QRListContainer,
  QRPageContainer,
  QRTitle,
} from '../../components/qrcode/QRStyle';

function QRList() {
  const { isLoading, data } = useQuery("usercode", getUserQRCode);

  return (
    <>
      { isLoading ? (null) : (
        <QRPageContainer>
          <QRTitle>QR코드 목록</QRTitle>
          <QRListContainer>
            { data?.map((code) => (
              <QRListItem key={ code.id } data={ code } />
            )) }
          </QRListContainer>
        </QRPageContainer>
      ) }
    </>
  );
}

export default QRList;