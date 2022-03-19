import { Component, OnInit } from '@angular/core';
import { Toast, ToastrComponentlessModule, ToastrService } from 'ngx-toastr';
import { Track } from 'src/app/models/track';
import { TrackService } from 'src/app/service/track.service';

@Component({
  selector: 'app-listar-tracks',
  templateUrl: './listar-tracks.component.html',
  styleUrls: ['./listar-tracks.component.css']
})

export class ListarTracksComponent implements OnInit {
  listTracks: Track[] = [];

  constructor(private _trackService: TrackService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getTracks();
  }

  getTracks() {
    this._trackService.getTracks().subscribe(data => {
      console.log(data);
      this.listTracks = data;
    }, error => {
      console.log(error);
    })
  }

  deleteTrack(title: string) {
    this._trackService.deleteTrack(title).subscribe(data => {
      this.toastr.error('El track ha estat eliminat amb exit', 'Track eliminat');
      this.getTracks();
    }, error => {
      console.log(error);
    })
  }


}
