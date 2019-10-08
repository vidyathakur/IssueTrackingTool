import { Component, OnInit, Input } from '@angular/core';
import { IssueService } from 'src/app/issue.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as io from 'socket.io-client';
import { UserService } from 'src/app/user/user.service';
import { Cookie } from 'ng2-cookies';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgbModalOptions, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-comment',
	templateUrl: './comment.component.html',
	styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
	@Input() receiverName: any;
	@Input() userLastName: string;
	@Input() messageRead: string;
	closeResult: string;
	public firstChar: string;
	public notification;
	public socket;
	public commentName: String;
	public totalNotify: any;
	public issueId: String;
	public commentData: any;
	myForm: FormGroup;
	constructor(
		public router: Router,
		private modalService: NgbModal,
		private _route: ActivatedRoute,
		public toastr: ToastrManager,
		public userService: UserService,
		public issueService: IssueService
	) {
		this.myForm = new FormGroup({
			description: new FormControl('', Validators.required)
		});
	}

	ngOnInit() {
		this.commentName = Cookie.get('receiverName');
		this.firstChar = this.commentName[0];
		let issueId = this._route.snapshot.paramMap.get('issueId');
		let notifyId = this._route.snapshot.paramMap.get('notifyId');
		this.getAllComment(issueId, notifyId);
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

	public getAllComment(issueId, notifyId): any {
		this.issueService.getAllComments(issueId, notifyId).subscribe(
			data => {
				if (data.data != null) {
					this.commentData = data.data;
					console.log(this.commentData);
				} else {
				}
			},
			err => {
				console.log('some error occured');
				console.error(err);
			}
		);
	}

	backToHome() {
		this.router.navigate(['/notifications']);
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

	open(content) {
		this.modalService.open(content, { size: 'lg' }).result.then(
			result => {
				this.closeResult = `Closed with: ${result}`;
			},
			reason => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			}
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
}
