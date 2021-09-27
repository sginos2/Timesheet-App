import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { GameSetupComponent } from './components/game-setup/game-setup.component';
import { ScorecardComponent } from './components/scorecard/scorecard.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    GameSetupComponent,
    ScorecardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ScorecardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
