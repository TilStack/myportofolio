import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { SkillsComponent } from './skills/skills.component';
import { WorksComponent } from './works/works.component';
import { CitationComponent } from './citation/citation.component';
const routes: Routes = [
  {
    path:"home",component:HomeComponent,
  },
  {
    path:"work",component:WorksComponent,
  },
  {
    path:"skills",component:SkillsComponent,
  },
  {
    path:"citations",component:CitationComponent,
  },
  {
    path:"contact",component:ContactmeComponent,
  },
  {
    path:"about",component:AboutmeComponent,
  },
  {
    path:"",redirectTo:'home',pathMatch:"full"
  },
  {
    path:'**',component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   
})
export class AppRoutingModule { }
