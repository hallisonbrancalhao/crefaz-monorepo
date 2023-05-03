export type AbstractType<T> = abstract new (...params: unknown[]) => T;

export class Token<T = unknown> {
  constructor(public name: string | T) {}
}

export interface Type<T> extends Function {
  new (...params: unknown[]): T;
}

export abstract class Di {
  static #container = new Map();
  static #relations = new Map();

  static use<T>(type: AbstractType<T> | Token<T>): T {
    const concrete = this.#container.get(type);

    if (!concrete) {
      throw new Error(`O provider ${type.name} ainda não foi registrado`);
    }

    return concrete;
  }

  static add<T>(
    type: AbstractType<T> | Token<T>,
    concrete: T | Type<T> | Token<T>,
    deps: (AbstractType<T> | Token<T | unknown>)[] = []
  ) {
    this.#relations.set(
      type,
      deps.map((dep) => this.use(dep))
    );

    if (type instanceof Token) {
      this.#container.set(type, concrete);
      return;
    }

    if (typeof concrete === 'function') {
      const clazz = concrete as Type<typeof concrete>;
      const instance = new clazz(...this.#relations.get(type));
      if (instance instanceof concrete) {
        this.#container.set(type, instance);
      }
    }
  }
}
