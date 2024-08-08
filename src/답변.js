import React, { useState } from 'react';
import './답변.css';

function CombinedComponent() {
    const [loading, setLoading] = useState(false);
    const [searchComplete, setSearchComplete] = useState(false);

    const handleSearch = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSearchComplete(true);
        }, 2000);
    };

    const handleMicClick = () => {
        console.log('Mic button clicked!');
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };
    const handleHomeButtonClick = () => {
        setSearchComplete(false);
    };

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
                {loading ? (
                    <div className="loading-spinner"></div>
                ) : searchComplete ? (
                    <>
                        <div className="icon-and-bubble">
                            <img src="./사진.jpg" alt="Large M.int icon" className="large-mint-icon postloading-large-mint-icon" />
                            <div className="bubble">
                                지난주 발표된 7월 미국 고용·제조업 지표가 불러일으킨 미 경기 침체 우려가 주말 사이 눈덩이처럼 불어나 국내 증시를 덮쳤다. 코스피가 5일 미국발 경기 침체 공포로 8.77% 폭락하면서 역대 최대 하락폭을 기록했다
                            </div>
                        </div>
                        <div className="button-container">
                            <button className="home-button" onClick={handleHomeButtonClick}>첫 화면으로</button>
                        </div>
                    </>
                ) : (
                    <div className="welcome-container">
                        <img
                            src="./사진.jpg"
                            alt="Large M.int icon"
                            className="large-mint-icon preloading-large-mint-icon"
                        />
                        <div className="welcome-text">
                            <h2>민트에 오신 것을 <br />환영합니다!</h2><br></br>
                            <p>민트는 용인시 노인분들과 함께하는 노인 복지플랫폼 입니다.</p><br></br>
                        </div>
                    </div>
                )}


                {!loading && !searchComplete && (
                    <>
                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="검색어를 입력해주세요"
                                className="search-input"
                                onKeyDown={handleKeyDown}
                            />
                            <button onClick={handleSearch} className="search-button">검색</button>
                            <button onClick={handleMicClick} className="microphone-button">
                                <span>🎙</span>
                            </button>
                        </div>
                        <p className="search-instruction">검색어를 통해 AI 서비스를 이용</p>
                    </>
                )}
            </main>
        </div>
    );
}

export default CombinedComponent;