function setup() {
    canvas = createCanvas(700, 500);
    canvas.position(970, 230);

    video = createCapture(VIDEO)
    video.size(700, 500)
    video.position(100, 230)

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {

    console.log("Pose Net Initialized");
}

function gotPoses(results) {

    if (results.length > 0) {
        console.log(results);
    }
}

function draw(){

background('#a1a1a1')
}
