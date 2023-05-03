import { ProductRepository } from '../infrastructure';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../entities';

export class ProductFacade {
  #products = new BehaviorSubject<Product[]>([]);
  products$ = this.#products.asObservable();

  constructor(private repository: ProductRepository) {}
  load() {
    this.repository.findAll().subscribe((products) => {
      this.#products.next(products);
    });
  }
}
