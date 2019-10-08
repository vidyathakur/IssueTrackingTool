import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrManager } from 'ng6-toastr-notifications';
import { UserService } from 'src/app/user/user.service';
@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	public firstName: any;
	public lastName: any;
	public password: any;
	public mobile: any;
	public email: any;

	constructor(
		public router: Router,
		public http: HttpClient,
		public toastr: ToastrManager,
		public userService: UserService
	) {}

	ngOnInit() {}
	public goToSignIn: any = () => {
		this.router.navigate(['/login']);
	};

	public signupFunction: any = () => {
		if (!this.firstName) {
			this.toastr.warningToastr('enter first name');
		} else if (!this.lastName) {
			this.toastr.warningToastr('enter last name');
		} else if (!this.password) {
			this.toastr.warningToastr('enter password');
		} else if (!this.mobile) {
			this.toastr.warningToastr('enter mobile');
		} else if (!this.email) {
			this.toastr.warningToastr('enter email');
		} else {
			let data = {
				firstName: this.firstName,
				lastName: this.lastName,
				password: this.password,
				mobile: this.mobile,
				email: this.email
			};

			console.log(data);

			this.userService.signupFunction(data).subscribe(
				apiResponse => {
					console.log(apiResponse);

					if (apiResponse.status === 200) {
						this.toastr.successToastr('Signup successful');

						setTimeout(() => {
							this.goToSignIn();
						}, 2000);
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
