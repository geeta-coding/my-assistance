const startBtn = document.getElementById('start-btn');
const output = document.getElementById('output');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// Output voice ite aapn declare kely
function speak(text) {
  const speech = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(speech);
}

// Main logic mnje ite aaplyala kay out paut pahije aani aapn kay bolays out disl te  

recognition.onresult = function(event) {
  const transcript = event.results[0][0].transcript.toLowerCase();
  output.innerText = "You said: " + transcript;

  if (transcript.includes("hello")) {
    speak("Hi, how can I help you?");
  }
   else if (transcript.includes("time")) {
    const time = new Date().toLocaleTimeString();
    speak("The time is " + time);
  }
else if (transcript.includes("date")){
  const date =new Date().toLocaleDateString();
  speak("The date is"+ date);
}

   else if (transcript.includes("open google")) {
    speak("Opening Google");
    window.open("https://www.google.com", "_blank");
  } 
  else if (transcript.includes("open youtube")) {
    speak("Opening youtube");
    window.open("https://www.youtube.com", "_blank");}
  else if (transcript.includes("your name")) {
    speak("I am your voice assistant!");
  } 
  else if (transcript.includes("open instagram")){
    speak("opening instagram");
    window.open("https://www.instagram.com ","_blank");
  }
  else if(transcript.includes("open whatsapp")){
    speak("opening whatsapp");
    window.open("https://whatsapp.com","_blank");
  }
  else if (transcript.includes("open chrome")){
    speak("opening chrome");
    window.open("https://www.chrome.com","_blank");
  }
  else if (transcript.includes("play song")) {
  const audio = new Audio("song.mp3");
  audio.play();
  speak("Playing music");
}
else if (transcript.includes("search for")) {
  const query = transcript.replace("search for", "").trim();
  speak("Searching for " + query);
  window.open(`https://www.google.com/search?q=${query}`, "_blank");
}

else if (transcript.includes("search ")) {
  const query = transcript.replace("search ", "").trim();
  speak("Searching " + query);
  window.open(`https://www.youtube.com/search?q=${query}`, "_blank");
}


  else {
    speak("Sorry, I didn't understand that.");
  }

};

startBtn.addEventListener('click', () => {
  recognition.start();
});
