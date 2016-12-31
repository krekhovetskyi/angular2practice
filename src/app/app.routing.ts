import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* App pages */
import { MainPageComponent } from './pages/main/main.component';
import { AboutPageComponent } from './pages/about/about.component';
import { ContactPageComponent } from './pages/contact/contact.component';
import { PostPageComponent } from './pages/post/post.component';

const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'contact', component: ContactPageComponent },
    { path: 'post/:id', component: PostPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
