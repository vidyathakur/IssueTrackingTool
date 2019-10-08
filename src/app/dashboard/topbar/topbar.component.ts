import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { UserService } from 'src/app/user/user.service';
import { Cookie } from 'ng2-cookies';
import { IssueService } from 'src/app/issue.service';
import { HttpClient } from '@angular/common/http';
import * as io from 'socket.io-client';
@Component({
	selector: 'app-topbar',
	templateUrl: './topbar.component.html',
	styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
	public socket;
	public totalNotify: any;
	constructor(
		public toastr: ToastrManager,
		private http: HttpClient,
		public issueService: IssueService,
		public userService: UserService,
		public router: Router
	) {

	}

	ngOnInit() {
		this.totalNotification();
	}

	public totalNotification(): any {
		this.socket = io('http://localhost:3000');
		this.socket.emit('comment');
		this.socket.on('notification', data => {
			this.totalNotify = data.total_notify;
		});
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
