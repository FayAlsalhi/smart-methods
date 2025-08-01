# 🎙️ Voice AI Assistant

An intelligent voice assistant that listens to your voice, transcribes it, generates a smart reply using AI, and speaks it back to you — all in real-time!

---

## 🚀 Features

- 🎤 Record voice input via microphone  
- ✍️ Transcribe speech to text using `faster-whisper`  
- 🤖 Generate AI-powered responses using `Cohere`  
- 🔊 Convert text responses to speech with `TTS`  

---

## 🛠️ Tech Stack

| Feature        | Library / Tool             |
|----------------|----------------------------|
| Audio Capture  | `sounddevice`              |
| Speech-to-Text | `faster-whisper`           |
| AI Chat Model  | `Cohere`                   |
| Text-to-Speech | `TTS` (Coqui AI)           |
| Audio Saving   | `scipy.io.wavfile`         |

---

## 📦 Installation

```bash
git clone https://github.com/YOUR_USERNAME/voice-ai-assistant.git
cd voice-ai-assistant

# Create and activate your environment
conda create -n voice-ai python=3.10 -y
conda activate voice-ai

# Install required packages
pip install sounddevice numpy scipy cohere TTS faster-whisper

