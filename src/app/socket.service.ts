import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Cookie } from 'ng2-cookies';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

@Injectable({
	providedIn: 'root'
})
export class SocketService {
	public arr;
	private socket = io('http://localhost:3000',{
		reconnection: true,
    reconnectionDelay: 1000,
    reconnectionDelayMax : 5000,
    reconnectionAttempts: 99999
	});
	constructor(public http: HttpClient) {
		this.socket.emit('comments_data');
	}

	commentUser() : any {
		let datas = [];
		this.socket.on('notification', (data) => {
		
		});
		
		return datas;
	}
}


