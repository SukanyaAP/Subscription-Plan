import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PhotosService {
    
    constructor(private httpclient:HttpClient)
     { 


     }

    getPhotos():Observable<any>{
        //AJAX call to communicate with server

        return  this.httpclient.
         get('https://jsonplaceholder.typicode.com/album/1/photos')

    }


    postPhoto():Observable<any>{

        return this.httpclient.
        post('https://jsonplaceholder.typicode.com/album/1/photos',
        {
            "albumId": 101,
            "title": "error quasi sunt cupiditate voluptate ea odit beatae",
            "url": "https://via.placeholder.com/600/6dd9cb",
            "thumbnailUrl": "https://via.placeholder.com/150/6dd9cb"
        })
    }

}