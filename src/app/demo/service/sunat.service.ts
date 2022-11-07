import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';

@Injectable({
    providedIn: 'root'
})
export class SunatService {

    constructor(
        private http: HttpClient
    ) { }

    datosDNI(_dni: string): Observable<any> {
        let token = "a296dd4da48725b21c6a8bec133ba78c5ff1903466de61f1044c7a93445dab10";
        const header = new HttpHeaders({
            'Authorization': 'Bearer '+token
        });

        let url = 'https://www.apisperu.net/api/dni/'+_dni;

        return this.http.get(url, { headers: header});
    }

}
