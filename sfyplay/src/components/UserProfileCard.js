// import React from 'react';
// import { Card, Badge } from 'react-bootstrap';

// function UserProfileCard() {
//   // 더미 데이터
//   const userName = "내나님";
//   const campus = "서울3반";
//   const userRank = "GOLD";
//   const userCoin = 30;

//   return (
//     <Card className="text-center p-3 shadow-sm" style={{ backgroundColor: '#fff8e1', border: 'none' }}>
//       <Card.Body>
//         <p className="mb-1 text-muted small">예측의 지배자 / {campus}</p>
//         <Card.Title className="mb-2 fw-bold fs-4">{userName}</Card.Title>
//         <Badge bg="warning" className="mb-3 px-3 py-2 fw-bold text-dark">{userRank} 등급</Badge>
//         <div className="d-flex align-items-center justify-content-center">
//           <span className="fw-bold fs-5 me-2">{userCoin}</span>
//           <img src="https://www.flaticon.com/svg/static/icons/svg/1781/1781747.svg" alt="coin icon" style={{ width: '25px', height: '25px' }} />
//         </div>
//         <Card.Link href="#previous-betting" className="mt-3 d-block text-primary small">
//           지난 베팅 내역 보기
//         </Card.Link>
//       </Card.Body>
//     </Card>
//   );
// }

// export default UserProfileCard;

// ...existing code...
import React from 'react';

export default function UserProfileCard({ user = {}, style = {} }) {
  const s = {
    card: {
      background: '#ffd6db',
      borderRadius: 14,
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      boxShadow: '0 6px 12px rgba(0,0,0,0.04)',
      ...style.card,
    },
    meta: { fontSize: 15, color: '#6b6b6b' },
    name: { fontSize: 30, fontWeight: 800 },
    coinWrap: {
      marginTop: 8,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      justifyContent: 'space-between',
    },
    coin: {
      fontSize: 28,
      fontWeight: 800,
      color: '#333',
    },
    smallBtn: {
      fontSize: 12,
      color: '#777',
      background: 'transparent',
      border: 'none',
    },
  };

  const { name = '나나 님', campus = '서울3반', level = 'GOLD', coins = 30 } = user;

  return (
    <div style={s.card}>
      <div style={s.meta}>예측의 지배자 / {campus}</div>
      <div style={s.name}>{name}</div>
      <div style={{ fontSize: 12, color: '#b24f4f' }}>{level}(등급)</div>
      <div style={s.coinWrap}>
        <div style={s.coin}>{coins} ◑</div>
        <button style={s.smallBtn}>지난 베팅 내역 보기</button>
      </div>
    </div>
  );
}
// ...existing code...