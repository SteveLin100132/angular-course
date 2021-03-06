/**
 * 專案名稱： wcd-course
 * 部門代號： ML8100
 * 檔案說明： App Routing
 * @CREATE Wednesday, 2nd January 2019 9:45:48 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { CommunicationComponent } from './communication/communication.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { RoutingComponent } from './routing/routing.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'structural-directives', component: StructuralDirectivesComponent, pathMatch: 'full' },
  { path: 'communication', component: CommunicationComponent, pathMatch: 'full' },
  { path: 'form-builder', component: FormBuilderComponent, pathMatch: 'full' },
  { path: 'routing', component: RoutingComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
