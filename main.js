function c() {
    console.log("popoopop");
    var canvas=document.getElementById("camImg");
    var video=document.getElementById("cam");
    var ctx=canvas.getContext("2d");
    ctx.drawImage(video,0,0,650,500);
}

function start() {
    var video=document.getElementById("cam");
    navigator.mediaDevices.getUserMedia({video:true,facingMode: { exact: 'environment' }})
    .then(stream=>{
        video.srcObject=stream;
        document.getElementById("click").style.visibility="visible";
    }).catch(function(){
       console.log("Something Went Wrong");
    });
}
