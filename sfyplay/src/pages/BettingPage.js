import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import Header from '../components/Header';
import MenuCard from '../components/MenuCard';
import { useNavigate } from 'react-router-dom';

function BettingPage() {
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [bettingCoin, setBettingCoin] = useState(0);
  const availableCoin = 50; // 예시로 현재 보유 코인 설정

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

  const handleBettingChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0 && value <= availableCoin) {
      setBettingCoin(value);
    } else if (e.target.value === '') {
      setBettingCoin(0);
    }
  };

  const handleBettingSubmit = () => {
    if (selectedMenu && bettingCoin > 0) {
      // 예측 투표 및 배팅 정보 서버로 전송 로직 추가
      console.log(`예측 메뉴: ${selectedMenu}, 배팅 코인: ${bettingCoin}`);
      alert('베팅이 완료되었습니다!');
      navigate('/dashboard'); // 메인 대시보드 페이지로 이동
    } else if (!selectedMenu) {
      alert('예측 메뉴를 선택해주세요!');
    } else {
      alert('베팅할 코인을 입력해주세요!');
    }
  };

  return (
    <div className="page-container">
      <Header />
      <Container className="my-5">
        <h2 className="text-center mb-5 fw-bold">오늘 가장 인기가 있을 것 같은 메뉴를<br />예상해주세요!</h2>
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
        <div className="d-flex flex-column align-items-center mt-5">
          <InputGroup className="mb-3" style={{ maxWidth: '300px' }}>
            <InputGroup.Text className="fw-bold">베팅할 코인:</InputGroup.Text>
            <Form.Control
              type="number"
              min="0"
              max={availableCoin}
              value={bettingCoin}
              onChange={handleBettingChange}
              aria-label="Betting Coin"
              placeholder="코인 입력"
            />
            <InputGroup.Text>
              <span className="me-2">{availableCoin}</span>
              <img src="https://www.flaticon.com/svg/static/icons/svg/1781/1781747.svg" alt="coin icon" style={{ width: '18px', height: '18px' }} />
            </InputGroup.Text>
          </InputGroup>
          <div className="d-flex align-items-center mb-4">
            <span className="me-2 text-muted">현재 내 잔여 코인:</span>
            <span className="fw-bold me-2">{availableCoin - bettingCoin}</span>
            <img src="https://www.flaticon.com/svg/static/icons/svg/1781/1781747.svg" alt="coin icon" style={{ width: '18px', height: '18px' }} />
          </div>
          <Button variant="success" size="lg" onClick={handleBettingSubmit} disabled={!selectedMenu || bettingCoin <= 0}>
            베팅하기
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default BettingPage;