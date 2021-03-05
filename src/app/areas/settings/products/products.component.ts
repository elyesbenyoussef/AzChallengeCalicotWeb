import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EnveloppeReponseBase } from 'src/app/entities/enveloppe-reponse.entity';
import { CollectionService } from 'src/app/services/collection.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { ProductEntity } from '../../../entities/product.entity'
import { AddComponent } from './add/add.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit, AfterViewInit {

  @Input() products: ProductEntity[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'actions'];
  dataSource = new MatTableDataSource<ProductEntity>();
  paginatorInt: MatPaginatorIntl;

  constructor(public dialog: MatDialog,
    private snackbarService: SnackbarService,
    private collectionService: CollectionService) {
  }

  ngOnInit(): void {
    this.paginatorInt = new MatPaginatorIntl();
    this.paginatorInt.firstPageLabel = 'Première page';
    this.paginatorInt.itemsPerPageLabel = 'Élément(s) par page';
    this.paginatorInt.lastPageLabel = 'Dernière page';
    this.paginatorInt.nextPageLabel = 'Page suivante';
    this.paginatorInt.previousPageLabel = "Page précédente";

    this.dataSource = new MatTableDataSource<ProductEntity>(this.products);
  }

  loadProducts() {
    this.collectionService.GetAllProducts().subscribe((reponse: EnveloppeReponseBase<ProductEntity[]>) => {
      if (reponse.isValid) {
        this.products = reponse.data;
        this.dataSource = new MatTableDataSource<ProductEntity>(reponse.data);
        this.dataSource._updateChangeSubscription();
      }
    })
  }

  ngAfterViewInit() {
    this.paginator._intl = this.paginatorInt;
    this.dataSource.paginator = this.paginator;
  }

  AddProduct(): void {
    const dialogRef = this.dialog.open(AddComponent, {
      data: new ProductEntity()
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.loadProducts();
    });
  }

  supprimer(produitId: number) {
    console.log(produitId);
    const product = this.dataSource.data.find(x => x.produitId === produitId);
    this.collectionService.DeleteProduct(product).subscribe((reponse: EnveloppeReponseBase<Boolean>) => {
      if (reponse.data) {
        this.dataSource.data.forEach((element, index) => {
          if (element.produitId === produitId) { this.dataSource.data.splice(index, 1); }
        });
        this.dataSource._updateChangeSubscription();
        this.snackbarService.openSnackBarSuccess();
      }
    });
  }

}



