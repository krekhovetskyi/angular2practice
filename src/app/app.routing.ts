import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* App pages */
import { MainPageComponent } from './pages/main/main.component';
import { AboutPageComponent } from './pages/about/about.component';
import { ContactPageComponent } from './pages/contact/contact.component';
import { PostPageComponent } from './pages/post/post.component';
import { UserPageComponent } from './pages/user/user.component';
import { UsersPageComponent } from './pages/users/users.component';

const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'contact', component: ContactPageComponent },
    { path: 'post/:id', component: PostPageComponent },
    { path: 'users', component: UsersPageComponent },
    { path: 'users/:id', component: UserPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
