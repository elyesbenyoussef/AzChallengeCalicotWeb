import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MockValues } from 'src/app/entities/mock.entity';
import { ProductEntity } from '../../../entities/product.entity'
import { AddComponent } from './add/add.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<ProductEntity>();
  paginatorInt: MatPaginatorIntl;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.paginatorInt = new MatPaginatorIntl();
    this.paginatorInt.firstPageLabel = 'Première page';
    this.paginatorInt.itemsPerPageLabel = 'Élément(s) par page';
    this.paginatorInt.lastPageLabel = 'Dernière page';
    this.paginatorInt.nextPageLabel = 'Page suivante';
    this.paginatorInt.previousPageLabel = "Page précédente";

    this.loadProducts();
  }

  loadProducts() {
    this.dataSource = new MatTableDataSource<ProductEntity>(MockValues.getProducts());
  }

  ngAfterViewInit() {
    this.paginator._intl = this.paginatorInt;
    this.dataSource.paginator = this.paginator;
  }

  AddProduct(): void {
    const dialogRef = this.dialog.open(AddComponent, {
      width: '250px',
      data: new ProductEntity()
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.loadProducts();
    });
  }

}



