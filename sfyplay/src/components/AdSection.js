// import React from 'react';
// import { Card, Carousel } from 'react-bootstrap';

// function AdSection() {
//   // 더미 광고 데이터
//   const ads = [
//     {
//       id: 1,
//       image: 'https://via.placeholder.com/150x100?text=Your+Pet+Ad+Here',
//       text: '귀여운 우리집 댕댕이, 냠냠싸피가 응원해요!',
//     },
//     {
//       id: 2,
//       image: 'https://via.placeholder.com/150x100?text=New+Project+Ad+Here',
//       text: '새로운 프로젝트, [프로젝트명]! 지금 바로 확인하세요!',
//     },
//   ];

//   return (
//     <Card className="p-3 shadow-sm" style={{ backgroundColor: '#ffeded', border: 'none' }}>
//       <p className="mb-3 fw-bold text-center">여기에 광고를 넣어요</p>
//       <Carousel controls={false} indicators={false} interval={3000}>
//         {ads.map(ad => (
//           <Carousel.Item key={ad.id}>
//             <div className="d-flex flex-column align-items-center">
//               <img
//                 className="d-block w-75 mb-2 rounded"
//                 src={ad.image}
//                 alt={`Ad ${ad.id}`}
//                 style={{ objectFit: 'cover' }}
//               />
//               <p className="text-muted small text-center">{ad.text}</p>
//             </div>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//       <p className="mt-3 text-muted small text-center">광고 특징 스크롤을 따라온다</p>
//     </Card>
//   );
// }

// export default AdSection;

// ...existing code...
import React from 'react';

export default function AdSection({ style = {} }) {
  const s = {
    wrap: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 18,
      padding: 18,
      background: '#f6d9b8',
      boxShadow: '0 6px 14px rgba(0,0,0,0.04)',
      textAlign: 'center',
      color: '#6b4b3a',
      fontWeight: 700,
      ...style.wrap,
    },
    text: { transform: 'rotate(-90deg)', whiteSpace: 'nowrap' },
  };

  return (
    <div style={s.wrap}>
      <div>
        <div style={{ fontSize: 14, marginBottom: 6 }}>여기에</div>
        <div style={{ fontSize: 20 }}>광고를 넣어요</div>
      </div>
    </div>
  );
}
// ...existing code...