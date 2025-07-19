import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from "@angular/material/divider";

@NgModule({
    declarations: [],
    imports: [
        MatTableModule,
        MatListModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatDatepickerModule,
        MatIconModule,
        MatDividerModule
    ],
    exports: [
        MatTableModule,
        MatListModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatDatepickerModule,
        MatIconModule,
         MatDividerModule
    ]
})
export class AngularMaterialModule { }