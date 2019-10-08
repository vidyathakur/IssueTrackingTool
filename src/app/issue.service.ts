import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class IssueService {
	private baseUrl = environment.baseUrl;
	constructor(public http: HttpClient, private router: Router) {}

	private handleError(err: HttpErrorResponse) {
		console.log('Handle error Http calls');
		console.log(err.message);
		return Observable.throw(err.message);
	}

	public getUserInfoFromLocalstorage = () => {
		return JSON.parse(localStorage.getItem('userInfo'));
	}; // end getUserInfoFromLocalstorage

	public setUserInfoInLocalStorage = data => {
		localStorage.setItem('userInfo', JSON.stringify(data));
	};

	getAllUser(): any {
		let myResponse = this.http.get(this.baseUrl + '/all/' + '?authToken=' + Cookie.get('authtoken'));
		console.log(myResponse);
		return myResponse;
	}

	public getSingleUserInformation(currentUserId): any {
		console.log(currentUserId);
		let myResponse = this.http.get(
			this.baseUrl + '/' + currentUserId + '/details' + '?authToken=' + Cookie.get('authtoken')
		);
		return myResponse;
	}
	getAllIssue(userId): any {
		console.log(userId);
		let myResponse = this.http.get(this.baseUrl + '/view/all/' + userId + '?authToken=' + Cookie.get('authtoken'));
		console.log(myResponse);
		return myResponse;
	}

	public getSingleIssue(currentissueId): any {
		console.log(currentissueId);
		let myResponse = this.http.get(
			this.baseUrl + '/view' + '/' + currentissueId + '?authToken=' + Cookie.get('authtoken')
		);
		console.log(myResponse);
		return myResponse;
	}

	public createIssue(issueData): any {
		let myResponse = this.http.post(this.baseUrl + '/create' + '?authToken=' + Cookie.get('authtoken'), issueData);
		return myResponse;
	}

	public deleteIssue(issueId): any {
		let data = {};
		let myResponse = this.http.post(
			this.baseUrl + '/' + issueId + '/delete' + '?authToken=' + Cookie.get('authtoken'),
			data
		);
		return myResponse;
	}

	public editIssue(issueId, issueData): any {
		let myResponse = this.http.put(
			this.baseUrl + '/' + issueId + '/edit' + '?authToken=' + Cookie.get('authtoken'),
			issueData
		);
		return myResponse;
	}

	public createComment(issueData): any {
		let myResponse = this.http.post(
			this.baseUrl + '/create/comment/' + '?authToken=' + Cookie.get('authtoken'),
			issueData
		);
		return myResponse;
	}

	public getUserDetails(issueId): any {
		let myResponse = this.http.get(
			this.baseUrl + '/all/allComments/' + issueId + '?authToken=' + Cookie.get('authtoken')
		);
		console.log(myResponse);
		return myResponse;
	}

	public getAllComments(issueId, notifyId): any {
		let myResponse = this.http.get(
			this.baseUrl + '/view/all/comments/' + issueId + '/' + notifyId + '?authToken=' + Cookie.get('authtoken')
		);
		console.log(myResponse);
		return myResponse;
	}

	public createWatcher(watcherData): any {
		let myResponse = this.http.post(
			this.baseUrl + '/create/watcher/' + '?authToken=' + Cookie.get('authtoken'),
			watcherData
		);
		return myResponse;
	}

	public getAllWatcher(issueId): any {
		let myResponse = this.http.get(
			this.baseUrl + '/view/all/watcher/' + issueId + '?authToken=' + Cookie.get('authtoken')
		);
		console.log(myResponse);
		return myResponse;
	}

	getAllNotification(): any {
		let myResponse = this.http.get(this.baseUrl + '/all/notifications/' + '?authToken=' + Cookie.get('authtoken'));
		console.log(myResponse);
		return myResponse;
	}

	public deleteWatcher(watcherId, issueId): any {
		let data = {};
		let myResponse = this.http.post(
			this.baseUrl + '/view/delete/watcher/' + watcherId + '/' + issueId + '?authToken=' + Cookie.get('authtoken'),
			data
		);
		return myResponse;
	}

	downloadFile(file: String) {
		var body = { filename: file };
		return this.http.post('http://localhost:3000/file/download', body, {
			responseType: 'blob',
			headers: new HttpHeaders().append('Content-Type', 'application/json')
		});
	}

	public downloadAttachment = file => {
		return this.http.get(`/api/download/${file}`, {
			responseType: 'blob',
			headers: { 'Content-type': 'text/xml' }
		});
	};
}
