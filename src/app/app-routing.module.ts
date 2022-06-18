import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us/about-us.component';
import { OurServicesComponent } from './pages/our-services/our-services/our-services.component';
import { WorkWithUsComponent } from './pages/work-with-us/work-with-us/work-with-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'our-services', component: OurServicesComponent },
    { path: 'work-with-us', component: WorkWithUsComponent },
    { path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules,
        useHash: false
    })],
    exports: [RouterModule]
})

export class AppRoutingModule { }