leftWristX = 0;
rightWristX = 0;
resultX = 0;
function setup(){
    canvas = createCanvas(700,450);
    canvas.position(600,225);
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(0,200);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background("#808080");
    textSize(resultX);
    fill("0080FF");
    text('Hello',50,300);
}
function modelLoaded(){
    console.log("PoseNet is Instalized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    resultX= leftWristX - rightWristX;
    resultX = floor(leftWristX - rightWristX);
    console.log("leftWristX = " + leftWristX + ",rightWristX = " + rightWristX + ",difference = " + resultX);
}