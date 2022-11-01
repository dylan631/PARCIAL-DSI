import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class CountryService {

    constructor(private http: HttpClient) { }

    getCountries() {
        return this.http.get<any>('assets/demo/data/countries.json')
            .toPromise()
            .then(res => res.data as any[])
            .then(data => data);
    }
    getEspecialidad() {
        return this.http.get<any>('assets/demo/data/especialidades.json')
            .toPromise()
            .then(res => res.data as any[])
            .then(data => data);
    }
    getDistrito() {
        return this.http.get<any>('assets/demo/data/distritos.json')
            .toPromise()
            .then(res => res.data as any[])
            .then(data => data);
    }
}
