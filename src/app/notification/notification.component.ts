import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IssueService } from 'src/app/issue.service';
import * as io from 'socket.io-client';
import { UserService } from 'src/app/user/user.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Cookie } from 'ng2-cookies';
@Component({
	selector: 'app-notification',
	templateUrl: './notification.component.html',
	styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
	public notification;
	public socket;
	public totalNotify: any;
	constructor(
		public router: Router,
		public toastr: ToastrManager,
		public userService: UserService,
		public issueService: IssueService
	) {}

	ngOnInit() {
		this.totalNotification();
		console.log('vidya');
		this.issueService.getAllNotification().subscribe(
			data => {
				if (data.data != null) {
					this.notification = data.data;
					console.log(this.notification);
				} else {
				}
			},
			err => {
				console.log('some error occured');
				console.error(err);
			}
		);
	}

	public totalNotification(): any {
		this.socket = io('http://localhost:3000');
		this.socket.emit('comment');
		this.socket.on('notification', data => {
			this.totalNotify = data.total_notify;
		});
	}

	backToHome() {
		this.router.navigate(['/dashboard']);
	}

	goToDashboard(issueId, notify) {
		console.log(issueId);
		this.router.navigate(['/comments', issueId, notify]);
	}

	public logout: any = () => {
		this.userService.logout().subscribe(
			apiResponse => {
				if (apiResponse.status === 200) {
					Cookie.delete('authtoken');

					Cookie.delete('receiverId');

					Cookie.delete('receiverName');

					this.router.navigate(['/login']);
				} else {
					this.toastr.errorToastr(apiResponse.message);
				}
			},
			err => {
				this.toastr.errorToastr('some error occured');
			}
		);
	};
}
