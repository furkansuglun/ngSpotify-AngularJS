import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //for ngModel!!!!!!!!!!!!
import { HttpModule }    from '@angular/http';


import { AppComponent }  from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AboutComponent } from './component/about/about.component';
import { SearchComponent } from './component/search/search.component';
import {ArtistComponent} from "./component/artist/artist.component";
import {AlbumComponent} from "./component/album/album.component";

import { routes }        from './app.routes';
import {SpotifyService} from "./services/spotify.service";




@NgModule({
  imports:      [ BrowserModule , routes , FormsModule , HttpModule],
  declarations: [ AppComponent , NavbarComponent , AboutComponent , SearchComponent , ArtistComponent , AlbumComponent ],
  providers: [SpotifyService ],
  bootstrap:    [ AppComponent ],

})
export class AppModule { }
