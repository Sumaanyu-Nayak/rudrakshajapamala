/*Audio*/
var audio_Hindi = new Audio("Audio/congratulations_hindi.mp3");
var audio_English = new Audio("Audio/Congratulations_English.mp3");
var audio_Om = new Audio("Audio/Om_loop2.mp3");
var audio_Flute = new Audio("Audio/Flute.mp3");
var audio_MotherNature1 = new Audio("Audio/Mother_Nature_Part_1.mp3");
var audio_MotherNature2 = new Audio("Audio/Mother_Nature_part_2.mp3");
/*Audio*/
/*variables*/
var down = -8045;
var count = -1;
var total = 0;
var noOfTimes;
var noOfTime = 1;
var audioNo = 1;
var vol = 1;
var volu = 0.1;
var volum = 0.1;
/*variables*/
/*Html Elements*/
var mala = document.getElementById("rumala");
var malaText = document.getElementById("rumalatext");
var onceAgain = document.getElementById("again");
var change = document.getElementById("know");
var lang = document.getElementById("mylangswitch");
var countEl = document.getElementById("visitval");
var seticon = document.getElementById("setticon");
var settings = document.getElementById("settings");
var setPage = document.getElementById("set");
var cancel = document.getElementById("cancel");
var cuting = document.getElementById("cut");
var range = document.getElementById("noof");
var noofmalas = document.getElementById("noofmala");
var langOpt = document.getElementById("balangtext");
var audioLoo = document.getElementById("myonoffswitch");
var audioChange = document.getElementById("backsoddrop");
var setText = document.getElementById("basettext");
var messageOff = document.getElementById("messagecancel");
var completeMessage = document.getElementById("messagecontain");
var comShow = document.getElementById("mala");
var message = document.getElementById("message");
var volBox = document.getElementById("volbox");
var volrange = document.getElementById("vol");
var semaText = document.getElementById("basematext");
var sondText = document.querySelector(".basondtext");
var dropText = document.getElementById("badroptext");
var voText = document.getElementById("basevotext");
/*Html Elements*/

/*Message display off */
messageOff.addEventListener("click",()=>{
    completeMessage.style.display = "none";
    comShow.style.display = "block";

})
message.addEventListener("click",()=>{
    completeMessage.style.display = "none";
    comShow.style.display = "block";

})
/*Message display off */

/*checking background audio */
function checkAudio(){
    audioNo = audioChange.value;
    if(audioNo == 1 && audioLoo.checked == true){
        audio_Om.play();
        audio_Om.loop = true;
        audio_Om.volume = audio_Flute.volume || audio_MotherNature1.volume || audio_MotherNature2.volume;
        console.log(volu);
        audio_MotherNature1.pause();
        audio_MotherNature1.currentTime = 0;
        audio_MotherNature2.pause();
        audio_MotherNature2.currentTime = 0;
        audio_Flute.pause();
        audio_Flute.currentTime = 0;
    }
    else if(audioNo == 2 && audioLoo.checked == true){
        audio_Flute.play();
        audio_Flute.loop = true;
        audio_Flute.volume = audio_Om.volume || audio_MotherNature1.volume || audio_MotherNature2.volume;
        audio_Om.pause();
        audio_Om.currentTime = 0;
        audio_MotherNature1.pause();
        audio_MotherNature1.currentTime = 0;
        audio_MotherNature2.pause();
        audio_MotherNature2.currentTime = 0;
    }
    else if(audioNo == 3 && audioLoo.checked == true){
        audio_MotherNature1.play();
        audio_MotherNature1.volume = audio_Om.volume || audio_Flute.volume || audio_MotherNature2.volume;
        audio_MotherNature1.addEventListener("ended",()=>{
        audio_MotherNature2.play();
        audio_MotherNature2.loop = true;
        audio_MotherNature2.volume = audio_Om.volume || audio_Flute.volume || audio_MotherNature1.volume;
        })
        audio_Flute.pause();
        audio_Flute.currentTime = 0;
        audio_Om.pause();
        audio_Om.currentTime = 0;
    }
    else if(audioNo == 1 && audioLoo.checked == false){
        audio_Om.pause();
        audio_Om.currentTime = 0;
        console.log("stop");
    }
    else if(audioNo == 2 && audioLoo.checked == false){
        audio_Flute.pause();
        audio_Flute.currentTime = 0;
        console.log("stop");
    }
    else if(audioNo == 3 && audioLoo.checked == false){
        audio_MotherNature1.pause();
        audio_MotherNature1.currentTime = 0;
        audio_MotherNature2.pause();
        audio_MotherNature2.currentTime = 0;
        console.log("stop");
    }
}
/*checking background audio */

