import {
  Http,
  HttpImpl,
  MockRepositoryImpl,
  Product,
  ProductFacade,
  ProductRepository,
  ProductRepositoryImpl,
} from '@crefaz-monorepo/shared/data-access';
import { Di, Token } from '@crefaz-monorepo/shared/util-di';

const URL_TOKEN = new Token('url.token');
Di.add(URL_TOKEN, 'http://localhost:3003/api');

const url = Di.use(URL_TOKEN);
console.log(url);

Di.add(Http, HttpImpl, [URL_TOKEN]);
const http = Di.use(Http);
console.log(http);

const PRODUCT_MOCKS_TOKEN = new Token<Product[]>('products.mock');
Di.add(PRODUCT_MOCKS_TOKEN, [
  { id: 1, name: 'Gui 1' },
  { id: 2, name: 'Gu qrqerwew e tewi 2' },
  { id: 3, name: 'Gui 3' },
]);

const PRODUCT_ENDPOINT_TOKEN = new Token('user.endpoint.token');
Di.add(PRODUCT_ENDPOINT_TOKEN, 'products');

Di.add(ProductRepository, ProductRepositoryImpl, [
  Http,
  PRODUCT_ENDPOINT_TOKEN,
]);

// Di.add(ProductRepository, MockRepositoryImpl, [PRODUCT_MOCKS_TOKEN]);
Di.add(ProductFacade, ProductFacade, [ProductRepository]);
const repo = Di.use(ProductRepository);
// console.log(repo);

// repo.findAll().subscribe(console.log);
// // repo.create({ name: 'Gui' }).subscribe(console.log)
// repo.findById(1).subscribe(console.log);
// repo.findBy('name', 'Gui 1').subscribe(console.log);
