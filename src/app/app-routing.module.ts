import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationDirective } from './animations/animation.directive';

const routes: Routes = [
  {
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   
})
export class AppRoutingModule { }
