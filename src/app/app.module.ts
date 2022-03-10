
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { GalleryDivComponent } from './gallery-div/gallery-div.component';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TopicsComponent } from './topics/topics.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from "@angular/material/list";
import { ChatbotComponent } from './chatbot/chatbot.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormbtnComponent } from './chatbot/formbtn/formbtn.component';
import { FormsComponent } from './chatbot/forms/forms.component';
import { GalleryItemitDetailComponent } from './gallery-itemit/gallery-itemit-detail/gallery-itemit.detail.component';
import { GalleryItemitService } from './gallery-itemit/gallery-itemit.service'; 
import { GalleryItemitEditComponent } from './gallery-itemit/gallery-itemit-edit/gallery-itemit-edit.component';
import { GalleryItemitItemComponent } from './gallery-itemit/gallery-itemit-list/gallery-itemit-item/gallery-itemit-item.component';
import { GalleryItemitListComponent } from './gallery-itemit/gallery-itemit-list/gallery-itemit-list.component';
import { GalleryItemitStartComponent } from './gallery-itemit/gallery-itemit-start/gallery-itemit-start.component';
import { GalleryItemitComponent } from './gallery-itemit/gallery-itemit.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    GalleryDivComponent,
    ContentComponent,
    FooterComponent,
    AuthComponent,
    HomepageComponent,
    TopicsComponent,
    ChatbotComponent,
    FormbtnComponent,
    FormsComponent,
    GalleryItemitDetailComponent,
  GalleryListComponent,
  GalleryItemitItemComponent,
  GalleryItemitEditComponent,
  GalleryItemitListComponent,
  GalleryItemitStartComponent,
  GalleryItemitComponent
 


  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    ScrollingModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    FontAwesomeModule

  ],
  providers: [ScrollDispatcher, GalleryService, GalleryItemitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
