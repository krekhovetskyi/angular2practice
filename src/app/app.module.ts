import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* App Routes */
import { AppRoutingModule } from './app.routing';

/* App Pages */
import { MainPageComponent } from './pages/main/main.component';
import { PostPageComponent } from './pages/post/post.component';
import { AboutPageComponent } from './pages/about/about.component';
import { UserPageComponent } from './pages/user/user.component';
import { UsersPageComponent } from './pages/users/users.component';
import { ContactPageComponent } from './pages/contact/contact.component';

/* App Components */
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

/* App Services */
import { UsersService } from './services/users.service';
import { PostsService } from './services/posts.service';
import { CommentsService } from './services/comments.service';

/* Custom Pipes */
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
    declarations: [
        AppComponent,
        PostsComponent,
        HeaderComponent,
        FooterComponent,
        MainPageComponent,
        AboutPageComponent,
        ContactPageComponent,
        PostPageComponent,
        UserPageComponent,
        UsersPageComponent,
        CapitalizePipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
        UsersService,
        PostsService,
        CommentsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
