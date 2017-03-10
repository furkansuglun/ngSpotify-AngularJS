/**
 * Created by Furkan Süğlün on 09.03.2017.
 */
import {Injectable} from '@angular/core';
import {Http, Headers , Response} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  private searchUrl: string;
  private artistUrl: string;
  private albumsUrl: string;
  private albumsDetailUrl: string;

  constructor(private _http: Http) {

  }

  searchMusic(str: string , type='artist') {
    //https://developer.spotify.com/web-api/endpoint-reference/
    this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
    return this._http.get(this.searchUrl)
      .map((res: Response) => res.json());
  }


  getArtist(id: string) {
    //https://developer.spotify.com/web-api/endpoint-reference/
    this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;
    return this._http.get(this.artistUrl)
      .map((res: Response) => res.json());
  }

  getAlbums(artistId: string) {
    //https://developer.spotify.com/web-api/endpoint-reference/
    this.albumsUrl = 'https://api.spotify.com/v1/artists/'+artistId+'/albums';
    return this._http.get(this.albumsUrl)
      .map((res: Response) => res.json());
  }
  getAlbumsDetail(id: string) {
    //https://developer.spotify.com/web-api/endpoint-reference/
    this.albumsDetailUrl = 'https://api.spotify.com/v1/albums/'+id;
    return this._http.get(this.albumsDetailUrl)
      .map((res: Response) => res.json());
  }


}
