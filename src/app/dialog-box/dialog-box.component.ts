import { Issue } from './../dashboard/issue';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrManager } from 'ng6-toastr-notifications';
import { IssueService } from 'src/app/issue.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-dialog-box',
	templateUrl: './dialog-box.component.html',
	styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {
	constructor(
		public router: Router,
		public issueService: IssueService,
		public toastr: ToastrManager,
		public dialogRef: MatDialogRef<DialogBoxComponent>,
		@Inject(MAT_DIALOG_DATA) public data: Issue
	) {}

	ngOnInit() {}

	onNoClick(): void {
		this.dialogRef.close();
	}

	deleteThisWatcher(watcherId, issueId) {
		this.issueService.deleteWatcher(watcherId, issueId).subscribe(
			data => {
				this.toastr.successToastr('Watchers Deleted successfully', 'Success!');
				setTimeout(() => {
					this.dialogRef.close();
				}, 1000);
			},
			error => {
				console.log('some error occured');
				console.log(error.errorMessage);
				this.toastr.errorToastr('Some error occured', 'Oops!');
			}
		);
	}
}
