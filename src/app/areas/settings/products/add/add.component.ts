import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AccueilService } from 'src/app/areas/accueil/accueil.service';
import { MockValues } from 'src/app/entities/mock.entity';
import { ProductEntity } from 'src/app/entities/product.entity';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class AddComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductEntity,
    private accueilService: AccueilService) { }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }
  onAddClick() {
    let product = new ProductEntity();
    this.data.id = MockValues.getProducts().length + 1;
    product.name = '';
    product.description = '';
    product.price = 0;
    product.imageSrc = '';
    MockValues.add(this.data);

    this.accueilService.AddProduct(this.data).subscribe((res) => {
      this.dialogRef.close();
    });
  }
}
