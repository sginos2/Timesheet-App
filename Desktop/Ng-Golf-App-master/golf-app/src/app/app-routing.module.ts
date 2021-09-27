import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameSetupComponent } from './components/game-setup/game-setup.component';
import { ScorecardComponent } from './components/scorecard/scorecard.component';

const routes: Routes = [
  {path: '', redirectTo: 'gameSetup', pathMatch: 'full'},
  {path: 'gameSetup', component: GameSetupComponent},
  {path: 'scorecard', component: ScorecardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
