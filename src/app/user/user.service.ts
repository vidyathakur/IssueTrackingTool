import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	private baseUrl = environment.baseUrl;
	constructor(public http: HttpClient) {}
	public getUserInfoFromLocalstorage = () => {
		return JSON.parse(localStorage.getItem('userInfo'));
	};

	public setUserInfoInLocalStorage = data => {
		localStorage.setItem('userInfo', JSON.stringify(data));
	};

	public signupFunction(data): Observable<any> {
		const params = new HttpParams()
			.set('firstName', data.firstName)
			.set('lastName', data.lastName)
			.set('password', data.password)
			.set('email', data.email)
			.set('mobile', data.mobile);

		return this.http.post(`${this.baseUrl}/signup`, params);
	}

	public createIssue(data): Observable<any> {
		console.log(this.setUserInfoInLocalStorage);
		const params = new HttpParams()
			.set('title', data.title)
			.set('status', data.status)
			.set('description', data.description)
			.set('reporter', data.reporter)
			.set('assignee', data.assignee)
			.set('images', data.images)
			.set('issueId', data.issueId);

		return this.http.post('/create' + '?authToken=' + Cookie.get('authtoken'), params);
	}

	public signinFunction(data): Observable<any> {
		const params = new HttpParams().set('email', data.email).set('password', data.password);
		return this.http.post(`${this.baseUrl}/login`, params);
	}

	public googleFunction(data): Observable<any> {
		const params = new HttpParams().set('email', data.email).set('password', data.password);
		return this.http.post(`${this.baseUrl}/sociallogin`, params);
	}

	public logout(): Observable<any> {
		const params = new HttpParams().set('authToken', Cookie.get('authtoken'));
		return this.http.post(`${this.baseUrl}/logout`, params);
	}

	private handleError(err: HttpErrorResponse) {
		let errorMessage = '';
		if (err.error instanceof Error) {
			errorMessage = `An error occurred: ${err.error.message}`;
		} else {
			errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
		}
		console.error(errorMessage);
		return Observable.throw(errorMessage);
	}
}
