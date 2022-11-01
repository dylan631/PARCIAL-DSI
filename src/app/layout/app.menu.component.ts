import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'HOME',
                items: [
                    { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Gestión de Citas',
                items: [
                    { label: 'Registrar Cita', icon: 'pi pi-fw pi-save', routerLink: ['/uikit/floatlabel'] },
                    // "/uikit/formlayout" indica la ruta del siguiente jpanel
                    { label: 'Registrar Paciente', icon: 'pi pi-fw pi-user-plus', routerLink: ['/uikit/input'] },
                ]
            },
            {
                label: 'Administración de Reportes Médicos',
                items: [
                    { label: 'Buscar Historial Clínico', icon: 'pi pi-fw pi-search', routerLink: ['/'] },
                    { label: 'Registrar Documentos', icon: 'pi pi-fw pi-inbox', routerLink: ['/'] },
                    { label: 'Actualización Reportes Médicos', icon: 'pi pi-fw pi-save', routerLink: ['/'] }
                ]
            },
            {
                label: 'Asignación Citas',
                items: [
                    { label: 'Registra Hoja de Referencia', icon: 'pi pi-fw pi-copy', routerLink: ['/'] }
                ]
            }
        ];
    }
}
