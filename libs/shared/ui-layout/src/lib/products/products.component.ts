import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductsDataSource, ProductsItem } from './products-datasource';
import { Di } from '@crefaz-monorepo/shared/util-di';
import { ProductFacade } from '@crefaz-monorepo/shared/data-access';

@Component({
  selector: 'ui-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ProductsItem>;
  dataSource: ProductsDataSource;

  // productFacade = Di.use(ProductFacade);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor(readonly productFacade: ProductFacade) {
    this.dataSource = new ProductsDataSource();
    console.log(this.productFacade);

    this.productFacade.load();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    // this.table.dataSource = this.dataSource;
  }
}
