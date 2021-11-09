import { NgModule } from "@angular/core";
import { MatFuseModule } from "app/common/matfuse/matfuse.module";
import { SharedModule } from "app/shared/shared.module";
import { ConsecutivoComponent } from "./consecutivo/consecutivo.component";
import { SeleccionclienteComponent } from './seleccioncliente/seleccioncliente.component';

@NgModule({
    declarations:[
        ConsecutivoComponent,
        SeleccionclienteComponent
    ],
    imports:[
        MatFuseModule,
        SharedModule
    ],
    exports:[
        ConsecutivoComponent
    ]
})
export class componentesModule{}