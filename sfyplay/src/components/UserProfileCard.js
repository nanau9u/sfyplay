
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