/*geting range value */
range.addEventListener("input",()=>{
    noofmalas.value = range.value;
    noOfTimes = range.value;
    show();
})

function show(){
    noOfTime = parseInt(noOfTimes);
}

noofmalas.addEventListener("input",()=>{
    if(noofmalas.value != ""){
        if(noofmalas.value< 100){
        range.value = noofmalas.value;
        noOfTimes = noofmalas.value;
        shows();}
        else if(noofmalas.value >= 100){
        noofmalas.value = 100
        range.value = 100;
        noOfTimes = 100;
        shows();
        }
    }
    else{
        range.value = 0;
        noOfTimes = 0;
        shows();
    }
})

function shows(){
    noOfTime = parseInt(noOfTimes);
}
/*geting range value */

/*getting vol range value*/
volrange.addEventListener("input",()=>{
    volBox.value = volrange.value;
    vol = volrange.value;
    showVol();
})

function showVol(){
    volu = (vol/100);
    audio_Om.volume = (vol/100);
    audio_Flute.volume = (vol/100);
    audio_MotherNature1.volume = (vol/100);
    audio_MotherNature2.volume = (vol/100);
    if(volu <= 0){
        audioLoo.checked = false;
        console.log(volu);
    }
    else{
        audioLoo.checked = true;
    }
}

volBox.addEventListener("input",()=>{
    if(volBox.value != ""){
        if(volBox.value< 100){
        volrange.value = volBox.value;
        vol = volBox.value;
        showsVol();}
        else if(volBox.value >= 100){
        volBox.value = 100
        volrange.value = 100;
        vol = 100;
        showsVol();
        }
    }
    else{
        volrange.value = 0;
        vol = 0;
        showsVol();
    }
})

function showsVol(){
    volu = (vol/100);
    audio_Om.volume = (vol/100);
    audio_Flute.volume = (vol/100);
    audio_MotherNature1.volume = (vol/100);
    audio_MotherNature2.volume = (vol/100);
    if(volu <= 0){
        audioLoo.checked = false;
    }
    else{
        audioLoo.checked = true;
    }
}
/*getting vol range value*/

/*opening settings */
seticon.addEventListener("click", () => {
    settings.style.display= "flex";
    settings.style.transition = "display 1s";
    cuting.style.display = "flex";
})
setText.addEventListener("click", () => {
    settings.style.display= "flex";
    settings.style.transition = "display 1s";
    cuting.style.display = "flex";
})

cancel.addEventListener("click",()=>{
    settings.style.display = "none";
})
cuting.addEventListener("click",()=>{
    settings.style.display = "none";
})
/*opening settings */

/*checking lang options*/
function checkLang(){
if(lang.checked == true){
   document.getElementById("clickme").innerHTML = "Click here to start the japa";
   langOpt.innerHTML = "Language: ";
   again.innerHTML = "Once again";
   change.innerHTML = "<b>You have done </b><span id='count'>"+count+"</span><b> beads</b><br><span class='congo' id='congo'></span>";
   mala.onclick = englishJapa;
   semaText.innerHTML = "‣⩥<u>Number of Mala's:</u>";
   sondText.innerHTML = "‣⩥<u>Background Sound:</u>";
   dropText.innerHTML = "‣⩥<u>Choose Audio:</u>";
   voText.innerHTML = "‣⩥<u>Volume Control:</u>";
}
else if(lang.checked == false){
    document.getElementById("clickme").innerHTML = "जप शुरू करने के लिए यहाँ click करें";
    langOpt.innerHTML = "भाषा: ";
    again.innerHTML = "एक और बार";
    change.innerHTML = "<b>आप ने किये </b><span id='count'>"+count+"</span><b> नाम जप</b><br><span class='congo' id='congo'></span>";
    mala.onclick = hindiJapa;
    semaText.innerHTML = "‣⩥<u>माला संख्या:</u>";
    sondText.innerHTML = "‣⩥<u>पृष्ठभूमि ध्वनि:</u>";
    dropText.innerHTML = "‣⩥<u>ध्वनि प्रकार:</u>";
    voText.innerHTML = "‣⩥<u>ध्वनि नियंत्रण:</u>";
}
}
/*checking lang options*/

