import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Cookie } from 'ng2-cookies';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, SocialUser, AuthService } from 'ng4-social-login';
import { UserService } from 'src/app/user/user.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	public user: any = SocialUser;
	public email: any;
	public userData;
	public password: any;
	private loggedIn: boolean;
	constructor(
		public router: Router,
		public http: HttpClient,
		public userService: UserService,
		private socialAuthService: AuthService,
		public toastr: ToastrManager
	) {}

	ngOnInit() {}

	googlelogin() {
		this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(userData => {
			this.user = userData;
			let data = { email: this.userData, password: this.userData };
			this.userService.googleFunction(userData).subscribe(
				apiResponse => {
					if (apiResponse.status === 200) {
						console.log(apiResponse);

						Cookie.set('authtoken', apiResponse.data.authToken);

						Cookie.set('receiverId', apiResponse.data.userDetails.userId);

						Cookie.set('receiverissueId', apiResponse.data.userDetails.issueId);

						Cookie.set('receiverwatcherId', apiResponse.data.userDetails.watcherId);

						Cookie.set(
							'receiverName',
							apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName
						);

						this.userService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
						if (apiResponse.data.userDetails) {
							this.router.navigate(['/dashboard', 'main-content']);
						}
					} else {
						this.toastr.errorToastr(apiResponse.message);
					}
				},
				err => {
					this.toastr.errorToastr('some error occured');
				}
			);

			console.log(this.user);
		});
	}

	public goToSignup: any = () => {
		this.router.navigate(['/signup']);
	};

	public signinFunction: any = () => {
		if (!this.email) {
			this.toastr.warningToastr('enter email');
		} else if (!this.password) {
			this.toastr.warningToastr('enter password');
		} else {
			let data = {
				email: this.email,
				password: this.password
			};

			this.userService.signinFunction(data).subscribe(
				apiResponse => {
					if (apiResponse.status === 200) {
						console.log(apiResponse);

						Cookie.set('authtoken', apiResponse.data.authToken);

						Cookie.set('receiverId', apiResponse.data.userDetails.userId);

						Cookie.set('receiverissueId', apiResponse.data.userDetails.issueId);

						Cookie.set('receiverwatcherId', apiResponse.data.userDetails.watcherId);

						Cookie.set(
							'receiverName',
							apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName
						);

						this.userService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
						if (apiResponse.data.userDetails) {
							this.router.navigate(['/dashboard', 'main-content']);
						}
					} else {
						this.toastr.errorToastr(apiResponse.message);
					}
				},
				err => {
					this.toastr.errorToastr('some error occured');
				}
			);
		}
	};
}
