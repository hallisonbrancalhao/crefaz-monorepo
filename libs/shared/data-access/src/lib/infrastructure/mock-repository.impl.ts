import { of } from 'rxjs';
import { Entity, Repository } from '../base';

export class MockRepositoryImpl<T extends Entity<T['id']>>
  implements Repository<T>
{
  constructor(protected readonly collection: T[] = []) {}

  findAll() {
    return of(this.collection);
  }

  findBy<K extends keyof T>(field: K, value: T[K]) {
    const entity = this.collection.filter((item) => {
      return item[field] === value;
    });

    if (!entity) {
      throw new Error(`${value} não encontrado`);
    }

    return of(entity);
  }

  findById(id: number) {
    const entity = this.collection.find((item) => {
      return item.id === id;
    });

    if (!entity) {
      throw new Error(`${id} não encontrado`);
    }

    return of(entity);
  }

  create(value: Omit<T, 'id'>) {
    const id = this.collection.length + 1;
    const entity = { ...value, id } as T;
    this.collection.push(entity);
    return of(entity);
  }

  update(id: number, value: Partial<T>) {
    const index = this.#findIndex(id);
    const playlist = { ...this.collection[index], ...value };
    this.collection[index] = playlist;
    return of(playlist);
  }

  remove(id: number) {
    const index = this.#findIndex(id);
    const entity = this.collection[index];
    this.collection.splice(index, 1);
    return of(entity);
  }

  #findIndex(id: number) {
    return this.collection.findIndex((playlist) => playlist.id === id);
  }
}
