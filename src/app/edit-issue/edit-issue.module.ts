import { DialogBoxComponent } from './../dialog-box/dialog-box.component';
import { ReplacePipe } from './../shared/pipe/replace.pipe';
import { EditIssueComponent } from './edit-issue.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxEditorModule } from 'ngx-editor';
import { ImageViewerModule } from 'ng2-image-viewer';


@NgModule({
  declarations: [EditIssueComponent, ReplacePipe],
  imports: [
    CommonModule,
    ImageViewerModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxEditorModule,
  ],
  exports: [EditIssueComponent],
  entryComponents:[
    DialogBoxComponent
  ]
})
export class EditIssueModule { }
