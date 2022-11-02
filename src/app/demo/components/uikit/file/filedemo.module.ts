import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { FileDemoRoutingModule } from './filedemo-routing.module';
import { FileDemoComponent } from './filedemo.component';
import { CalendarModule } from "primeng/calendar";


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
        CalendarModule,
		FileDemoRoutingModule,
		FileUploadModule
	],
	declarations: [FileDemoComponent],
})
export class FileDemoModule { }
