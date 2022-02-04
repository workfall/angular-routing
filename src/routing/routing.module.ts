import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { ContactusComponent } from '../app/components/contactus/contactus.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contact-us', component: ContactusComponent },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
