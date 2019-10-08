import { MainContentComponent } from 'src/app/dashboard/main-content/main-content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { DashboardRouteGuard } from 'src/app/dashboard/dashboard-route.guard';

const routes: Routes = [
	{
		path: 'dashboard',
		component: DashboardComponent,
		children: [
			{ path: 'main-content', component: MainContentComponent, canActivate: [DashboardRouteGuard] },
			{
				path: '**',
				redirectTo: 'main-content'
			}
		]
	}
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule {}
