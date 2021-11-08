
import { Routes} from '@angular/router';
import { SettingComponent } from './setting.component';

export const routesSettings:Routes = [
    {
        path:'',
        component: SettingComponent
      
        //loadChildren: ()=>import('./child-routes.module').then(m=>m.ChildRoutesModule)
    }
    
] 

