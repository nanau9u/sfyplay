// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import Header from '../components/Header';
// import UserProfileCard from '../components/UserProfileCard';
// import AdSection from '../components/AdSection';
// import CountdownTimer from '../components/CountdownTimer';
// import MenuCard from '../components/MenuCard'; // 메뉴 카드 재활용
// import BettingResultSection from '../components/BettingResultSection';

// function MainDashboard() {
//   const menuData = [ // 결과 표시용 메뉴 데이터 (실제로는 결과 값으로 대체)
//     { title: '한식', items: ['치즈부대찌개', '수수밥', '건새우무추전', '도토리묵무침', '미역초무침', '깍두기', '유자차'] },
//     { title: '일품', items: ['치즈부대찌개', '수수밥', '건새우무추전', '도토리묵무침', '미역초무침', '깍두기', '유자차'] },
//     { title: '도시락', items: ['치즈부대찌개', '수수밥', '건새우무추전', '도토리묵무침', '미역초무침', '깍두기', '유자차'] },
//     { title: '브런치', items: ['치즈부대찌개', '수수밥', '건새우무추전', '도토리묵무침', '미역초무침', '깍두기', '유자차'] },
//     { title: '샐러드', items: ['치즈부대찌개', '수수밥', '건새우무추전', '도토리묵무침', '미역초무침', '깍두기', '유자차'] },
//   ];

//   return (
//     <div className="page-container">
//       <Header showLoggedInLinks={true} /> {/* 로그인 후 헤더 링크 표시 */}
//       <Container className="my-5">
//         <Row className="g-4">
//           {/* 좌측 광고 및 사용자 정보 섹션 */}
//           <Col lg={4}>
//             <div className="d-flex flex-column gap-4">
//               <UserProfileCard />
//               <AdSection />
//             </div>
//           </Col>

//           {/* 우측 메인 대시보드 섹션 */}
//           <Col lg={8}>
//             <div className="d-flex flex-column gap-4">
//               {/* 베팅 결과 및 발표 슬라이드 */}
//               <div style={{ height: '150px' }}> {/* 높이 고정 */}
//                 <BettingResultSection />
//               </div>

//               {/* 퇴실까지 초시계 */}
//               <CountdownTimer />

//               {/* 오늘의 메뉴 결과 */}
//               <div>
//                 <h4 className="fw-bold mb-4 text-start">11월 23일의 메뉴</h4>
//                 <Row xs={1} md={2} xl={5} className="g-3">
//                   {menuData.map((menu, index) => (
//                     <Col key={index}>
//                       {/* MenuCard는 단순 표시용으로 onClick 없음 */}
//                       <MenuCard title={menu.title} items={menu.items} />
//                     </Col>
//                   ))}
//                 </Row>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default MainDashboard;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import UserProfileCard from '../components/UserProfileCard';
import AdSection from '../components/AdSection';
import CountdownTimer from '../components/CountdownTimer';
import MenuCard from '../components/MenuCard';
import BettingResultSection from '../components/BettingResultSection';

function MainDashboard() {
  const menuData = [
    { title: '한식', items: ['치즈부대찌개', '수수밥', '건새우무추전', '도토리묵무침', '미역초무침', '깍두기', '유자차'] },
    { title: '일품', items: ['치즈부대찌개', '수수밥', '건새우무추전', '도토리묵무침', '미역초무침', '깍두기', '유자차'] },
    { title: '도시락', items: ['치즈부대찌개', '수수밥', '건새우무추전', '도토리묵무침', '미역초무침', '깍두기', '유자차'] },
    { title: '브런치', items: ['치즈부대찌개', '수수밥', '건새우무추전', '도토리묵무침', '미역초무침', '깍두기', '유자차'] },
    { title: '샐러드', items: ['치즈부대찌개', '수수밥', '건새우무추전', '도토리묵무침', '미역초무침', '깍두기', '유자차'] },
  ];

  const adSectionStyles = {
    height: 'calc(100vh - 200px)',
    maxHeight: '85vh',
    overflowY: 'auto',
    borderRadius: 18,
  };

  return (
    <div className="page-container">
      <Header showLoggedInLinks={true} />
      
      <Container fluid className="my-5">
        <Row className="g-4">
          
          {/* 왼쪽 md2 - 세로 긴 광고 */}
          <Col md={2}>
            <div style={adSectionStyles}>
              <AdSection />
            </div>
          </Col>

          {/* 가운데 md8 - 메인 컨텐츠 */}
          <Col md={8}>
            <div className="d-flex flex-column gap-4">
              
              {/* UserProfileCard와 BettingResultSection - 가로 나란히 */}
              <Row className="g-3">
                <Col xs={12} sm={5}>
                  <UserProfileCard />
                </Col>
                <Col xs={12} sm={7}>
                  <div style={{ height: '100%' }}>
                    <BettingResultSection />
                  </div>
                </Col>
              </Row>

              {/* CountdownTimer */}
              <div>
                <CountdownTimer />
              </div>

              {/* MenuCard 섹션 */}
              <div>
                <h4 className="fw-bold mb-4 text-start">11월 23일의 메뉴</h4>
                <Row xs={1} md={2} xl={5} className="g-3">
                  {menuData.map((menu, index) => (
                    <Col key={index}>
                      <MenuCard title={menu.title} items={menu.items} />
                    </Col>
                  ))}
                </Row>
              </div>

            </div>
          </Col>

          {/* 오른쪽 md2 - 비어있음 */}
          <Col md={2} />

        </Row>
      </Container>
    </div>
  );
}

export default MainDashboard;