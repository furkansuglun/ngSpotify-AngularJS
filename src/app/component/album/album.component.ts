/**
 * Created by Furkan Süğlün on 10.03.2017.
 */

import { Component , OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SpotifyService} from "../../services/spotify.service";
import {Album} from "../../Album";

@Component({
  moduleId: module.id,
  selector: 'album',
  templateUrl: 'album.component.html'
})

export class AlbumComponent implements OnInit{

  id: string;
  album: Album[];

  constructor(private _spotifyService: SpotifyService , private _route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._spotifyService.getAlbumsDetail(id)
          .subscribe(album => {
            this.album = album;
          })
      })
  }

}
