import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  buttonText!: string;
  @Input() faceSnap!: FaceSnap;
  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.buttonText = 'Miam!';
      const snapId = +this.route.snapshot.params['id'];
      this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId);
    }
    onSnap() {
      if (this.buttonText === 'Miam!') {
          this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
          this.buttonText = 'Beurk!';
      } else {
          this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
          this.buttonText = 'Miam!';
      }
  
  }

}
