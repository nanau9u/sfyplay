import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from '../components/Header';
import MenuCard from '../components/MenuCard';
import { useNavigate } from 'react-router-dom';

function MenuSelectionPage() {
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState(null);

  const menuData = [
    { title: '한식', items: ['치즈부대찌개', '수수밥', '건새우무추전', '도토리묵무침', '미역초무침', '깍두기', '유자차'] },
    { title: '일품', items: ['치즈부대찌개', '수수밥', '건새우무추전', '도토리묵무침', '미역초무침', '깍두기', '유자차'] },
    { title: '도시락', items: ['치즈부대찌개', '수수밥', '건새우무추전', '도토리묵무침', '미역초무침', '깍두기', '유자차'] },
    { title: '브런치', items: ['치즈부대찌개', '수수밥', '건새우무추전', '도토리묵무침', '미역초무침', '깍두기', '유자차'] },
    { title: '샐러드', items: ['치즈부대찌개', '수수밥', '건새우무추전', '도토리묵무침', '미역초무침', '깍두기', '유자차'] },
  ];

  const handleMenuClick = (menuTitle) => {
    setSelectedMenu(menuTitle);
  };

  const handleSubmit = () => {
    if (selectedMenu) {
      // 실제 선택 메뉴 정보를 서버로 전송하는 로직 추가
      console.log(`사용자가 선택한 메뉴: ${selectedMenu}`);
      navigate('/betting'); // 다음 페이지로 이동
    } else {
      alert('메뉴를 선택해주세요!');
    }
  };

  return (
    <div className="page-container">
      <Header />
      <Container className="my-5">
        <h2 className="text-center mb-5 fw-bold">오늘 어떤 메뉴를<br />먹을 예정인가요?</h2>
        <Row xs={1} md={2} lg={5} className="g-4 justify-content-center">
          {menuData.map((menu, index) => (
            <Col key={index}>
              <MenuCard
                title={menu.title}
                items={menu.items}
                onClick={() => handleMenuClick(menu.title)}
                isSelected={selectedMenu === menu.title}
              />
            </Col>
          ))}
        </Row>
        <div className="d-flex justify-content-center mt-5">
          <Button variant="primary" size="lg" onClick={handleSubmit} disabled={!selectedMenu}>
            선택 완료
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default MenuSelectionPage;