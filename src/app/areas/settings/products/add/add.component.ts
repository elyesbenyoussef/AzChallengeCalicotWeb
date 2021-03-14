import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductEntity } from 'src/app/entities/product.entity';
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class AddComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductEntity,
    private collectionService: CollectionService) { }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }
  onAddClick() {
    this.collectionService.AddProduct(this.data).subscribe((res) => {
      this.dialogRef.close();
    });
  }

  addImageSource(newImageSource: string) {
    this.data.imageSrc = newImageSource;
  }

  isValid(): boolean {
    if (this.nomValidation() && this.imageValidation() && this.descriptionValidation() && this.prixValidation()) {
      return true;
    }

    return false;
  }

  imageValidation(): boolean {
    if (this.data.imageSrc && this.data.imageSrc.length > 0) { return true; }
    return false;
  }

  nomValidation(): boolean {
    if (this.data.nom && this.data.nom.length > 0) { return true; }
    return false;
  }

  descriptionValidation(): boolean {
    if (this.data.description && this.data.description.length > 0) { return true; }
    return false;
  }

  prixValidation(): boolean {
    if (this.data.prix && this.data.prix > 0) { return true; }
    return false;
  }

}
