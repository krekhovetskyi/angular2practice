import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* App pages */
import * as Pages from './pages';

const routes: Routes = [
    {path: '', component: Pages.MainPageComponent},
    {path: 'about', component: Pages.AboutPageComponent},
    {path: 'contact', component: Pages.ContactPageComponent},
    {path: 'post/:id', component: Pages.PostPageComponent},
    {path: 'users', component: Pages.UsersPageComponent},
    {path: 'users/:id', component: Pages.UserPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
