import { Component } from '@angular/core';
import { SongDataService } from '../services/song-data.service';
import { ActivatedRoute, Router, RouteReuseStrategy } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent {
  public songData!: any;
  constructor(private sd: SongDataService ,private router:Router,
  private activatedRoute: ActivatedRoute ) { }
  
  ngOnInit(): void {
   
    this.activatedRoute.params.pipe(map(d => window.history.state)).subscribe(data => (this.songData = data));
    if(!this.songData === undefined){
      this.router.navigate(['/']);
      window.alert(`No song availabe for selected album with ${this.songData.id}`);
  
     }

   // this.sd.songData.subscribe((data) => {
     // this.songData = data;
  //});
}
} 