noseX = 0
noseY = 0
noseX1 = 0
noseY1 = 0

function preload(){
    clownNose = loadImage('https://i.postimg.cc/L5xXz9r5/clown-nose-removebg-preview.png')
    mustache = loadImage('https://i.postimg.cc/FzdqxG6S/mustache-removebg-preview.png')
}

function setup() {
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log("poseNet is Intiainized");
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x - 30
        noseY = results[0].pose.nose.y - 20
        noseX1 = results[0].pose.nose.x - 30
        noseY1 = results[0].pose.nose.y
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY); 
    }
}

function draw() {
    image(video, 0,0,400,300);

    fill(65, 3, 252);
    stroke(0, 0, 0);
    //circle(noseX, noseY, 20);

    image(mustache, noseX1, noseY1, 70, 50 );
    image(clownNose, noseX, noseY, 70, 50);
}

function take_snapshot() {
    save('myFilterImage.png');
}