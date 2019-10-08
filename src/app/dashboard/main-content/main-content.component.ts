import { IssueService } from './../../issue.service';
import { Issue } from './../issue';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import * as _ from 'lodash';
import { HttpClient } from '@angular/common/http';
import { Cookie } from 'ng2-cookies';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import { saveAs } from 'file-saver';

@Component({
	selector: 'app-main-content',
	templateUrl: './main-content.component.html',
	styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit, AfterViewInit {
	attachmentList: any = [];
	public images;
	public currentUser;
	public issueId: String;
	public allUsers;
	public issueTitle: string;
	public issueStatus: string;
	public issueDescription: string;
	public issueReporter: string;
	public issueAssignee: string;
	public issueImages: string;
	public userInfo: any;
	public totalNotify: any;
	public socket;
	closeResult: string;
	modalOptions: NgbModalOptions;
	displayedColumns: string[] = ['title', 'status', 'description', 'reporter', 'assignee', 'createdOn'];
	dataSource = new MatTableDataSource<Issue>();

	issue: any = [];
	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}
	constructor(
		public dialog: MatDialog,
		private _route: ActivatedRoute,
		private modalService: NgbModal,
		public toastr: ToastrManager,
		public router: Router,
		private http: HttpClient,
		public userService: UserService,
		public issueService: IssueService,
		private fb: FormBuilder
	) {
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
		this.modalOptions = {
			backdrop: 'static',
			backdropClass: 'customBackdrop'
		};
	}
	@ViewChild(MatPaginator, { static: true })
	paginator: MatPaginator;
	@ViewChild(MatSort, { static: true })
	sort: MatSort;

	statusPercentage: number;
	selectedStatus: any = {};
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
	selectStatus(issueId) {
		if (!!!issueId) return;
		this.selectedStatus[issueId] = !this.selectedStatus[issueId];
		const arr = _.toArray(this.selectedStatus);
		const trues = _.filter(arr, r => r === true).length;
		const arrLength = this.allStatus.length;
		this.statusPercentage = trues / arrLength * 100;
	}

	ngOnInit() {
		this.singleUser();
		let userId = Cookie.get('receiverId');
		this.issueService.getAllIssue(userId).subscribe(
			data => {
				//console.log(data);
				let arrData = [];
				let arrayValue = data.data;
				arrayValue.forEach(item => {
					let data = {};
					const arrLength = this.allStatus.length;
					data['assignee'] = item.assignee;
					data['reporter'] = item.reporter;
					data['createdOn'] = item.createdOn;
					data['description'] = item.description;
					data['issueId'] = item.issueId;
					data['status'] = item.status;
					data['title'] = item.title;

					data['percentage'] = item.status / arrLength * 100;
					data['reporter_name'] =
						item.reporter_details[0]['firstName'] + ' ' + item.reporter_details[0]['lastName'];
					data['assignee_name'] =
						item.assignee_details[0]['firstName'] + ' ' + item.assignee_details[0]['lastName'];
					arrData.push(data);
				});

				this.dataSource.data = arrData;
				console.log(this.dataSource.data);
			},
			err => {
				console.log('some error occured');
				console.error(err);
				this.toastr.errorToastr('Some error occured', 'Oops!');
			}
		);
	}

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
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

	public createIssue(): any {
		let issueData = {
			userId: this.currentUser.userId,
			title: this.issueTitle,
			status: this.issueStatus,
			description: this.issueDescription,
			reporter: this.issueReporter,
			assignee: this.issueAssignee,
			images: this.issueImages.replace(/^.*\\/, "")
		};
		console.log(issueData);
		const formData = new FormData();
		formData.append('file', this.images);
		
		this.http
			.post<any>('http://localhost:3000/file', formData)
			.subscribe(res => console.log(res), err => console.log(err));
		console.log(issueData);
		
		this.issueService.createIssue(issueData).subscribe(
			apiResponse => {
				console.log(apiResponse);

				if (apiResponse.status === 200) {
					this.toastr.successToastr('Issue created successful');
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

	open(content) {
		this.modalService.open(content, { size: 'xl' }).result.then(
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

	selectImage(event) {
		if (event.target.files.length > 0) {
			const file = event.target.files[0];
			console.log(file.name);
			this.images = file;
		}
	}

	download(index) {
		var filename = this.attachmentList[index].uploadname;
			this.issueService
			.downloadFile(filename)
			.subscribe(data => saveAs(data, filename), error => console.error(error));
	}
}
