import { CommentComponent } from './comment/comment.component';
import { NotificationComponent } from './notification/notification.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/user/login/login.component';
import { SignupComponent } from 'src/app/user/signup/signup.component';
import { EditIssueComponent } from 'src/app/edit-issue/edit-issue.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
{path:'signup', component:SignupComponent},
{path: 'edit-issue/:issueId', component:EditIssueComponent},
{path: 'edit-issue', component:EditIssueComponent},
{path: 'notifications', component:NotificationComponent},
{path: 'comments/:issueId/:notifyId', component:CommentComponent},
 {path : 'dashboard',loadChildren: 'src/app/dashboard/dashboard.module#DashboardModule'
},
	{
		path: '**',
		redirectTo: 'login'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
