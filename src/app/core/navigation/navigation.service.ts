import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cloneDeep } from 'lodash-es';
import { Observable, ReplaySubject,of, observable  } from 'rxjs';
import { tap,map} from 'rxjs/operators';
import { Navigation } from 'app/core/navigation/navigation.types';

import { environment } from '../../../environments/environment';
import { FuseVerticalNavigationAsideItemComponent } from '@fuse/components/navigation/vertical/components/aside/aside.component';
import { FuseNavigationItem } from '@fuse/components/navigation';

const _baseUrl:string = environment.base_url;

@Injectable({
    providedIn: 'root'
})
export class NavigationService
{


    private _navigation: ReplaySubject<Navigation> = new ReplaySubject<Navigation>(1);
   

    /**
     * Constructor
     */
    constructor(private _httpClient?: HttpClient)
    {
        

    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for navigation
     */
    get navigation$(): Observable<Navigation>
    {
       
        return this._navigation.asObservable();
     
    }
   
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /*getMenu(): Observable<Navigation>
    {
        console.log('hola')
        return this.get().pipe(
            tap((navigation)=>{
                console.log('getMenu',navigation);
                this._navigation.next(navigation);
            })
        )
    }*/
    /**
     * Get all navigation data
     */
    get(): Observable<Navigation>
    {
        const token:string = localStorage.getItem('token') || '';
        return this._httpClient.get<Navigation>(`${_baseUrl}/navigation`,{
            headers:{
                'Authorization':`Bearer ${token}` ,
            }
        }).pipe(
            tap((navigation) => {
                this._navigation.next(navigation);
            })
        )
    }
}

