import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/Menu.css'; // 메뉴 카드 전용 스타일 파일

function MenuCard({ title, items, onClick, isSelected }) {
  return (
    <Card
      className={`menu-card text-center h-100 ${isSelected ? 'border-primary shadow' : ''}`}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <Card.Body>
        <Card.Title className="fw-bold fs-5 mb-3">{title}</Card.Title>
        <ul className="list-unstyled mb-0">
          {items.map((item, index) => (
            <li key={index} className="text-muted small lh-sm">{item}</li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
}

export default MenuCard;
