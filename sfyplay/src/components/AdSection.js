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