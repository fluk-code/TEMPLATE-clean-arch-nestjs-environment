declare namespace CustomTypes {
  export type Object = { [key: string]: unknown };

  export type Class<T> = { new (): T };

  declare namespace Error {
    export type Stack = {
      [field: string]: string[];
    };

    export type Validator = {
      new (stack: Stack, message?: string): Error;
    };
  }
}
