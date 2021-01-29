import { Component, OnInit, OnChanges } from '@angular/core';
import { PhotosService } from './photos.service';

@Component({
    selector: 'phooto',
    template: `
    <button (click)="AddPhoto()">Add Photo</button>

    <table>
        <tr>
            <th>ID</th>
            <th>Thumbnail</th>
        </tr>
    
        <tr *ngFor="let photo of photos">
            <td>{{photo.id}}</td>
            <td><img [src]="photo.thumbnailUrl" /></td>
        </tr>
    </table>
    
    `,
    providers:[PhotosService]
})
export class PhotosComponent implements OnInit,OnChanges {

    photos:any
    constructor(private photoservice:PhotosService) {
     
     }

    ngOnInit() { 
    //    this.photoservice.getPhotos().subscribe(res=>{

    //         this.photos =res
        
    //     })
    }

    ngOnChanges(){

    }

    AddPhoto(){
        this.photoservice.postPhoto().subscribe(res=>{
            console.log(res)
        })
    }

}