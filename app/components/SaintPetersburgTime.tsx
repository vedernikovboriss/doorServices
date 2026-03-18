'use client';

import { useState, useEffect } from 'react';

const SAINT_PETERSBURG_TZ = 'Europe/Moscow';

function formatTime(date: Date): string {
  return date.toLocaleTimeString('ru-RU', {
    timeZone: SAINT_PETERSBURG_TZ,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
}

export default function SaintPetersburgTime() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const tick = () => setTime(formatTime(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!time) return <span className="block">—, Санкт-Петербург</span>;

  return (
    <span className="block">
      {time}, Санкт-Петербург
    </span>
  );
}
