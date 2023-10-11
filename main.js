song = "";

function preload()
{
    song = loadSound("music.mp3")
}

function setup() {
    canvas = createCavas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    Image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
}