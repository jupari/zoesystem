import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CuentaComponent } from "./cuenta/cuenta.component";

const child:Routes = [
    {path:'cuenta', component:CuentaComponent}
]

@NgModule({
    imports:[RouterModule.forChild(child)],
    exports:[RouterModule]
})

export class ChildRoutesModule{}

