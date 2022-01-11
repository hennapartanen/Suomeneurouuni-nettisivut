import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule} from '@angular/flex-layout';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule} from '@angular/material/menu';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FooterComponent } from './footer/footer.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent

  ],
  imports: [
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
  
  

     

     
  ],
  providers: [ScrollDispatcher],
  bootstrap: [AppComponent]
})
export class AppModule { }
