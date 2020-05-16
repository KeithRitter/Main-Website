import { Routes } from '@angular/router';
import { SectionAboutMainComponent } from './app/Sections/section-about-main/section-about-main.component';

export const appRoutes : Routes = [
    { path: 'main', component: SectionAboutMainComponent},
    { path: '', redirectTo: '/main', pathMatch: 'full'}
];