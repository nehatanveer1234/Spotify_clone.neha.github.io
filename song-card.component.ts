import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SongDataService } from '../../services/song-data.service';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent {
  @Input() public playlistThumbnail: string | undefined;
  @Input() public description: string | undefined
  @Input() public link!: string;
  @Input() public title: string | undefined
  @Input() public song_id!: string | number

  constructor(private router: Router, private sd: SongDataService) { }

  onNavigateToSong() {
  //  this.sd.songData.next();
    setTimeout(() => { }, 1000);
    this.router.navigateByUrl(`/song/${this.song_id}` ,{
      state:{
        
          thumbnail: this.playlistThumbnail,
          title: this.title,
          description: this.description,
          link: this.link,
      },
        });
      }
    }