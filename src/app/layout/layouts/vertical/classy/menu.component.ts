import { Navigation } from 'app/core/navigation/navigation.types';
import { FuseNavigationItem } from '@fuse/components/navigation';
import { NavigationService } from 'app/core/navigation/navigation.service';
import { cloneDeep } from 'lodash-es';



export class menuNavigation
{

    public defaultNavigation: FuseNavigationItem[]
    public compactNavigation: FuseNavigationItem[] 
    public futuristicNavigation: FuseNavigationItem[]
    public horizontalNavigation: FuseNavigationItem[]

    navigation: Navigation;

    constructor( private _navigationService: NavigationService) 
    {
        
    }

    getData()
    {
        /*return new Promise((resolve)=>
                this._navigationService.get()
                    .subscribe((resp:FuseNavigationItem)=>{
                        this.defaultNavigation=[resp]
                        this.compactNavigation=[resp]
                        this.futuristicNavigation=[resp]
                        this.horizontalNavigation=[resp]

                        this.compactNavigation.forEach((compactNavItem) => {
                            this.defaultNavigation.forEach((defaultNavItem) => {
                                if ( defaultNavItem.id === compactNavItem.id )
                                {
                                    compactNavItem.children = cloneDeep(defaultNavItem.children);
                                }
                            });
                        });
        
                        // Fill futuristic navigation children using the default navigation
                        this.futuristicNavigation.forEach((futuristicNavItem) => {
                            this.defaultNavigation.forEach((defaultNavItem) => {
                                if ( defaultNavItem.id === futuristicNavItem.id )
                                {
                                    futuristicNavItem.children = cloneDeep(defaultNavItem.children);
                                }
                            });
                        });
        
                        // Fill horizontal navigation children using the default navigation
                        this.horizontalNavigation.forEach((horizontalNavItem) => {
                            this.defaultNavigation.forEach((defaultNavItem) => {
                                if ( defaultNavItem.id === horizontalNavItem.id )
                                {
                                    horizontalNavItem.children = cloneDeep(defaultNavItem.children);
                                }
                            });
                        });
        

                        resolve(this.navigation = {
                            compact : cloneDeep (this.defaultNavigation),
                            default: cloneDeep(this.defaultNavigation),
                            futuristic:cloneDeep(this.futuristicNavigation),
                            horizontal:cloneDeep(this.horizontalNavigation)
                        })
                })
          )*/
    }

}