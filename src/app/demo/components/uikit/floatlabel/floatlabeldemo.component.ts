import { Component, OnInit } from '@angular/core';
import { DistritoService } from 'src/app/demo/service/Distrito.service';
import { EspecialidadService } from 'src/app/demo/service/Especialidad.service';
import { SunatService } from 'src/app/demo/service/sunat.service';
import { Persona } from './floatlabeldemo.model';
import axios from 'axios';

@Component({
    templateUrl: './floatlabeldemo.component.html',
})
export class FloatLabelDemoComponent implements OnInit {

    especialidades: any[] = [];
    filteredEspecialidades: any[] = [];
    selectedEspecialidadAdvanced: any[] = [];

    distritos: any[] = [];
    filteredDistritos: any[] = [];
    selectedDistritoAdvanced: any[] = [];

    value1: any;

    value2: any;

    value3: any;

    value4: any;

    value5: any;

    value6: any;

    value7: any;

    value8: any;

    value9: any;

    value10: any;

    value11: any;

    value12: any;

    personas: Persona;
    verificador: boolean;

    constructor(private EspecialidadService: EspecialidadService, private DistritoService: DistritoService, private sSunat: SunatService) {
        this.personas = new Persona("", "", "");
        this.verificador = false;
    }

    ngOnInit() {
        this.DistritoService.getList().then(distritos => {
            this.distritos = distritos;
        });
        this.EspecialidadService.getList().then(Especialidad => {
            this.especialidades = Especialidad;
        });
    }


    buscarDNI(dni: string) {
        this.verificador = true;
        this.sSunat.datosDNI(dni).subscribe(r => {
            if (!r.success) {
                alert("NO ENCONTRADO");
            }
            else {
                this.personas.nombres=r.data.nombres
                this.personas.apellidoPaterno=r.data.apellido_paterno
                this.personas.apellidoMaterno=r.data.apellido_materno
                console.log(r);
            }
        });
    }

    filterEspecialidad(event: any) {
        const filtered: any[] = [];
        const query = event.query;
        for (let i = 0; i < this.especialidades.length; i++) {
            const especialidad = this.especialidades[i];
            if (especialidad.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(especialidad);
            }
        }

        this.filteredEspecialidades = filtered;
    }



    filterDistrito(event: any) {
        const filtered: any[] = [];
        const query = event.query;
        for (let i = 0; i < this.distritos.length; i++) {
            const distrito = this.distritos[i];
            if (distrito.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(distrito);
            }
        }

        this.filteredDistritos = filtered;
    }

    searchEspecialidades(event: any) {
        // in a real application, make a request to a remote url with the query and
        // return filtered results, for demo we filter at client side
        const filtered: any[] = [];
        const query = event.query;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.especialidades.length; i++) {
            const especialidad = this.especialidades[i];
            if (especialidad.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(especialidad);
            }
        }

        this.filteredEspecialidades = filtered;
    }

    searchDistrito(event: any) {
        // in a real application, make a request to a remote url with the query and
        // return filtered results, for demo we filter at client side
        const filtered: any[] = [];
        const query = event.query;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.distritos.length; i++) {
            const distrito = this.distritos[i];
            if (distrito.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(distrito);
            }
        }

        this.filteredDistritos = filtered;
    }


}
