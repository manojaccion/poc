import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as layout from './layout/index';
import { LoginComponent, ResetpasswordComponent, ForgotpasswordComponent, PagenotfoundComponent, ForbiddenComponent } from './common';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', component:layout.PublicLayoutComponent, children: [
    {path: 'login', component:LoginComponent},
    {path: 'forgotpassword', component: ForgotpasswordComponent},
    {path: 'resetpassword/:id', component: ResetpasswordComponent},
   // {path:"social",component:SocialComponent, data: { title: 'Myawana Social Login'}},
  //  {path:"social/:id",component:SocialComponent, data: { title: 'Myawana Social Login'}},
    {path: '', redirectTo: 'login', pathMatch: 'full'}
  ]},
  {path: 'pagenotfound', component: PagenotfoundComponent, data: { title: 'Page Not Found'}},
  {path: 'forbidden', component: ForbiddenComponent, data: { title: 'Unauthorized'}},
  {path: '',component: layout.AppLayoutComponent, children:[
    { path: '', redirectTo: 'dashboard', pathMatch: 'full', data: { title: ' Dashboard'}},
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
    // { path:'help',loadChildren:'./help/help.module#HelpModule'},
    // { path:'order', loadChildren:'./order/order.module#OrderModule'},
    // { path:'profile',loadChildren:'./profile/profile.module#ProfileModule'},
    // { path:'church',loadChildren:'./church/church.module#ChurchModule'},
    // { path:'manage-church',loadChildren:'./manage-church/managechurch.module#ManageChurchModule'},
    // {path:"notifications",component:NotificationsComponent, data: { title: 'Myawana Notifications'}}
  ], canActivateChild:[AuthGuard]},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full', data: { title: ' Dashboard'}},
  {path: '**', redirectTo: 'pagenotfound', data: { title: 'Page Not Found'}}
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
