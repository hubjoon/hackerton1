import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <img src="./사진.jpg" alt="M.int icon" className="mint-icon" />
        <div className="header-text">
          <h1>M.int</h1>
          <p>올바른 복지를 말하다.</p>
        </div>
      </header>
      <main className="main-content">
        <img src="./사진.jpg" alt="Large M.int icon" className="large-mint-icon" />
        <h2>민트에 오신 것을 환영합니다!</h2>
        <p>민트는 용인시 노인분들과 함께하는<br /> 노인 복지플랫폼 입니다.</p>
        <p className="search-instruction">검색어를 통해 AI 서비스를 이용</p>
        <div className="search-container">
          <input type="text" placeholder="검색어를 입력해주세요" className="search-input" />
          <button type="button" id="search_btn">🔎</button>
          <button type="button" className="record-btn" onClick={startRecord}>⏺️</button>
          <button type="button" className="record-btn" onClick={endRecord}>🛑</button>
        </div>
      </main>
      <div className="ad-content">
        <h3>병원광고?</h3>
      </div>
    </div>
  );
}

function startRecord() {
  console.log('Recording started');
  // 여기에 녹음 시작 로직을 추가하세요
}

function endRecord() {
  console.log('Recording stopped');
  // 여기에 녹음 종료 로직을 추가하세요
}

export default App;
