import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

// @formatter:off
// tslint:disable:max-line-length
export const appRoutes: Route[] = [

    // Redirect empty path to '/example'
    {path: '', pathMatch : 'full', redirectTo: 'example'},

    // Redirect signed in user to the '/example'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'example'},

    // Auth routes for guests
    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule)},
            {path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule)},
            {path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule)},
            {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)},
            {path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule)}
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)},
            {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule)}
        ]
    },

    // Landing routes
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component  : LayoutComponent,
        data: {
            layout: 'empty'
        },
        children   : [
            {path: 'home', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule)},
        ]
    },

    // Admin routes
    {
        path       : '',
        canActivate: [AuthGuard],
        component  : LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children   : [
            //home
            {
                path: 'example', 
                loadChildren: () => import('app/modules/admin/example/example.module').then(m => m.ExampleModule)
            },

             //Configuracion
            {
                path: 'configuracion',
                children:[
                    {
                        path:'settings',
                        loadChildren:()=>import('app/pages/settings/setting.module').then(r=>r.SettingModule),
                        data: {titulo:'Configuración',subtitulo:''}
                    },
                    {
                        path:'cuenta',
                        loadChildren:()=>import('app/pages/settings/cuenta/cuenta.module').then(c=>c.CuentaModule),
                        data:{titulo:'Configuración',subtitulo:'Cuenta'}
                    },
                    {
                        path:'perfil',
                        loadChildren: ()=>import('app/pages/settings/perfil/perfil.module').then(p=>p.PerfilModule),
                        data:{titulo:'Configuración',subtitulo:'Perfil'}
                    }
                
                ]
            },
            {
                path:'pos',
                children:[
                    {
                        path:'facturapos',
                        loadChildren: ()=>import('app/pages/puntoventa/factura/factura.module').then(p=>p.FacturaModule),
                        data:{titulo:'PuntoVenta',subtitulo:'Factura'}
                    },
                    {
                        path: 'abrircaja',
                        loadChildren: ()=>import('app/pages/puntoventa/abrircaja/abrircaja.module').then(a=>a.AbrircajaModule),
                        data: {titulo:'PuntoVenta',subtitulo:'Abrir caja'}
                    },
                    {
                        path:'cerrarcaja',
                        loadChildren:()=>import('app/pages/puntoventa/cerrarcaja/cerrarcaja.module').then(c=>c.CerrarcajaModule),
                        data: {titulo:'PuntoVenta', subtitulo:'Cerrar caja'}
                    },
                    {
                        path:'recoger',
                        loadChildren:()=>import('app/pages/puntoventa/recoger/recoger.module').then(r=>r.RecogerModule),
                        data:{titulo:'PunotoVenta',subtitulo:'Recoger'}
                    },
                    {
                        path:'egresos',
                        loadChildren:()=>import('app/pages/puntoventa/egresos/egresos.module').then(e=>e.EgresosModule),
                        data:{titulo:'PuntoVenta', subtitulo:'Egresos'}
                    },
                    {
                        path:'notascredito',
                        loadChildren:()=>import('app/pages/puntoventa/notacredito/notacredito.module').then(n=>n.NotacreditoModule),
                        data:{titulo:'PuntoVenta',subtitulo:'Nota Credito'}
                    }
                ]
            },
            {
                path:'compras',
                children:[
                    {
                        path:'compras',
                        loadChildren:()=>import('app/pages/comprasproductos/compras/compras.module').then(c=>c.ComprasModule),
                        data:{titulo:'Compras',subtitulo:'Ingreso por Compras'}
                    },
                    {
                        path:'devolucion',
                        loadChildren:()=>import('app/pages/comprasproductos/compras/compras.module').then(c=>c.ComprasModule),
                        data:{titulo:'Compras',subtitulo:'Devoluciones'}
                    },
                ]
            },
            {
                path:'imprimir',
                children:[
                    {
                        path:'consultaventa',
                        loadChildren:()=>import('app/pages/imprimir/imprimir.module').then(i=>i.ImprimirModule),
                        data:{titulo:'Imprimir',subtitulo:'Consulta de Ventas'}
                    }
                ]
            },
            {
                path:'inventario',
                children:[
                    {
                        path:'creacionproducto',
                        loadChildren:()=>import('app/pages/inventarios/creacionproducto/creacionproducto.module').then(c=>c.CreacionproductoModule),
                        data:{titulo:'Inventarios', subtitulo:'Creación de Producto'}
                    },
                    {
                        path:'saldoinventario',
                        loadChildren:()=>import('app/pages/inventarios/saldosinventario/saldosinventario.module').then(c=>c.SaldosinventarioModule),
                        data:{titulo:'Inventarios', subtitulo:'Saldos de Inventarios'}
                    },
                    {
                        path:'traspasomcia',
                        loadChildren:()=>import('app/pages/inventarios/traspasomcia/traspasomcia.module').then(c=>c.TraspasomciaModule),
                        data:{titulo:'Inventarios', subtitulo:'Traspaso de Mercancia'}
                    },
                    {
                        path:'recibomcia',
                        loadChildren:()=>import('app/pages/inventarios/recibomcia/recibomcia.module').then(c=>c.RecibomciaModule),
                        data:{titulo:'Inventarios', subtitulo:'Recibo de Mercancia'}
                    },
                    {
                        path:'inventariofisico',
                        loadChildren:()=>import('app/pages/inventarios/inventariofisico/inventariofisico.module').then(c=>c.InventariofisicoModule),
                        data:{titulo:'Inventarios', subtitulo:'Inventario Fisico'}
                    },
                    {
                        path:'salentinventario',
                        loadChildren:()=>import('app/pages/inventarios/docinventarios/docinventarios.module').then(c=>c.DocinventariosModule),
                        data:{titulo:'Inventarios', subtitulo:'Entrada-Salida de Inventario'}
                    },
                ]
            },

            //404 not found
            {path: '404-not-found', pathMatch: 'full', loadChildren: () => import('app/pages/error/error-404/error-404.module').then(m => m.Error404Module)},
            {path: '**', redirectTo: '404-not-found'}
        ]
    },

   
];

