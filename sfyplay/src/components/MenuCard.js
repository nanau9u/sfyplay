// import React from 'react';
// import { Card } from 'react-bootstrap';
// import '../styles/Menu.css'; // 메뉴 카드 전용 스타일 파일

// function MenuCard({ title, items, onClick, isSelected }) {
//   return (
//     <Card
//       className={`menu-card text-center h-100 ${isSelected ? 'border-primary shadow' : ''}`}
//       onClick={onClick}
//       style={{ cursor: onClick ? 'pointer' : 'default' }}
//     >
//       <Card.Body>
//         <Card.Title className="fw-bold fs-5 mb-3">{title}</Card.Title>
//         <ul className="list-unstyled mb-0">
//           {items.map((item, index) => (
//             <li key={index} className="text-muted small lh-sm">{item}</li>
//           ))}
//         </ul>
//       </Card.Body>
//     </Card>
//   );
// }

// export default MenuCard;

// ...existing code...
import React from 'react';

export default function MenuCard({ title, items = [], style = {} }) {
  const s = {
    card: {
      background: '#fff',
      borderRadius: 12,
      padding: 12,
      border: '1.5px solid #e7e7e7',
      minHeight: 200,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style.card,
    },
    title: { textAlign: 'center', fontWeight: 700, fontSize: 16 },
    items: {
      fontSize: 13,
      color: '#333',
      lineHeight: 1.4,
      overflowY: 'auto',
      flex: 1,
    },
  };

  return (
    <div style={s.card}>
      <div style={s.title}>{title}</div>
      <div style={s.items}>
        {items.map((it, i) => (
          <div key={i}>{it}</div>
        ))}
      </div>
    </div>
  );
}
// ...existing code...