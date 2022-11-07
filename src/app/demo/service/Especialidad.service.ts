import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListService } from './List.service';

@Injectable()
export class EspecialidadService implements ListService {

    list: string='assets/demo/data/especialidades.json';

    constructor(private http: HttpClient) { }

    getList() {
        return this.http.get<any>(this.list)
            .toPromise()
            .then(res => res.data as any[])
            .then(data => data);
    }

}
