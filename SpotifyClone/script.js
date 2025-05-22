
console.log("Welcome to Spotify");

//initalize the variables
let songIndex = 0;
let audioElement = new Audio('./songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [ 
    {songName: "Warriyo - Mortals (feat. Laura)", filePath: "./songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "./songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Deaf KEV - Invincible", filePath: "./songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE", filePath: "./songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "./songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "./songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Tujhe Dekha - Salam-e-Ishq", filePath: "./songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Tujhme Rab - Salam-e-Ishq", filePath: "./songs/8.mp3", coverPath: "covers/8.jpg"}
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', () => {
    //update Seekbar
    Progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = Progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    });
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    });
})

document.getElementById('next').addEventListener('click', () => {
    if(songIndex >= 7){
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }

    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
   masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', () => {
    if(songIndex <= 0){
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }

    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})