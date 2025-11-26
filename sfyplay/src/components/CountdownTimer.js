import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const calculateTimeLeft = () => {
    // 퇴근 시간 (예: 오늘 오후 6시)
    const 퇴근시간 = new Date();
    퇴근시간.setHours(18, 0, 0, 0);

    const now = new Date();
    const difference = 퇴근시간.getTime() - now.getTime();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval].toString().padStart(2, '0')}
        {interval === 'hours' ? '시 ' : interval === 'minutes' ? '분 ' : '초'}
      </span>
    );
  });

  return (
    <div
      className="text-white d-flex align-items-center justify-content-center p-4 rounded-3 shadow-sm"
      style={{ backgroundColor: '#ff6b6b', height: '150px' }}
    >
      <h3 className="fw-bold mb-0 text-center">
        퇴실까지 {timerComponents.length ? timerComponents : <span>00시 00분 00초</span>}
      </h3>
    </div>
  );
}

export default CountdownTimer;


