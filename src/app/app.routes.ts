import { Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {
        path:'',
        component:IndexComponent
    },
    {
        path:'home',
        component:IndexComponent
    },
    {
        path:'contact',
        component:ContactComponent
    }
];
