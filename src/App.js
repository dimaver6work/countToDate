import "./App.css";
import logo from "./mac.jpg";
import { useEffect, useState } from "react";
function App() {
  let countDate = new Date(2023, 6, 0, 0, 0, 0).getTime();
  let nowDate = new Date().getTime();
  let distance = countDate - nowDate;

  const [second, setSecond] = useState(distance);
  if (second > 0) {
    setInterval(setSecond, 1000, second - 1);
  }
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor(distance / oneDay);
  let hours = Math.floor((distance % oneDay) / oneHour);
  let minutes = Math.floor((distance % oneHour) / oneMinute);
  let seconds = Math.floor((distance % oneMinute) / 1000);

  return (
    <div className="wrapper">
      <div className="child">
        <img src={logo} alt="main" />
        <h1>Macbook Pro 16 M3</h1>
        <p className="text">
          Новый MacBook Air получил увеличенный дисплей 13,6-дюймов, выемку,
          плоские края и новые цветовые варианты Starlight и Midnight. Ноутбук
          оснащен зарядкой MagSafe, улучшенной камерой 1080p, двумя портами
          Thunderbolt 3, 3,5-миллиметровым разъемом для наушников с поддержкой
          высокоимпедансных наушников, четырьмя динамиками и многим другим.
        </p>
        <h2>Старт продаж</h2>

        <div className="counter">
          <div className="time">
            <p>{days}</p>
            <span>Days</span>
          </div>
          <div className="time">
            <p>{hours}</p>
            <span>Hours</span>
          </div>
          <div className="time">
            <p>{minutes}</p>
            <span>Minutes</span>
          </div>
          <div className="time">
            <p>{seconds}</p>
            <span>Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
