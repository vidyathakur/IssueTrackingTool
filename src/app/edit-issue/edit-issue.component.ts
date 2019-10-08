import { DialogBoxComponent } from './../dialog-box/dialog-box.component';

import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { UserService } from 'src/app/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Cookie } from 'ng2-cookies';
import { NgbModalOptions, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { IssueService } from 'src/app/issue.service';
import { saveAs } from 'file-saver';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as io from 'socket.io-client';
@Component({
	selector: 'app-edit-issue',
	templateUrl: './edit-issue.component.html',
	styleUrls: ['./edit-issue.component.css']
})
export class EditIssueComponent implements OnInit {
	@Input() receiverName: any;
	@Input() userLastName: string;
	@Input() messageRead: string;
	public firstChar: string;

	@Output() userNameAppear: EventEmitter<string> = new EventEmitter<string>();
	watcher: string;
	public currentUser;
	public images;
	public commentName: String;
	public title: string;
	public issueId: String;
	public watcherId: String;
	public description: string;
	public issueReporter: string;
	public issueDescription: string;
	public status: string;
	public reporter: string;
	public assignee: string;
	public issueImages: string;
	public allUsers;
	public allWatchers;
	public totalNotify: any;
	public commentData: any;
	fileUrl;
	myForm: FormGroup;
	public socket;
	attachmentList: any = [];
	closeResult: string;
	public userInfo: any;
	public fileName = [];
	public responseData: any;
	modalOptions: NgbModalOptions;
	constructor(
		private sanitizer: DomSanitizer,
		public toastr: ToastrManager,
		private http: HttpClient,
		public dialog: MatDialog,
		private modalService: NgbModal,
		public userService: UserService,
		private fb: FormBuilder,
		private _route: ActivatedRoute,
		public issueService: IssueService,
		public router: Router
	) {
		this.myForm = new FormGroup({
			title: new FormControl('', Validators.required),
			status: new FormControl('', Validators.required),
			description: new FormControl('', Validators.required),
			assignee: new FormControl('', Validators.required),
			reporter: new FormControl('', Validators.required),
			images: new FormControl('', Validators.required)
		});
		this.modalOptions = { backdrop: 'static', backdropClass: 'customBackdrop' };
		this.issueService.getAllUser().subscribe(
			data => {
				if (data.data != null) {
					this.allUsers = data.data;
					console.log(this.allUsers);
				} else {
				}
			},
			err => {
				console.log('some error occured');
				console.error(err);
			}
		);
	}

	allStatus = [
		{
			label: 'Backlog',
			id: 1
		},
		{
			label: 'In-Progress',
			id: 2
		},
		{
			label: 'In-Test',
			id: 3
		},
		{
			label: 'Done',
			id: 4
		}
	];

	ngOnInit() {
		this.totalNotification();
		this.commentName = Cookie.get('receiverName');
		this.firstChar = this.commentName[0];
		this.singleUser();

		let issueId = this._route.snapshot.paramMap.get('issueId');
		this.getAllWatcher(issueId);
		this.allCommentDetails(issueId);
		const data = 'some text';
		const blob = new Blob([data], { type: 'application/octet-stream' });

		this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));

		this.issueService.getSingleIssue(issueId).subscribe(
			data => {
				console.log(data);
				this.responseData = data['data'];
			},
			error => {
				console.log('some error occured');
				console.log(error.errorMessage);
			}
		);
	}

	backToHome() {
		this.router.navigate(['/dashboard']);
	}

	notific() {
		this.router.navigate(['/notifications']);
	}

	public createComment(): any {
		let issueData = {
			userId: this.currentUser.userId,
			issueId: this.responseData.issueId,
			description: this.issueDescription,
			images: this.issueImages,
			commentName: Cookie.get('receiverName')
		};
		const formData = new FormData();
		formData.append('file', this.images);

		this.http
			.post<any>('http://localhost:3000/file', formData)
			.subscribe(res => console.log(res), err => console.log(err));

		this.issueService.createComment(issueData).subscribe(
			apiResponse => {
				console.log(apiResponse);

				if (apiResponse.status === 200) {
					this.toastr.successToastr('Comment posted successful');
					this.modalService.dismissAll('Cross click');
					this.ngOnInit();
				} else {
					this.toastr.errorToastr(apiResponse.message);
				}
			},
			err => {
				this.toastr.errorToastr('some error occured');
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

	public allCommentDetails(issueId): any {
		this.issueService.getUserDetails(issueId).subscribe(
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

	public updateIssue(): any {
		this.issueService.editIssue(this.responseData.issueId, this.responseData).subscribe(
			data => {
				console.log(data);
				this.toastr.successToastr(' updated successfully', 'Success!');
				this.modalService.dismissAll('Cross click');
			},
			error => {
				console.log('some error occured');
				console.log(error.errorMessage);
				this.toastr.errorToastr('Some error occured', 'Oops!');
			}
		);
	}

	public singleUser(): any {
		let userId = Cookie.get('receiverId');
		this.issueService.getSingleUserInformation(Cookie.get('receiverId')).subscribe(
			data => {
				this.currentUser = data.data;
				console.log(this.currentUser);
			},
			error => {
				console.log('some error occured');
				console.log(error.errorMessage);
			}
		);
	}

	public createWatcher(): any {
		let watcherData = {
			userId: this.currentUser.userId,
			issueId: this.responseData.issueId,
			reporter: this.issueReporter
		};
		console.log(watcherData);

		this.issueService.createWatcher(watcherData).subscribe(
			apiResponse => {
				console.log(apiResponse);

				if (apiResponse.status === 200) {
					this.toastr.successToastr('Watcher added successful');
					this.modalService.dismissAll('Cross click');
					this.ngOnInit();
				} else {
					this.toastr.errorToastr(apiResponse.message);
				}
			},
			err => {
				this.toastr.errorToastr('some error occured');
			}
		);
	}

	public getAllWatcher(issueId): any {
		this.issueService.getAllWatcher(issueId).subscribe(
			data => {
				if (data.data != null) {
					this.allWatchers = data.data;
					console.log(this.allWatchers);
				} else {
				}
			},
			err => {
				console.log('some error occured');
				console.error(err);
			}
		);
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
				} // end condition
			},
			err => {
				this.toastr.errorToastr('some error occured');
			}
		);
	}; // end logout

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

	openDialog(watcherId, issueId): void {
		const dialogRef = this.dialog.open(DialogBoxComponent, {
			width: '50%',
			data: {
				watcherId: watcherId,
				issueId: issueId
			}
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
			location.reload();
		});
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

	public download = index => {
		let fileId = this.fileName[index];
		this.issueService.downloadAttachment(fileId).subscribe(response => {
			saveAs(response, response['filename']);
		});
	};
}
