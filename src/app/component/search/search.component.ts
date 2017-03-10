/**
 * Created by Furkan Süğlün on 08.03.2017.
 */

import { Component } from '@angular/core';

import {SpotifyService} from '../../services/spotify.service';
import {Artist} from "../../Artist";


@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',

})
export class SearchComponent  {
  searchStr: string;
  searchResult: Artist[];

  constructor(private _spotifyService: SpotifyService){

  }

  searchMusic() {
    this._spotifyService.searchMusic(this.searchStr)
      .subscribe(res => {
        //noinspection TypeScriptUnresolvedVariable
        this.searchResult = res.artists.items;
      })
  }


}
