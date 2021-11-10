import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFuseModule } from "app/common/matfuse/matfuse.module";
import { NgSelectModule } from "@ng-select/ng-select";
import { SharedModule } from "app/shared/shared.module";
import { ConsecutivoComponent } from "./consecutivo/consecutivo.component";
import { SeleccionclienteComponent } from './seleccioncliente/seleccioncliente.component';

@NgModule({
    declarations: [
        ConsecutivoComponent,
        SeleccionclienteComponent
    ],
    imports: [
        MatFuseModule,
        SharedModule,
        ReactiveFormsModule,
        NgSelectModule,
        FormsModule
    ],
    exports: [
        ConsecutivoComponent,
        SeleccionclienteComponent
    ]
})
export class componentesModule {
}
