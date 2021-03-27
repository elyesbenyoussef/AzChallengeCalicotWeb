import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.less']
})
export class UploadComponent implements OnInit {

  filename = '';
  url = '';

  @Output() imageSourceEvent = new EventEmitter<{url: string, nom: string}>();

  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
  }

  setFilename(files) {
    if (files[0]) {
      this.filename = files[0].name;
    }
  }

  save(files) {
    const formData = new FormData();

    if (files[0]) {
      formData.append(files[0].name, files[0]);
    }

    this.uploadService
      .upload(formData)
      .subscribe(({ path }) => {
        this.imageSourceEvent.emit({url: path, nom:files[0].name});
        this.url = path;
      });
  }

}
