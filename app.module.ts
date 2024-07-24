import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SearchComponent } from './search/search.component';
import { SigupComponent } from './sigup/sigup.component';
import { SongCardComponent } from './components/song-card/song-card.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SongComponent } from './song/song.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    //PagesComponent,
    HomeComponent,
    LoginComponent,
    PlaylistComponent,
    SearchComponent,
    SigupComponent,
    SongCardComponent,
    TopNavComponent,
    SongComponent,
    CardComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
