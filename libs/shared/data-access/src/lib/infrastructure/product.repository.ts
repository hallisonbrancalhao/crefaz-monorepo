import {Repository} from '../base'
import {Product} from '../entities'

export abstract class ProductRepository extends Repository<Product> {}
