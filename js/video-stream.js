class VideoStream {
  constructor() {
    
    this.stream = stream;
    const video = document.createElement("video");
    const canvas = document.createElement("canvas");
    this.canvas = canvas;
    video.addEventListener("playing", () => {
      // Use a 2D Canvas.
      this.canvas.width = this.video.videoWidth;
      this.canvas.height = this.video.videoHeight;

      this.update();
    });

    // The idea is to render the video from url to this video element and then to canvas
    video.src = "https://www.w3schools.com/html/mov_bbb.mp4";
    
    video.autoplay = true;
    this.video = video;
    this.ctx = this.canvas.getContext('2d');

    // This will be picked up by mediaDevices file 
    // and we will get it as ouput in the virtual webcam
    this.outputStream = this.canvas.captureStream();
  }

  update() {
    // Use a 2D Canvas
    this.ctx.filter = 'invert(1)';

    // draw the video to canvas
    this.ctx.drawImage(this.video, 0, 0);

    // draw text on top of the video
    this.ctx.fillStyle = '#ff00ff';
    this.ctx.textBaseline = 'top';
    this.ctx.fillText('Virtual', 10, 10);

    requestAnimationFrame(() => this.update());
  }
}

export { VideoStream }