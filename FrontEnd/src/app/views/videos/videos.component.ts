import { Component } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {
  videos = [
    { url: '/assets/videos/Nano.mp4'},
    { url: '/assets/videos/Fushi.mp4'},
    { url: '/assets/videos/Vane.mp4'},
    { url: '/assets/videos/Des.mp4'},
    { url: '/assets/videos/Gemma&Busy.mp4'},
    { url: '/assets/videos/Maite, Cristian y Josep.mp4'},
    { url: '/assets/videos/Sproks&Fer.mp4'},   
    
  ];

  
  isModalOpen = false;
  selectedVideo: any;

  togglePlay(video: any): void {
    const videoElement = document.getElementById(video.url) as HTMLVideoElement;

    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  }

  openModal(video: any): void {
    this.selectedVideo = video;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.selectedVideo = null;
    this.isModalOpen = false;
  }

  isVideoHorizontal(video: any): boolean {   
    return video.orientation === 'horizontal'; 
  }
}


