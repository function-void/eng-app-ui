import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {
  @Input() inputVideoId: string = "";
  private youtubeApiLoaded = false;

  ngOnInit(): void {
    if (!this.youtubeApiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.youtubeApiLoaded = true;
    }
  }
}
