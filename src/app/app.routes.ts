import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { SkillsComponent } from './skills/skills.component';
import { CitationComponent } from './citation/citation.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'work',
    component: WorksComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path: 'citations',
    component: CitationComponent,
  },
  {
    path: 'contact',
    component: ContactmeComponent,
  },
  {
    path: 'about',
    component: AboutmeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  },
];
