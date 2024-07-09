import { Routes } from '@angular/router';



// import routes home and labs
import { HomeComponent } from './pages/home/home.component';
import { LabsComponent } from './pages/labs/labs.component';

export const routes: Routes = [
    {
        //path: 'home',
        path: '', // principal page
        component: HomeComponent
    },
    {
        path: 'labs',
        component: LabsComponent
    }
]