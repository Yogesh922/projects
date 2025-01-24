console.log('hello2')
console.log('yogesh')
let searchicon = document.getElementsByClassName('searchicon')
let songindex=0;
let search=document.getElementsByClassName('search')
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myplayer');
let audioElement= new Audio('songs/1.mp3');
let  dur =Array.from(document.getElementsByClassName('dur'))
let songitem=Array.from(document.getElementsByClassName('songitem'));
let songs =[
{songName:'serena safari',filePath:'1.mp3',coverPath:'crop_480x480_2518904.jpg'},  
{songName:'hum pagal nahin hai ',filePath:'05 Hum Pagal Nahin Hai - Humshakals [Himesh] 190Kbps.mp3',coverPath:'5c71a04b-35e2-4f05-9ecc-65193a005757.png'},  
{songName:'lets nacho',filePath:'Balma-Ghode-Pe-Kyu-Sawar-Hai_320(PaglaSongs).mp3',coverPath:'crop_480x480_2518904.jpg'},  
{songName:'ainsi baisi',filePath:'05 Hum Pagal Nahin Hai - Humshakals [Himesh] 190Kbps.mp3',coverPath:'crop_480x480_2518904.jpg'},   
 {songName:'balma-ghode pe kyu sawar hai',filePath:'320kbps_K&S 2016 - Lets Nacho.mp3',coverPath:'crop_480x480_2518904.jpg'},  
   {songName:'come check this',filePath:'Balma-Ghode-Pe-Kyu-Sawar-Hai_320(PaglaSongs).mp3',coverPath:'crop_480x480_2518904.jpg'},
 {songName:'KGF wolf sprint',filePath:'Balma-Ghode-Pe-Kyu-Sawar-Hai_320(PaglaSongs).mp3',coverPath:'crop_480x480_2518904.jpg'},
{songName:'come take this',filePath:'Balma-Ghode-Pe-Kyu-Sawar-Hai_320(PaglaSongs).mp3',coverPath:'crop_480x480_2518904.jpg'},   
   {songName:'tum mile dil khile',filePath:'Balma-Ghode-Pe-Kyu-Sawar-Hai_320(PaglaSongs).mp3',coverPath:'crop_480x480_2518904.jpg'},   

];

//event listner
songitem.forEach((element,i)=>{
  element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
  //  element.getElementsByClassName('images')[0].src = songs[i].coverPath;
  // audioElement[0].src=songs[i].filePath
  
});


audioElement.currentTime=0;
audioElement.addEventListener('ended',()=>{
  if (audioElement.currentTime=audioElement.duration){
    masterplay.innerText='play_circle'
    // play.innerText='play_circle'
    myprogressbar.value='0';
    audioElement.currentTime='0'
  }});
  

audioElement.addEventListener('timeupdate',()=>{
  console.log('timeupdate');
Progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
myprogressbar.value=Progress;

});
myprogressbar.addEventListener('change',()=>{
          audioElement.currentTime = (myprogressbar.value*audioElement.duration)/100
});
masterplay.addEventListener('click',()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
  audioElement.play();
masterplay.innerText="pause"
}
else{
  audioElement.pause()
  masterplay.innerText="play_circle";
  play.innerText!='pause';
  
};
});

const makeAllPlays=()=>{
  Array.from(document.getElementsByClassName('songitemplay material-symbols-outlined')).forEach((element)=>{
element.innerText='play_circle'
element.innerText!='pause'

  });
};


Array.from(document.getElementsByClassName('songitemplay material-symbols-outlined')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    console.log(e.target);
    makeAllPlays();
    songindex=parseInt(e.target.id)
e.target.innerText='pause';
e.target.innerText!='play_circle';
masterplay.innerText='pause';
masterplay.innerText!='play_circle'

audioElement.src=`songs/${songindex+1}.mp3`
audioElement.play()
// let duration=`songs/${index}.mp3`.duration
// console.log(duration)
if(audioElement.paused){
  e.target.innerText='play_circle'
}
else{
  e.target.innerText='pause'
}
});
document.getElementById('next').addEventListener('click',()=>{
  if(songindex>=9){
    songindex=0
  }
  else{
    songindex+=1;
  }
  masterplay.innerText='pause';
masterplay.innerText!='play_circle'

audioElement.src=`songs/${songindex+1}.mp3`
audioElement.play()
})
document.getElementById('previous').addEventListener('click',()=>{
  if(songindex<=0){
    songindex=0
  }
  else{
    songindex -=1;
  }
  masterplay.innerText='pause';
masterplay.innerText!='play_circle'

audioElement.src=`songs/${songindex+1}.mp3`
audioElement.play()
})
})

