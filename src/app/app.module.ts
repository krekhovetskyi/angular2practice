import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

/* App Routes */
import { AppRoutingModule } from './app.routing';

/* App Pages */
import {
    MainPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    PostPageComponent,
    UserPageComponent,
    UsersPageComponent
} from './pages';

/* App Components */
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserAlbumsComponent } from './components/user-albums/user-albums.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { UserTodosComponent } from './components/user-todos/user-todos.component';

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
        UserAlbumsComponent,
        UserPostsComponent,
        UserTodosComponent,
        PostPageComponent,
        UserPageComponent,
        UsersPageComponent,
        CapitalizePipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        NgbPaginationModule.forRoot()
    ],
    providers: [
        UsersService,
        PostsService,
        CommentsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
