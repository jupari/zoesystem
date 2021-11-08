import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, switchMap,tap,map } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { LoginForm } from 'app/interface/login-form';
import { AuthUtils } from './auth.utils';
import { UserService } from 'app/core/user/user.service';
import { Router } from '@angular/router';

const baseUrl = environment.base_url;

@Injectable()
export class AuthService
{
    private _authenticated: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _httpClient: HttpClient,
        private _userService: UserService,
        private _router: Router
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for access token
     */
    set accessToken(token: string)
    {
        localStorage.setItem('token', token);
    }

    get accessToken(): string
    {
        return localStorage.getItem('token') ?? '';
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /** 
     * @param email
      */ 
    //
   forgotPassword(email: string): Observable<any>
   {
       return this._httpClient.post('api/auth/forgot-password', email);
   }

   /**
    * Reset password
    *
    * @param password
    */
   resetPassword(password: string): Observable<any>
   {
       return this._httpClient.post('api/auth/reset-password', password);
   }
    /**
     * Sign in
     *@param credentials
     */
    signIn(formData:LoginForm)
    {
        // Throw error, if the user is already logged in
        if ( this._authenticated )
        {
            return throwError('El usuario ya inició sesion.');
        }

        return this._httpClient.post(`${ baseUrl }/usuarios/login`,formData)
                .pipe(
                    tap((resp:any)=>{

                           this.accessToken    = resp.token

                           this._authenticated = true

                           localStorage.setItem('expiracion', resp.expiracion)    
                        }
                    )
                )
    }
    
    /**
     * Sign in using the access token
     */
     signInUsingToken():Observable<boolean>
     {
         const token = localStorage.getItem('token')

         // Renew token
         return this._httpClient.get(`${ baseUrl }/usuarios/validate`, {
             headers: {
                    'Authorization': `Bearer ${token}`
                }
        }).pipe(
            
            switchMap( (resp:any) => {

                if (resp.token){
                    this.accessToken    =   resp.token

                    this._authenticated =   true 
                }else{
                    this._router.navigate(['/sign-in']);
                    localStorage.removeItem('token')
                    this._authenticated =   false 
                }
                return of(true)
            }),
            catchError(() => {
                this._router.navigate(['/sign-in']);
                return of(false)
            }),
            
        );
      
     }
 
     /**
      * Sign out
      */
     signOut(): Observable<any>
     {
         // Remove the access token from the local storage
         localStorage.removeItem('token');
 
         // Set the authenticated flag to false
         this._authenticated = false;
 
         // Return the observable
         return of(true);
     }
 
     /**
      * Sign up
      *
      * @param user
      */
     signUp(user: { name: string; email: string; password: string; company: string }): Observable<any>
     {
         return this._httpClient.post('api/auth/sign-up', user);
     }
 
     /**
      * Unlock session
      *
      * @param credentials
      */
     unlockSession(credentials: { email: string; password: string }): Observable<any>
     {
         return this._httpClient.post('api/auth/unlock-session', credentials);
     }
 
     /**
      * Check the authentication status
      */
     check(): Observable<boolean>
     {
         // Check if the user is logged in
         if ( this._authenticated )
         {
             return of(true);
         }
 
         // Check the access token availability
         if ( !this.accessToken )
         {
             return of(false);
         }
 
         // Check the access token expire date
         if ( AuthUtils.isTokenExpired(this.accessToken) )
         {
             return of(false);
         }
 
         // If the access token exists and it didn't expire, sign in using it
         console.log(this.signInUsingToken())
         return this.signInUsingToken();
     }
}
