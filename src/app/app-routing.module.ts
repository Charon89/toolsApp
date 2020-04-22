import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactsComponent} from './contacts/contacts.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {NewToolComponent} from './new-tool/new-tool.component';
import {AdminAllToolsComponent} from './admin-all-tools/admin-all-tools.component';
import {ToolViewComponent} from './tool-view/tool-view.component';

const routes: Routes = [
  {path: 'contacts', component: ContactsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'tool/:_id', component: ToolViewComponent},
  {path: 'admin/newTool', component: NewToolComponent},
  {path: 'admin', component: AdminAllToolsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
