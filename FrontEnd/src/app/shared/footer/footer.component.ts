import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @ViewChild('audioPlayer', {static: true}) audioPlayer!: ElementRef;
  isMuted: boolean = false;

  constructor(){}

  toggleSound(){
    const audioPlayer = this.audioPlayer.nativeElement;
    if(this.isMuted){
      audioPlayer.play();
    }else{
      audioPlayer.pause();
    }
    this.isMuted = !this.isMuted;
  }
}
