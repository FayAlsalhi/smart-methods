import sounddevice as sd
import numpy as np
import cohere
from TTS.api import TTS
import scipy.io.wavfile as wavfile
from faster_whisper import WhisperModel

# --- General Settings ---
FS = 16000  # Sampling rate
DURATION = 5  # Duration in seconds
COHERE_API_KEY = "لا تتم مشاركته"  # Replace with your actual API key

# --- Record Audio from Microphone ---
def record_audio(duration=DURATION, fs=FS):
    print("🎙️ Recording started... Speak now")
    recording = sd.rec(int(duration * fs), samplerate=fs, channels=1, dtype='int16')
    sd.wait()
    print("✅ Recording finished")
    return np.squeeze(recording)

# --- Save Audio to WAV File ---
def save_wav(data, filename="output.wav", fs=FS):
    wavfile.write(filename, fs, data)

# --- Transcribe Audio to Text ---
def transcribe_with_whisper(filename="output.wav"):
    model = WhisperModel("base", compute_type="int8")
    segments, info = model.transcribe(filename, language="en")
    text = "".join([segment.text for segment in segments])
    print("📝 Transcribed text:", text)
    return text

# --- Generate Response with Cohere ---
def generate_response(prompt):
    co = cohere.Client(COHERE_API_KEY)
    response = co.chat(
        message=prompt,
        model="command-r-plus",  # Recommended English model from Cohere
        preamble="You are a helpful assistant. Reply clearly and concisely."
    )
    print("🤖 Response:", response.text)
    return response.text

# --- Speak Text with TTS ---
def speak(text):
    tts = TTS(model_name="tts_models/en/ljspeech/tacotron2-DDC", progress_bar=False, gpu=False)
    audio = tts.tts(text)
    sd.play(audio, samplerate=24000)
    sd.wait()

# --- Main Workflow ---
def main():
    audio = record_audio()
    save_wav(audio)
    transcribed_text = transcribe_with_whisper()
    if transcribed_text.strip():
        response = generate_response(transcribed_text)
        speak(response)

# --- Run the Program ---
if __name__ == "__main__":

