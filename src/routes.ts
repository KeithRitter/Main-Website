import { Routes } from '@angular/router';
import { SectionAboutMainComponent } from './app/Sections/section-about-main/section-about-main.component';
import { SectionProjectsComponent } from './app/Sections/section-projects/section-projects.component';

export const appRoutes : Routes = [
    { path: 'main', component: SectionAboutMainComponent},
    {path: 'projects', component: SectionProjectsComponent },
    { path: '', redirectTo: '/main', pathMatch: 'full'}
];