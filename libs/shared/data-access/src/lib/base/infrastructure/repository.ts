import {Observable} from 'rxjs'
import {Entity} from '../entities'

export abstract class Repository<T extends Entity<T['id']>> {
  abstract findAll(): Observable<T[]>

  abstract findById(id: T['id']): Observable<T>

  abstract findBy<K extends keyof T>(field: K, value: T[K]): Observable<T[]>

  abstract create<D>(value: D | Omit<T, 'id'>): Observable<T>

  abstract update(id: T['id'], value: Partial<T>): Observable<T>
  
  abstract remove(id: T['id']): Observable<T>
}
