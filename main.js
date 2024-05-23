// aula 1
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
});

function takeSelfie(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfieImage" src="'+data_uri+'"/>';
    }); 
}


var SpeechRecognition = window.webkitSpeechRecognition;


var recognition = new SpeechRecognition();


function Start(){
    document.getElementById('textbox').innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content)
    if (content =="Hello World." || content =="Take a photo.")
        {
            console.log("tire minha selfie funcionou?")
            speak()
            
        }
    document.getElementById('textbox').innerHTML = content;
    Webcam.attach('#camera')
}


//aula 2

function speak(){
    var synth = window.speechSynthesis;
    speakData = "Tirando sua foto em cinco segundos"
    var utterThis = new SpeechSynthesisUtterance (speakData);
    synth.speak (utterThis) ;

    setTimeout(function()
    {
        takeSelfie();
        save();
    }, 5000);
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfieImage").src ;
    link.href = image;
    link.click();
}
