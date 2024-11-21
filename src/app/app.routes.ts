import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/pages/components/home/home.component';
import { SobreComponent } from './core/pages/components/sobre/sobre.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'sobre', component: SobreComponent }
];
