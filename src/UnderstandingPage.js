import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';

function UnderstandingPage() {
    const navigate = useNavigate();
    const [resp, setResp] = useState("");
    const [isRecording, setIsRecording] = useState(false);
    const [audioURL, setAudioURL] = useState("");
    const mediaRecorder = useRef(null);
    const audioChunks = useRef([]);

    const handleHomeClick = () => {
        navigate('/');
    };

    const startRecording = async () => {
        audioChunks.current = [];
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorder.current = new MediaRecorder(stream);
            mediaRecorder.current.ondataavailable = (event) => {
                audioChunks.current.push(event.data);
            };
            mediaRecorder.current.onstop = () => {
                const audioBlob = new Blob(audioChunks.current, { type: 'audio/webm' });
                const audioUrl = URL.createObjectURL(audioBlob);
                setAudioURL(audioUrl);
            };
            mediaRecorder.current.start();
            setIsRecording(true);
        } catch (err) {
            console.error("Error accessing microphone:", err);
        }
    };

    const stopRecording = () => {
        if (mediaRecorder.current) {
            mediaRecorder.current.stop();
            setIsRecording(false);
        }
    };

    const fileupload = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("upload", document.frm.upload.files[0]);
        axios.post("http://localhost:3000/fileUpload", formData)
            .then(function (resp) {
                setResp(resp.data.text);
            })
            .catch(function (error) {
                alert(error);
            })
    }

    return (
        <div className="understanding-page">
            <h1>음성 인식 페이지</h1>

            <h2>음성 녹음 및 다운로드</h2>
            <div>
                <button onClick={startRecording} disabled={isRecording}>
                    녹음 시작
                </button>
                <button onClick={stopRecording} disabled={!isRecording}>
                    녹음 중지
                </button>
                {audioURL && (
                    <div>
                        <audio src={audioURL} controls />
                        <br />
                        <a href={audioURL} download="recording.webm">
                            녹음 파일 다운로드
                        </a>
                    </div>
                )}
            </div>

            <hr />
            <h2>파일 업로드 및 텍스트 변환</h2>
            <form name='frm' onSubmit={fileupload} encType="multipart/form-data">
                <input type='file' name='upload' accept='*' />
                <input type='submit' value='업로드' />
            </form>
            <h3>결과: {resp}</h3>

            <button onClick={handleHomeClick}>홈으로 돌아가기</button>
        </div>
    );
}

export default UnderstandingPage;