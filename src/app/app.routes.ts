/**
 * Created by Furkan Süğlün on 08.03.2017.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

import { SearchComponent } from './component/search/search.component';
import { AboutComponent }  from './component/about/about.component';
import {ArtistComponent} from "./component/artist/artist.component";
import {AlbumComponent} from "./component/album/album.component";


const router: Routes = [
  {
    path: '', //root path
    component: SearchComponent,

  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'artist/:id',
    component: ArtistComponent
  },
  {
    path: 'album/:id',
    component: AlbumComponent
  }

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
//routing is gonna be imported on app.module.ts !
