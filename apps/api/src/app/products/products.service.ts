import { Injectable } from '@nestjs/common';

import {
  MockRepositoryImpl,
  Product,
  ProductRepository,
} from '@crefaz-monorepo/shared/data-access';

@Injectable()
export class ProductsService
  extends MockRepositoryImpl<Product>
  implements ProductRepository
{
  constructor() {
    super([{ id: 1, name: 'Hallison' }]);
  }
}
