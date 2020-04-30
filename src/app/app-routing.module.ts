import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactsComponent} from './contacts/contacts.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {NewToolComponent} from './new-tool/new-tool.component';
import {AdminAllToolsComponent} from './admin-all-tools/admin-all-tools.component';
import {ToolViewComponent} from './tool-view/tool-view.component';
import {EditToolComponent} from './edit-tool/edit-tool.component';
import {GuardAuthService} from './guard-auth.service';

const routes: Routes = [
  {path: 'contacts', component: ContactsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin/tool/:id', component: EditToolComponent, canActivate: [GuardAuthService]},
  {path: 'tool/:_id', component: ToolViewComponent, canActivate: [GuardAuthService]},
  {path: 'admin/newTool', component: NewToolComponent, canActivate: [GuardAuthService]},
  {path: 'admin', component: AdminAllToolsComponent, canActivate: [GuardAuthService]},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
