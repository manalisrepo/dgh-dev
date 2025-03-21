import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-fileUpload-lib',
  templateUrl: './file-upload-lib.component.html',
  styleUrl: './file-upload-lib.component.scss',
})
export class FileUploadLibComponent {
  @Input() allowedTypes: string[] = [];
  @Input() maxSize = 5; // MB
  @Input() multiple = false;
  @Output() filesUploaded = new EventEmitter<File[]>();

  uploadedFiles: File[] = [];

  onFileSelect(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      this.processFiles(Array.from(target.files));
    }
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer?.files) {
      this.processFiles(Array.from(event.dataTransfer.files));
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
  }

  private processFiles(files: File[]) {
    const validFiles = files.filter((file) => this.isValidFile(file));
    this.uploadedFiles = validFiles;
    this.filesUploaded.emit(validFiles);
  }

  private isValidFile(file: File): boolean {
    const isValidType = this.allowedTypes.includes(file.type);
    const isValidSize = file.size / 1024 / 1024 <= this.maxSize;
    return isValidType && isValidSize;
  }
}
