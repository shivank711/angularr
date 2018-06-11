import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { MatDialog, MatDialogRef} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {DishService} from './services/dish.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule} from'@angular/platform-browser/animations'; 
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PromotionService } from './services/promotion.service';
import { LoginComponent } from './login/login.component';
import { FormsModule} from '@angular/forms';
import { MatInputModule} from '@angular/material';
import {MatDividerModule} from '@angular/material/divider';
import { ReactiveFormsModule} from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSelectModule
  ],
  
  providers: [ DishService, PromotionService ],
  
  entryComponents : [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
