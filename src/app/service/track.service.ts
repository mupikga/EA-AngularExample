import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Track } from '../models/track';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getTracks(): Observable<Track[]> {
    return this.http.get<Track[]>(this.url + '/tracks');
  }

  deleteTrack(title: string): Observable<string> {
    return this.http.delete(this.url + '/tracks/' + title, {responseType: 'text'})
  }

  addTrack(track: Track): Observable<string> {
    return this.http.post(this.url + '/tracks', track, {responseType: 'text'}) ;
  }

  getTrackByName(title: string): Observable<Track> {
    return this.http.get<Track>(this.url + '/tracks/' + title);
  }

  editTrack(title: string, track: Track): Observable<string> {
    return this.http.put(this.url + '/tracks/' + title, track, {responseType: 'text'});
  }
}