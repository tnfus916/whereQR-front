import props from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Button, Image, ItemText, Label } from './QRStyle';

function QRListItem({ data }) {
  const navigate = useNavigate();

  const handleDetail = () => {
    console.log('QR코드 보기 버튼 클릭');
    navigate(`/qrscan/${data.id}`);
  };

  const handleEdit = () => {
    console.log('수정하기 버튼 클릭');
    navigate(`/qredit/${data.id}`);
  };
  return (
    <>
      {/* <Label>제목</Label> */}
      <ItemText>{data.title}</ItemText>
      {/* <Label>메모</Label> */}
      <ItemText>{data.memo}</ItemText>
      {/* <Image src={data.url} /> */}
      <Button onClick={handleDetail}>QR코드 보기</Button>
      <Button onClick={handleEdit}>수정하기 </Button>
    </>
  );
}

QRListItem.propTypes = {
  data: props.object.isRequired,
};

export default QRListItem;
