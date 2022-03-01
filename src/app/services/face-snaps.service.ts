import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
          id:1,
          title:'Nouilles au Poulet',
          description:'De bonnes nouilles savoureuses avec du poulet bien tendre',
          imageURL:'https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_1100,q_auto,w_2600/hellofresh_s3/image/5e020b107107e12c983f62e9-c5608ae8.jpg',
          createDate: new Date(),
          snaps: 14,
          location: 'Paris'
        },
        {
          id: 2,
          title:'Nouilles aux légumes',
          description: 'De bonnes nouilles croquuantes avec de bons légumes frais',
          imageURL:'https://i1.wp.com/www.amourdecuisine.fr/wp-content/uploads/2018/02/Recette-nouilles-chinoise-saut%C3%A9es-aux-l%C3%A9gumes-1.jpg?w=800&ssl=1',
          createDate: new Date(),
          snaps: 1,
          location: 'Montréal'
         },
         {
          id:3,
          title:'Nouilles aux crevettes',
          description:' Des nouilles avec des crevettes pêches avec amour',
          imageURL:'https://img.mesrecettesfaciles.fr/2021-02/nouilles-aux-legumes-croquants-et-crevettes-sauce-thai-1.webp',
          createDate: new Date(),
          snaps:2,
         }
      ]
      getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
      }
      snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void 
      {
        const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
      }
    

    
}