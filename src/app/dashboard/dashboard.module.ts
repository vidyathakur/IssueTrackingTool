
import { CommentModule } from './../comment/comment.module';
import { EditIssueModule } from './../edit-issue/edit-issue.module';
import { DashboardRouteGuard } from './dashboard-route.guard';
import { MainContentComponent } from 'src/app/dashboard/main-content/main-content.component';
import { MaterialModule } from './../shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from 'src/app/dashboard/sidebar/sidebar.component';
import { TopbarComponent } from 'src/app/dashboard/topbar/topbar.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { DashboardRoutingModule } from 'src/app/dashboard/dashboard-routing.module';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileUploadModule } from 'ng2-file-upload';
import { ImageViewerModule } from 'ng2-image-viewer';
import { NotificationModule } from 'src/app/notification/notification.module';


@NgModule({
	declarations: [DashboardComponent, SidebarComponent, MainContentComponent, TopbarComponent],
	imports: [
		CommonModule,
		MaterialModule,
		FormsModule,
		ImageViewerModule,
		FileUploadModule,
		HttpClientModule,
		ReactiveFormsModule,
		NgxEditorModule,
		NgbModule,
		EditIssueModule,
		NotificationModule,
		CommentModule,
		DashboardRoutingModule
	],
	providers: [DashboardRouteGuard]
})
export class DashboardModule {}
