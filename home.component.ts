import { Component } from '@angular/core';
import { SearchBarService } from '../services/searchbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(private sb:SearchBarService ,private router:Router){}
public browseAll=[
  { bgColor:'red',color:'white', title:'made for you',},
  { bgColor:'blue',color:'white', title:'charts' },
  { bgColor:'purple',color:'white', title:'livestream' },
  { bgColor:'orange',color:'white', title:'punjabi' },
  { bgColor:'white',color:'white', title:'tamil' },
  { bgColor:'yellow',color:'white', title:'Telugu' },
  { bgColor:'green',color:'white', title:'hip-hop' },
  { bgColor:'red',color:'white', title:'workout' },
  { bgColor:'red',color:'white', title:'workout' },
]


public songCards=[
  { song_id:1,
  thumbnail:
  'https://www.google.com/search?q=song&rlz=1C1ONGR_enIN1026IN1026&oq=song&gs_lcrp=EgZjaHJvbWUyDggAEEUYJxg5GIAEGIoFMgoIARAAGLEDGIAEMgoIAhAAGLEDGIAEMg0IAxAAGIMBGLEDGIAEMgoIBBAAGLEDGIAEMgoIBRAAGLEDGIAEMhAIBhAAGIMBGLEDGIAEGIoFMgYIBxBFGD3SAQgxNjkxajBqNKgCCLACAQ&sourceid=chrome&ie=UTF-8#',
  title:'best songs',
  description:'energetic song',
  song_link:'pro\assets\dangerous.apk',
},
{
  song_id:2,
  thumbnail:
  'https://www.google.com/search?q=song&rlz=1C1ONGR_enIN1026IN1026&oq=song&gs_lcrp=EgZjaHJvbWUyDggAEEUYJxg5GIAEGIoFMgoIARAAGLEDGIAEMgoIAhAAGLEDGIAEMg0IAxAAGIMBGLEDGIAEMgoIBBAAGLEDGIAEMgoIBRAAGLEDGIAEMhAIBhAAGIMBGLEDGIAEGIoFMgYIBxBFGD3SAQgxNjkxajBqNKgCCLACAQ&sourceid=chrome&ie=UTF-8#',
  title:'best songs',
  description:'energetic song',
  song_link:'pro\assets\dangerous.apk',
},
{
  song_id:3,
  thumbnail:
  'https://www.google.com/search?q=song&rlz=1C1ONGR_enIN1026IN1026&oq=song&gs_lcrp=EgZjaHJvbWUyDggAEEUYJxg5GIAEGIoFMgoIARAAGLEDGIAEMgoIAhAAGLEDGIAEMg0IAxAAGIMBGLEDGIAEMgoIBBAAGLEDGIAEMgoIBRAAGLEDGIAEMhAIBhAAGIMBGLEDGIAEGIoFMgYIBxBFGD3SAQgxNjkxajBqNKgCCLACAQ&sourceid=chrome&ie=UTF-8#',
  title:'best songs',
  description:'energetic song',
  song_link:'pro\assets\dangerous.apk',
},
{
  song_id:4,
  thumbnail:
  'https://www.google.com/search?q=song&rlz=1C1ONGR_enIN1026IN1026&oq=song&gs_lcrp=EgZjaHJvbWUyDggAEEUYJxg5GIAEGIoFMgoIARAAGLEDGIAEMgoIAhAAGLEDGIAEMg0IAxAAGIMBGLEDGIAEMgoIBBAAGLEDGIAEMgoIBRAAGLEDGIAEMhAIBhAAGIMBGLEDGIAEGIoFMgYIBxBFGD3SAQgxNjkxajBqNKgCCLACAQ&sourceid=chrome&ie=UTF-8#',
  title:'best songs',
  description:'energetic song',
  song_link:'pro\assets\dangerous.apk',
},
{
  song_id:5,
  thumbnail:
  'https://www.google.com/search?q=song&rlz=1C1ONGR_enIN1026IN1026&oq=song&gs_lcrp=EgZjaHJvbWUyDggAEEUYJxg5GIAEGIoFMgoIARAAGLEDGIAEMgoIAhAAGLEDGIAEMg0IAxAAGIMBGLEDGIAEMgoIBBAAGLEDGIAEMgoIBRAAGLEDGIAEMhAIBhAAGIMBGLEDGIAEGIoFMgYIBxBFGD3SAQgxNjkxajBqNKgCCLACAQ&sourceid=chrome&ie=UTF-8#',
  title:'best songs',
  description:'energetic song',
  song_link:'pro\assets\dangerous.apk',
},
{
  song_id:5,
  thumbnail:
  'https://www.google.com/search?q=song&rlz=1C1ONGR_enIN1026IN1026&oq=song&gs_lcrp=EgZjaHJvbWUyDggAEEUYJxg5GIAEGIoFMgoIARAAGLEDGIAEMgoIAhAAGLEDGIAEMg0IAxAAGIMBGLEDGIAEMgoIBBAAGLEDGIAEMgoIBRAAGLEDGIAEMhAIBhAAGIMBGLEDGIAEGIoFMgYIBxBFGD3SAQgxNjkxajBqNKgCCLACAQ&sourceid=chrome&ie=UTF-8#',
  title:'best songs',
  description:'energetic song',
  song_link:'pro\assets\Bezubaan - ABCD - Any Body Can Dance 128 Kbps.mp3',
},
{
  song_id:6,
  thumbnail:
  'https://www.google.com/search?q=song&rlz=1C1ONGR_enIN1026IN1026&oq=song&gs_lcrp=EgZjaHJvbWUyDggAEEUYJxg5GIAEGIoFMgoIARAAGLEDGIAEMgoIAhAAGLEDGIAEMg0IAxAAGIMBGLEDGIAEMgoIBBAAGLEDGIAEMgoIBRAAGLEDGIAEMhAIBhAAGIMBGLEDGIAEGIoFMgYIBxBFGD3SAQgxNjkxajBqNKgCCLACAQ&sourceid=chrome&ie=UTF-8#',
  title:'best songs',
  description:'energetic song',
  song_link:'pro\assets\Bezubaan - ABCD - Any Body Can Dance 128 Kbps.mp3',
},
{
  song_id:7,
  thumbnail:
  'https://www.google.com/search?q=song&rlz=1C1ONGR_enIN1026IN1026&oq=song&gs_lcrp=EgZjaHJvbWUyDggAEEUYJxg5GIAEGIoFMgoIARAAGLEDGIAEMgoIAhAAGLEDGIAEMg0IAxAAGIMBGLEDGIAEMgoIBBAAGLEDGIAEMgoIBRAAGLEDGIAEMhAIBhAAGIMBGLEDGIAEGIoFMgYIBxBFGD3SAQgxNjkxajBqNKgCCLACAQ&sourceid=chrome&ie=UTF-8#',
  title:'best songs',
  description:'energetic song',
  song_link:'pro\assets\dangerous.apk',
},
];

onInputFilterRes($event: string){

const res = this.browseAll.filter((element) => 
  (element.title).toLowerCase() === ($event).toLowerCase().trim());
  
  console.log(res);
}

onNavigateToSearch(pageName:string){
  if(pageName ===  'search'){
    this.sb.isSearchVisible.next(true);
  }else{
  this.sb.isSearchVisible.next(false);
}
}
onNavigateToSong(song:any){
this.router.navigate(['/','song' ,'/','song.song_id'])
}
}