/*hindi lang function*/
function hindiJapa(){
    document.getElementById("clickme").style.display = "none";
    count++;
    total++;
    change.style.opacity ="1";
    change.style.transition ="0.5s";
    malaText.style.fontSize = "16px";
   if (count >= 108 && total==(108*noOfTime)+(noOfTime-(noOfTime-1))){
       count = 108;
       change.innerHTML = "<b>आप ने किये </b><span id='count'>"+count+"</span><b> नाम जप</b><br><span class='congo' id='congo'></span>";
       document.getElementById("count").innerHTML = count;
       setTimeout(() => {
            audio_Hindi.play();
            audio_Om.pause();
            audio_Om.currentTime = 0;
            audio_MotherNature1.pause();
            audio_MotherNature1.currentTime = 0;
            audio_MotherNature2.pause();
            audio_MotherNature2.currentTime = 0;
            audio_Flute.pause();
            audio_Flute.currentTime = 0;
            document.getElementById("congo").innerHTML += "<b> बधाई हो! आप ने "+noOfTime+" पूरी माला जप ली है </b><br>";
            document.getElementById("congo").innerHTML += "<b> और एक बार करने के लिए निचे दीए बटन को दबाएँ</b><br>";
            document.getElementById("congo").innerHTML += "<b> सनातन धर्म को नज़दिक से जानने के लिए <span class='referal' onclick='Redirect()'>Sanātana Dharma Saṁskara<sup>©</sup></span> पर click करें </b>";
            document.getElementById("congo").style.opacity = "1";
            document.getElementById("congo").style.transition = "0.5s";
        }, 100);
        vibrate(300, 100, 200, 50, 300);
        onceAgain.style.display = "block"
       onceAgain.style.opacity = "1";
       onceAgain.style.transition = "10s";
    }
    else if(count >=108 && total < (108*noOfTime)+noOfTime){
        count = 0;
        document.getElementById("count").innerHTML = "108";
        down = -7970;
        vibrate(300, 100, 200, 50, 300);
    }
   else if(count < 108){       
       document.getElementById("count").innerHTML = count;
       down = down + 75;
       mala.style.backgroundPositionY = down+"px";
       mala.style.transition="0.5s";
       vibrate(20);
   }
}
/*hindi lang function*/
/*english lang function*/
function englishJapa(){
    count++;
    total++;
    document.getElementById("clickme").style.display = "none";
    change.style.opacity ="1";
    change.style.transition ="opacity 0.5s";
    malaText.style.fontSize = "15px";
   if (count >= 108 && total==(108*noOfTime)+(noOfTime-(noOfTime-1))){
       count = 108;
       change.innerHTML = "<b>You have done </b><span id='count'>"+count+"</span><b> beads</b><br><span class='congo' id='congo'></span>";
       document.getElementById("count").innerHTML = count;
       setTimeout(() => {
            audio_English.play();
             audio_Om.pause();
             audio_Om.currentTime = 0;
             audio_MotherNature1.pause();
             audio_MotherNature1.currentTime = 0;
             audio_MotherNature2.pause();
             audio_MotherNature2.currentTime = 0;
             audio_Flute.pause();
             audio_Flute.currentTime = 0;
            document.getElementById("congo").innerHTML += "<b> Congratulations! You have completed "+noOfTime+" Chanting rosary </b><br>";
            document.getElementById("congo").innerHTML += "<b> To do again click the button down below</b><br>";
            document.getElementById("congo").innerHTML += "<b> To understand Sanātana Dharma clearly, click on <span class='referal' onclick='Redirect()'>Sanātana Dharma Saṁskara<sup>©</sup></span></b>";
            document.getElementById("congo").style.opacity = "1";
            document.getElementById("congo").style.transition = "0.5s";
       }, 100);
       vibrate(300, 100, 200, 50, 300);
       onceAgain.style.display = "block";
       onceAgain.style.opacity = "1";
       onceAgain.style.transition = "10s";
   }
   else if(count >=108 && total < (108*noOfTime)+noOfTime){
    count = 0;
    document.getElementById("count").innerHTML = "108";
    down = -7970;
    vibrate(300, 100, 200, 50, 300);
    }
   else if(count < 108){       
       
       document.getElementById("count").innerHTML = count;
       down = down + 75;
       mala.style.backgroundPositionY = down+"px";
       mala.style.transition="0.5s";
       vibrate(70);
       console.log(noOfTime);
   }
}
/*english lang function*/
/*vibrate*/
function vibrate(){
    window.navigator.vibrate(arguments);
}
/*reload*/
function rel(){
    window.location.reload();
}
/*redirect*/
function Redirect(){
    window.location="https://www.youtube.com/channel/UClR0WkRP5VRwx1PUqKFscFw/videos";
}