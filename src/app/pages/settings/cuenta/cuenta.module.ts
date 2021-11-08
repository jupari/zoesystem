import { NgModule } from "@angular/core";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import {  MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { RouterModule } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { CuentaComponent } from "./cuenta.component";
import { cuentasRoutes } from "./cuenta.routing";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    declarations:[
        CuentaComponent
    ],
    imports:[
        RouterModule.forChild(cuentasRoutes),
        MatFormFieldModule,
        MatSelectModule,
        MatCheckboxModule,
        MatRadioModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule

    ],
    exports:[RouterModule]
})

export class CuentaModule{

}