import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { filter,map } from 'rxjs/operators';
@Component({
  selector: 'app-broadcrums',
  templateUrl: './broadcrums.component.html',
  styleUrls: ['./broadcrums.component.scss']
})
export class BroadcrumsComponent implements OnDestroy {

  public titulo:string;
  public subtitulo:string;
  public tituloSubs$: Subscription;

  constructor(private router: Router  ) { 
    this.tituloSubs$ = this.getArgumentRuta()
                        .subscribe(({titulo,subtitulo})=>{
                          this.titulo=titulo;
                          this.subtitulo=subtitulo;
                          if(subtitulo==''){
                            this.subtitulo=titulo
                          }
                          document.title=`ZoeSystem ${subtitulo}`;
                        })
  }


  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getArgumentRuta(){
    return this.router.events
              .pipe(
                filter(event=>event instanceof ActivationEnd),
                filter((event:ActivationEnd)=> event.snapshot.firstChild===null),
                map((event:ActivationEnd)=>event.snapshot.data)
             );
  }
 


}
