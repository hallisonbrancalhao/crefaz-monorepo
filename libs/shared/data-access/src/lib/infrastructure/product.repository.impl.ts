import {HttpRepositoryImpl} from './http.repository'
import {Product} from '../entities'

export class ProductRepositoryImpl extends HttpRepositoryImpl<Product> {}
