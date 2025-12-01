export default function Header({ showLoggedInLinks = false, style = {} }) {
  const s = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 28px',
      background: 'transparent',
      gap: 12,
      ...style.container,
    },
    logo: {
      fontSize: 34,
      fontWeight: 800,
      letterSpacing: -1,
    },
    nav: {
      display: 'flex',
      gap: 18,
      alignItems: 'center',
      color: '#333',
      opacity: 0.9,
    },
    right: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
    },
    campusBtn: {
      background: '#2f9d67',
      color: '#fff',
      padding: '6px 10px',
      borderRadius: 6,
      fontSize: 13,
    },
  };

  return (
    <header style={s.container}>
      <div style={s.logo}>오늘의 싸피밥</div>
      <nav style={s.nav}>
        <div>코인샵</div>
        <div>대시보드</div>
        <div>마이페이지</div>
      </nav>
      <div style={s.right}>
        <div style={s.campusBtn}>서울캠퍼스 ▾</div>
        {showLoggedInLinks && <div style={{ color: '#666' }}>로그아웃</div>}
      </div>
    </header>
  );
}


// export default Header;