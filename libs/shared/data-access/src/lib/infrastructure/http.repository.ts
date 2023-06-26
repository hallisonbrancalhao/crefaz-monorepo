import {Entity, Http, Repository} from '../base'

export class HttpRepositoryImpl<T extends Entity> implements Repository<T> {
  constructor(private http: Http<T>, private endpoint: string) {}

  findAll() {
    return this.http.get<T[]>(this.endpoint)
  }

  findById(id: number) {
    return this.http.get<T>(`${this.endpoint}/${id}`)
  }

  findBy<K extends keyof T>(field: K, value: T[K]) {
    const params = new URLSearchParams({[field]: `${value}`})
    return this.http.get<T[]>(`${this.endpoint}?${params.toString()}`)
  }

  create<D>(value: D | Omit<T, 'id'>) {
    return this.http.post<T>(`${this.endpoint}`, value)
  }

  update(id: number, value: Partial<T>) {
    return this.http.put<T>(`${this.endpoint}/${id}`, value)
  }

  remove(id: number) {
    return this.http.delete<T>(`${this.endpoint}/${id}`)
  }
}
