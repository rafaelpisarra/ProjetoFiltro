import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-materia/angular-material.module";
import { FilterComponent } from './filter/filter.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { PipesModule } from "../pipes/pipes.module";

@NgModule({
    declarations: [
        FilterComponent,
        UserDetailsComponent,
        UserListComponent
    ],
    imports: [
        AngularMaterialModule,
        FormsModule,
        CommonModule,
        PipesModule
    ],
    exports: [
        FilterComponent,
        UserDetailsComponent,
        UserListComponent
    ]
})
export class ComponentsModule { }