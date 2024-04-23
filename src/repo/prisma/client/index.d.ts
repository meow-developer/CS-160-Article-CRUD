
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Articles
 * 
 */
export type Articles = $Result.DefaultSelection<Prisma.$ArticlesPayload>
/**
 * Model Diagram
 * 
 */
export type Diagram = $Result.DefaultSelection<Prisma.$DiagramPayload>
/**
 * Model UserArticle
 * 
 */
export type UserArticle = $Result.DefaultSelection<Prisma.$UserArticlePayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Articles
 * const articles = await prisma.articles.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Articles
   * const articles = await prisma.articles.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.articles`: Exposes CRUD operations for the **Articles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.articles.findMany()
    * ```
    */
  get articles(): Prisma.ArticlesDelegate<ExtArgs>;

  /**
   * `prisma.diagram`: Exposes CRUD operations for the **Diagram** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diagrams
    * const diagrams = await prisma.diagram.findMany()
    * ```
    */
  get diagram(): Prisma.DiagramDelegate<ExtArgs>;

  /**
   * `prisma.userArticle`: Exposes CRUD operations for the **UserArticle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserArticles
    * const userArticles = await prisma.userArticle.findMany()
    * ```
    */
  get userArticle(): Prisma.UserArticleDelegate<ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.12.1
   * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Articles: 'Articles',
    Diagram: 'Diagram',
    UserArticle: 'UserArticle',
    Users: 'Users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'articles' | 'diagram' | 'userArticle' | 'users'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Articles: {
        payload: Prisma.$ArticlesPayload<ExtArgs>
        fields: Prisma.ArticlesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticlesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticlesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          findFirst: {
            args: Prisma.ArticlesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticlesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          findMany: {
            args: Prisma.ArticlesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>[]
          }
          create: {
            args: Prisma.ArticlesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          createMany: {
            args: Prisma.ArticlesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ArticlesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          update: {
            args: Prisma.ArticlesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          deleteMany: {
            args: Prisma.ArticlesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ArticlesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ArticlesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          aggregate: {
            args: Prisma.ArticlesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateArticles>
          }
          groupBy: {
            args: Prisma.ArticlesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ArticlesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticlesCountArgs<ExtArgs>,
            result: $Utils.Optional<ArticlesCountAggregateOutputType> | number
          }
        }
      }
      Diagram: {
        payload: Prisma.$DiagramPayload<ExtArgs>
        fields: Prisma.DiagramFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiagramFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DiagramPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiagramFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DiagramPayload>
          }
          findFirst: {
            args: Prisma.DiagramFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DiagramPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiagramFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DiagramPayload>
          }
          findMany: {
            args: Prisma.DiagramFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DiagramPayload>[]
          }
          create: {
            args: Prisma.DiagramCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DiagramPayload>
          }
          createMany: {
            args: Prisma.DiagramCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DiagramDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DiagramPayload>
          }
          update: {
            args: Prisma.DiagramUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DiagramPayload>
          }
          deleteMany: {
            args: Prisma.DiagramDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DiagramUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DiagramUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DiagramPayload>
          }
          aggregate: {
            args: Prisma.DiagramAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDiagram>
          }
          groupBy: {
            args: Prisma.DiagramGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DiagramGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiagramCountArgs<ExtArgs>,
            result: $Utils.Optional<DiagramCountAggregateOutputType> | number
          }
        }
      }
      UserArticle: {
        payload: Prisma.$UserArticlePayload<ExtArgs>
        fields: Prisma.UserArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserArticleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserArticleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserArticlePayload>
          }
          findFirst: {
            args: Prisma.UserArticleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserArticleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserArticlePayload>
          }
          findMany: {
            args: Prisma.UserArticleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserArticlePayload>[]
          }
          create: {
            args: Prisma.UserArticleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserArticlePayload>
          }
          createMany: {
            args: Prisma.UserArticleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserArticleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserArticlePayload>
          }
          update: {
            args: Prisma.UserArticleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserArticlePayload>
          }
          deleteMany: {
            args: Prisma.UserArticleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserArticleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserArticleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserArticlePayload>
          }
          aggregate: {
            args: Prisma.UserArticleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserArticle>
          }
          groupBy: {
            args: Prisma.UserArticleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserArticleCountArgs<ExtArgs>,
            result: $Utils.Optional<UserArticleCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ArticlesCountOutputType
   */

  export type ArticlesCountOutputType = {
    UserArticle: number
  }

  export type ArticlesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserArticle?: boolean | ArticlesCountOutputTypeCountUserArticleArgs
  }

  // Custom InputTypes

  /**
   * ArticlesCountOutputType without action
   */
  export type ArticlesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticlesCountOutputType
     */
    select?: ArticlesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ArticlesCountOutputType without action
   */
  export type ArticlesCountOutputTypeCountUserArticleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserArticleWhereInput
  }



  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    UserArticle: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserArticle?: boolean | UsersCountOutputTypeCountUserArticleArgs
  }

  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUserArticleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserArticleWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Articles
   */

  export type AggregateArticles = {
    _count: ArticlesCountAggregateOutputType | null
    _avg: ArticlesAvgAggregateOutputType | null
    _sum: ArticlesSumAggregateOutputType | null
    _min: ArticlesMinAggregateOutputType | null
    _max: ArticlesMaxAggregateOutputType | null
  }

  export type ArticlesAvgAggregateOutputType = {
    ArticleID: number | null
  }

  export type ArticlesSumAggregateOutputType = {
    ArticleID: number | null
  }

  export type ArticlesMinAggregateOutputType = {
    ArticleID: number | null
    Title: string | null
    StorageArticleUUID: string | null
    Active: boolean | null
    PdfFileSummary: string | null
  }

  export type ArticlesMaxAggregateOutputType = {
    ArticleID: number | null
    Title: string | null
    StorageArticleUUID: string | null
    Active: boolean | null
    PdfFileSummary: string | null
  }

  export type ArticlesCountAggregateOutputType = {
    ArticleID: number
    Title: number
    StorageArticleUUID: number
    Active: number
    PdfFileSummary: number
    _all: number
  }


  export type ArticlesAvgAggregateInputType = {
    ArticleID?: true
  }

  export type ArticlesSumAggregateInputType = {
    ArticleID?: true
  }

  export type ArticlesMinAggregateInputType = {
    ArticleID?: true
    Title?: true
    StorageArticleUUID?: true
    Active?: true
    PdfFileSummary?: true
  }

  export type ArticlesMaxAggregateInputType = {
    ArticleID?: true
    Title?: true
    StorageArticleUUID?: true
    Active?: true
    PdfFileSummary?: true
  }

  export type ArticlesCountAggregateInputType = {
    ArticleID?: true
    Title?: true
    StorageArticleUUID?: true
    Active?: true
    PdfFileSummary?: true
    _all?: true
  }

  export type ArticlesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articles to aggregate.
     */
    where?: ArticlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticlesOrderByWithRelationInput | ArticlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Articles
    **/
    _count?: true | ArticlesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticlesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticlesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticlesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticlesMaxAggregateInputType
  }

  export type GetArticlesAggregateType<T extends ArticlesAggregateArgs> = {
        [P in keyof T & keyof AggregateArticles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticles[P]>
      : GetScalarType<T[P], AggregateArticles[P]>
  }




  export type ArticlesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticlesWhereInput
    orderBy?: ArticlesOrderByWithAggregationInput | ArticlesOrderByWithAggregationInput[]
    by: ArticlesScalarFieldEnum[] | ArticlesScalarFieldEnum
    having?: ArticlesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticlesCountAggregateInputType | true
    _avg?: ArticlesAvgAggregateInputType
    _sum?: ArticlesSumAggregateInputType
    _min?: ArticlesMinAggregateInputType
    _max?: ArticlesMaxAggregateInputType
  }

  export type ArticlesGroupByOutputType = {
    ArticleID: number
    Title: string
    StorageArticleUUID: string
    Active: boolean
    PdfFileSummary: string
    _count: ArticlesCountAggregateOutputType | null
    _avg: ArticlesAvgAggregateOutputType | null
    _sum: ArticlesSumAggregateOutputType | null
    _min: ArticlesMinAggregateOutputType | null
    _max: ArticlesMaxAggregateOutputType | null
  }

  type GetArticlesGroupByPayload<T extends ArticlesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticlesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticlesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticlesGroupByOutputType[P]>
            : GetScalarType<T[P], ArticlesGroupByOutputType[P]>
        }
      >
    >


  export type ArticlesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ArticleID?: boolean
    Title?: boolean
    StorageArticleUUID?: boolean
    Active?: boolean
    PdfFileSummary?: boolean
    Diagram?: boolean | Articles$DiagramArgs<ExtArgs>
    UserArticle?: boolean | Articles$UserArticleArgs<ExtArgs>
    _count?: boolean | ArticlesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articles"]>

  export type ArticlesSelectScalar = {
    ArticleID?: boolean
    Title?: boolean
    StorageArticleUUID?: boolean
    Active?: boolean
    PdfFileSummary?: boolean
  }

  export type ArticlesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Diagram?: boolean | Articles$DiagramArgs<ExtArgs>
    UserArticle?: boolean | Articles$UserArticleArgs<ExtArgs>
    _count?: boolean | ArticlesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ArticlesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Articles"
    objects: {
      Diagram: Prisma.$DiagramPayload<ExtArgs> | null
      UserArticle: Prisma.$UserArticlePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ArticleID: number
      Title: string
      StorageArticleUUID: string
      Active: boolean
      PdfFileSummary: string
    }, ExtArgs["result"]["articles"]>
    composites: {}
  }


  type ArticlesGetPayload<S extends boolean | null | undefined | ArticlesDefaultArgs> = $Result.GetResult<Prisma.$ArticlesPayload, S>

  type ArticlesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ArticlesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ArticlesCountAggregateInputType | true
    }

  export interface ArticlesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Articles'], meta: { name: 'Articles' } }
    /**
     * Find zero or one Articles that matches the filter.
     * @param {ArticlesFindUniqueArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ArticlesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ArticlesFindUniqueArgs<ExtArgs>>
    ): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Articles that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ArticlesFindUniqueOrThrowArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ArticlesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArticlesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesFindFirstArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ArticlesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ArticlesFindFirstArgs<ExtArgs>>
    ): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Articles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesFindFirstOrThrowArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ArticlesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArticlesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.articles.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.articles.findMany({ take: 10 })
     * 
     * // Only select the `ArticleID`
     * const articlesWithArticleIDOnly = await prisma.articles.findMany({ select: { ArticleID: true } })
     * 
    **/
    findMany<T extends ArticlesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArticlesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Articles.
     * @param {ArticlesCreateArgs} args - Arguments to create a Articles.
     * @example
     * // Create one Articles
     * const Articles = await prisma.articles.create({
     *   data: {
     *     // ... data to create a Articles
     *   }
     * })
     * 
    **/
    create<T extends ArticlesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ArticlesCreateArgs<ExtArgs>>
    ): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Articles.
     *     @param {ArticlesCreateManyArgs} args - Arguments to create many Articles.
     *     @example
     *     // Create many Articles
     *     const articles = await prisma.articles.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ArticlesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArticlesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Articles.
     * @param {ArticlesDeleteArgs} args - Arguments to delete one Articles.
     * @example
     * // Delete one Articles
     * const Articles = await prisma.articles.delete({
     *   where: {
     *     // ... filter to delete one Articles
     *   }
     * })
     * 
    **/
    delete<T extends ArticlesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ArticlesDeleteArgs<ExtArgs>>
    ): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Articles.
     * @param {ArticlesUpdateArgs} args - Arguments to update one Articles.
     * @example
     * // Update one Articles
     * const articles = await prisma.articles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ArticlesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ArticlesUpdateArgs<ExtArgs>>
    ): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Articles.
     * @param {ArticlesDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.articles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ArticlesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArticlesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const articles = await prisma.articles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ArticlesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ArticlesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Articles.
     * @param {ArticlesUpsertArgs} args - Arguments to update or create a Articles.
     * @example
     * // Update or create a Articles
     * const articles = await prisma.articles.upsert({
     *   create: {
     *     // ... data to create a Articles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Articles we want to update
     *   }
     * })
    **/
    upsert<T extends ArticlesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ArticlesUpsertArgs<ExtArgs>>
    ): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.articles.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends ArticlesCountArgs>(
      args?: Subset<T, ArticlesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticlesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticlesAggregateArgs>(args: Subset<T, ArticlesAggregateArgs>): Prisma.PrismaPromise<GetArticlesAggregateType<T>>

    /**
     * Group by Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArticlesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticlesGroupByArgs['orderBy'] }
        : { orderBy?: ArticlesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArticlesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticlesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Articles model
   */
  readonly fields: ArticlesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Articles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticlesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Diagram<T extends Articles$DiagramArgs<ExtArgs> = {}>(args?: Subset<T, Articles$DiagramArgs<ExtArgs>>): Prisma__DiagramClient<$Result.GetResult<Prisma.$DiagramPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    UserArticle<T extends Articles$UserArticleArgs<ExtArgs> = {}>(args?: Subset<T, Articles$UserArticleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserArticlePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Articles model
   */ 
  interface ArticlesFieldRefs {
    readonly ArticleID: FieldRef<"Articles", 'Int'>
    readonly Title: FieldRef<"Articles", 'String'>
    readonly StorageArticleUUID: FieldRef<"Articles", 'String'>
    readonly Active: FieldRef<"Articles", 'Boolean'>
    readonly PdfFileSummary: FieldRef<"Articles", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Articles findUnique
   */
  export type ArticlesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where: ArticlesWhereUniqueInput
  }


  /**
   * Articles findUniqueOrThrow
   */
  export type ArticlesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where: ArticlesWhereUniqueInput
  }


  /**
   * Articles findFirst
   */
  export type ArticlesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticlesOrderByWithRelationInput | ArticlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }


  /**
   * Articles findFirstOrThrow
   */
  export type ArticlesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticlesOrderByWithRelationInput | ArticlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }


  /**
   * Articles findMany
   */
  export type ArticlesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticlesOrderByWithRelationInput | ArticlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Articles.
     */
    cursor?: ArticlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }


  /**
   * Articles create
   */
  export type ArticlesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * The data needed to create a Articles.
     */
    data: XOR<ArticlesCreateInput, ArticlesUncheckedCreateInput>
  }


  /**
   * Articles createMany
   */
  export type ArticlesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Articles.
     */
    data: ArticlesCreateManyInput | ArticlesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Articles update
   */
  export type ArticlesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * The data needed to update a Articles.
     */
    data: XOR<ArticlesUpdateInput, ArticlesUncheckedUpdateInput>
    /**
     * Choose, which Articles to update.
     */
    where: ArticlesWhereUniqueInput
  }


  /**
   * Articles updateMany
   */
  export type ArticlesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticlesUpdateManyMutationInput, ArticlesUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticlesWhereInput
  }


  /**
   * Articles upsert
   */
  export type ArticlesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * The filter to search for the Articles to update in case it exists.
     */
    where: ArticlesWhereUniqueInput
    /**
     * In case the Articles found by the `where` argument doesn't exist, create a new Articles with this data.
     */
    create: XOR<ArticlesCreateInput, ArticlesUncheckedCreateInput>
    /**
     * In case the Articles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticlesUpdateInput, ArticlesUncheckedUpdateInput>
  }


  /**
   * Articles delete
   */
  export type ArticlesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * Filter which Articles to delete.
     */
    where: ArticlesWhereUniqueInput
  }


  /**
   * Articles deleteMany
   */
  export type ArticlesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articles to delete
     */
    where?: ArticlesWhereInput
  }


  /**
   * Articles.Diagram
   */
  export type Articles$DiagramArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagram
     */
    select?: DiagramSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiagramInclude<ExtArgs> | null
    where?: DiagramWhereInput
  }


  /**
   * Articles.UserArticle
   */
  export type Articles$UserArticleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserArticle
     */
    select?: UserArticleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserArticleInclude<ExtArgs> | null
    where?: UserArticleWhereInput
    orderBy?: UserArticleOrderByWithRelationInput | UserArticleOrderByWithRelationInput[]
    cursor?: UserArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserArticleScalarFieldEnum | UserArticleScalarFieldEnum[]
  }


  /**
   * Articles without action
   */
  export type ArticlesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArticlesInclude<ExtArgs> | null
  }



  /**
   * Model Diagram
   */

  export type AggregateDiagram = {
    _count: DiagramCountAggregateOutputType | null
    _avg: DiagramAvgAggregateOutputType | null
    _sum: DiagramSumAggregateOutputType | null
    _min: DiagramMinAggregateOutputType | null
    _max: DiagramMaxAggregateOutputType | null
  }

  export type DiagramAvgAggregateOutputType = {
    ArticleID: number | null
  }

  export type DiagramSumAggregateOutputType = {
    ArticleID: number | null
  }

  export type DiagramMinAggregateOutputType = {
    ArticleID: number | null
    StorageDiagramName: string | null
    Active: boolean | null
  }

  export type DiagramMaxAggregateOutputType = {
    ArticleID: number | null
    StorageDiagramName: string | null
    Active: boolean | null
  }

  export type DiagramCountAggregateOutputType = {
    ArticleID: number
    StorageDiagramName: number
    Active: number
    _all: number
  }


  export type DiagramAvgAggregateInputType = {
    ArticleID?: true
  }

  export type DiagramSumAggregateInputType = {
    ArticleID?: true
  }

  export type DiagramMinAggregateInputType = {
    ArticleID?: true
    StorageDiagramName?: true
    Active?: true
  }

  export type DiagramMaxAggregateInputType = {
    ArticleID?: true
    StorageDiagramName?: true
    Active?: true
  }

  export type DiagramCountAggregateInputType = {
    ArticleID?: true
    StorageDiagramName?: true
    Active?: true
    _all?: true
  }

  export type DiagramAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diagram to aggregate.
     */
    where?: DiagramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagrams to fetch.
     */
    orderBy?: DiagramOrderByWithRelationInput | DiagramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiagramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagrams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Diagrams
    **/
    _count?: true | DiagramCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiagramAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiagramSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiagramMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiagramMaxAggregateInputType
  }

  export type GetDiagramAggregateType<T extends DiagramAggregateArgs> = {
        [P in keyof T & keyof AggregateDiagram]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiagram[P]>
      : GetScalarType<T[P], AggregateDiagram[P]>
  }




  export type DiagramGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagramWhereInput
    orderBy?: DiagramOrderByWithAggregationInput | DiagramOrderByWithAggregationInput[]
    by: DiagramScalarFieldEnum[] | DiagramScalarFieldEnum
    having?: DiagramScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiagramCountAggregateInputType | true
    _avg?: DiagramAvgAggregateInputType
    _sum?: DiagramSumAggregateInputType
    _min?: DiagramMinAggregateInputType
    _max?: DiagramMaxAggregateInputType
  }

  export type DiagramGroupByOutputType = {
    ArticleID: number
    StorageDiagramName: string | null
    Active: boolean
    _count: DiagramCountAggregateOutputType | null
    _avg: DiagramAvgAggregateOutputType | null
    _sum: DiagramSumAggregateOutputType | null
    _min: DiagramMinAggregateOutputType | null
    _max: DiagramMaxAggregateOutputType | null
  }

  type GetDiagramGroupByPayload<T extends DiagramGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiagramGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiagramGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiagramGroupByOutputType[P]>
            : GetScalarType<T[P], DiagramGroupByOutputType[P]>
        }
      >
    >


  export type DiagramSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ArticleID?: boolean
    StorageDiagramName?: boolean
    Active?: boolean
    Articles?: boolean | ArticlesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagram"]>

  export type DiagramSelectScalar = {
    ArticleID?: boolean
    StorageDiagramName?: boolean
    Active?: boolean
  }

  export type DiagramInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Articles?: boolean | ArticlesDefaultArgs<ExtArgs>
  }


  export type $DiagramPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Diagram"
    objects: {
      Articles: Prisma.$ArticlesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ArticleID: number
      StorageDiagramName: string | null
      Active: boolean
    }, ExtArgs["result"]["diagram"]>
    composites: {}
  }


  type DiagramGetPayload<S extends boolean | null | undefined | DiagramDefaultArgs> = $Result.GetResult<Prisma.$DiagramPayload, S>

  type DiagramCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DiagramFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DiagramCountAggregateInputType | true
    }

  export interface DiagramDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Diagram'], meta: { name: 'Diagram' } }
    /**
     * Find zero or one Diagram that matches the filter.
     * @param {DiagramFindUniqueArgs} args - Arguments to find a Diagram
     * @example
     * // Get one Diagram
     * const diagram = await prisma.diagram.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DiagramFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DiagramFindUniqueArgs<ExtArgs>>
    ): Prisma__DiagramClient<$Result.GetResult<Prisma.$DiagramPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Diagram that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DiagramFindUniqueOrThrowArgs} args - Arguments to find a Diagram
     * @example
     * // Get one Diagram
     * const diagram = await prisma.diagram.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DiagramFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DiagramFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DiagramClient<$Result.GetResult<Prisma.$DiagramPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Diagram that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagramFindFirstArgs} args - Arguments to find a Diagram
     * @example
     * // Get one Diagram
     * const diagram = await prisma.diagram.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DiagramFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DiagramFindFirstArgs<ExtArgs>>
    ): Prisma__DiagramClient<$Result.GetResult<Prisma.$DiagramPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Diagram that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagramFindFirstOrThrowArgs} args - Arguments to find a Diagram
     * @example
     * // Get one Diagram
     * const diagram = await prisma.diagram.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DiagramFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DiagramFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DiagramClient<$Result.GetResult<Prisma.$DiagramPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Diagrams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagramFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diagrams
     * const diagrams = await prisma.diagram.findMany()
     * 
     * // Get first 10 Diagrams
     * const diagrams = await prisma.diagram.findMany({ take: 10 })
     * 
     * // Only select the `ArticleID`
     * const diagramWithArticleIDOnly = await prisma.diagram.findMany({ select: { ArticleID: true } })
     * 
    **/
    findMany<T extends DiagramFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DiagramFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagramPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Diagram.
     * @param {DiagramCreateArgs} args - Arguments to create a Diagram.
     * @example
     * // Create one Diagram
     * const Diagram = await prisma.diagram.create({
     *   data: {
     *     // ... data to create a Diagram
     *   }
     * })
     * 
    **/
    create<T extends DiagramCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DiagramCreateArgs<ExtArgs>>
    ): Prisma__DiagramClient<$Result.GetResult<Prisma.$DiagramPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Diagrams.
     *     @param {DiagramCreateManyArgs} args - Arguments to create many Diagrams.
     *     @example
     *     // Create many Diagrams
     *     const diagram = await prisma.diagram.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DiagramCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DiagramCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Diagram.
     * @param {DiagramDeleteArgs} args - Arguments to delete one Diagram.
     * @example
     * // Delete one Diagram
     * const Diagram = await prisma.diagram.delete({
     *   where: {
     *     // ... filter to delete one Diagram
     *   }
     * })
     * 
    **/
    delete<T extends DiagramDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DiagramDeleteArgs<ExtArgs>>
    ): Prisma__DiagramClient<$Result.GetResult<Prisma.$DiagramPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Diagram.
     * @param {DiagramUpdateArgs} args - Arguments to update one Diagram.
     * @example
     * // Update one Diagram
     * const diagram = await prisma.diagram.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DiagramUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DiagramUpdateArgs<ExtArgs>>
    ): Prisma__DiagramClient<$Result.GetResult<Prisma.$DiagramPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Diagrams.
     * @param {DiagramDeleteManyArgs} args - Arguments to filter Diagrams to delete.
     * @example
     * // Delete a few Diagrams
     * const { count } = await prisma.diagram.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DiagramDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DiagramDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diagrams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagramUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diagrams
     * const diagram = await prisma.diagram.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DiagramUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DiagramUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Diagram.
     * @param {DiagramUpsertArgs} args - Arguments to update or create a Diagram.
     * @example
     * // Update or create a Diagram
     * const diagram = await prisma.diagram.upsert({
     *   create: {
     *     // ... data to create a Diagram
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Diagram we want to update
     *   }
     * })
    **/
    upsert<T extends DiagramUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DiagramUpsertArgs<ExtArgs>>
    ): Prisma__DiagramClient<$Result.GetResult<Prisma.$DiagramPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Diagrams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagramCountArgs} args - Arguments to filter Diagrams to count.
     * @example
     * // Count the number of Diagrams
     * const count = await prisma.diagram.count({
     *   where: {
     *     // ... the filter for the Diagrams we want to count
     *   }
     * })
    **/
    count<T extends DiagramCountArgs>(
      args?: Subset<T, DiagramCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiagramCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Diagram.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagramAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiagramAggregateArgs>(args: Subset<T, DiagramAggregateArgs>): Prisma.PrismaPromise<GetDiagramAggregateType<T>>

    /**
     * Group by Diagram.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagramGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DiagramGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiagramGroupByArgs['orderBy'] }
        : { orderBy?: DiagramGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiagramGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiagramGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Diagram model
   */
  readonly fields: DiagramFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Diagram.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiagramClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Articles<T extends ArticlesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArticlesDefaultArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Diagram model
   */ 
  interface DiagramFieldRefs {
    readonly ArticleID: FieldRef<"Diagram", 'Int'>
    readonly StorageDiagramName: FieldRef<"Diagram", 'String'>
    readonly Active: FieldRef<"Diagram", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Diagram findUnique
   */
  export type DiagramFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagram
     */
    select?: DiagramSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiagramInclude<ExtArgs> | null
    /**
     * Filter, which Diagram to fetch.
     */
    where: DiagramWhereUniqueInput
  }


  /**
   * Diagram findUniqueOrThrow
   */
  export type DiagramFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagram
     */
    select?: DiagramSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiagramInclude<ExtArgs> | null
    /**
     * Filter, which Diagram to fetch.
     */
    where: DiagramWhereUniqueInput
  }


  /**
   * Diagram findFirst
   */
  export type DiagramFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagram
     */
    select?: DiagramSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiagramInclude<ExtArgs> | null
    /**
     * Filter, which Diagram to fetch.
     */
    where?: DiagramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagrams to fetch.
     */
    orderBy?: DiagramOrderByWithRelationInput | DiagramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diagrams.
     */
    cursor?: DiagramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagrams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diagrams.
     */
    distinct?: DiagramScalarFieldEnum | DiagramScalarFieldEnum[]
  }


  /**
   * Diagram findFirstOrThrow
   */
  export type DiagramFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagram
     */
    select?: DiagramSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiagramInclude<ExtArgs> | null
    /**
     * Filter, which Diagram to fetch.
     */
    where?: DiagramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagrams to fetch.
     */
    orderBy?: DiagramOrderByWithRelationInput | DiagramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diagrams.
     */
    cursor?: DiagramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagrams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diagrams.
     */
    distinct?: DiagramScalarFieldEnum | DiagramScalarFieldEnum[]
  }


  /**
   * Diagram findMany
   */
  export type DiagramFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagram
     */
    select?: DiagramSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiagramInclude<ExtArgs> | null
    /**
     * Filter, which Diagrams to fetch.
     */
    where?: DiagramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagrams to fetch.
     */
    orderBy?: DiagramOrderByWithRelationInput | DiagramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Diagrams.
     */
    cursor?: DiagramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagrams.
     */
    skip?: number
    distinct?: DiagramScalarFieldEnum | DiagramScalarFieldEnum[]
  }


  /**
   * Diagram create
   */
  export type DiagramCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagram
     */
    select?: DiagramSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiagramInclude<ExtArgs> | null
    /**
     * The data needed to create a Diagram.
     */
    data: XOR<DiagramCreateInput, DiagramUncheckedCreateInput>
  }


  /**
   * Diagram createMany
   */
  export type DiagramCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Diagrams.
     */
    data: DiagramCreateManyInput | DiagramCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Diagram update
   */
  export type DiagramUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagram
     */
    select?: DiagramSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiagramInclude<ExtArgs> | null
    /**
     * The data needed to update a Diagram.
     */
    data: XOR<DiagramUpdateInput, DiagramUncheckedUpdateInput>
    /**
     * Choose, which Diagram to update.
     */
    where: DiagramWhereUniqueInput
  }


  /**
   * Diagram updateMany
   */
  export type DiagramUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Diagrams.
     */
    data: XOR<DiagramUpdateManyMutationInput, DiagramUncheckedUpdateManyInput>
    /**
     * Filter which Diagrams to update
     */
    where?: DiagramWhereInput
  }


  /**
   * Diagram upsert
   */
  export type DiagramUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagram
     */
    select?: DiagramSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiagramInclude<ExtArgs> | null
    /**
     * The filter to search for the Diagram to update in case it exists.
     */
    where: DiagramWhereUniqueInput
    /**
     * In case the Diagram found by the `where` argument doesn't exist, create a new Diagram with this data.
     */
    create: XOR<DiagramCreateInput, DiagramUncheckedCreateInput>
    /**
     * In case the Diagram was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiagramUpdateInput, DiagramUncheckedUpdateInput>
  }


  /**
   * Diagram delete
   */
  export type DiagramDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagram
     */
    select?: DiagramSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiagramInclude<ExtArgs> | null
    /**
     * Filter which Diagram to delete.
     */
    where: DiagramWhereUniqueInput
  }


  /**
   * Diagram deleteMany
   */
  export type DiagramDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diagrams to delete
     */
    where?: DiagramWhereInput
  }


  /**
   * Diagram without action
   */
  export type DiagramDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagram
     */
    select?: DiagramSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DiagramInclude<ExtArgs> | null
  }



  /**
   * Model UserArticle
   */

  export type AggregateUserArticle = {
    _count: UserArticleCountAggregateOutputType | null
    _avg: UserArticleAvgAggregateOutputType | null
    _sum: UserArticleSumAggregateOutputType | null
    _min: UserArticleMinAggregateOutputType | null
    _max: UserArticleMaxAggregateOutputType | null
  }

  export type UserArticleAvgAggregateOutputType = {
    UserID: number | null
    ArticleID: number | null
  }

  export type UserArticleSumAggregateOutputType = {
    UserID: number | null
    ArticleID: number | null
  }

  export type UserArticleMinAggregateOutputType = {
    UserID: number | null
    ArticleID: number | null
  }

  export type UserArticleMaxAggregateOutputType = {
    UserID: number | null
    ArticleID: number | null
  }

  export type UserArticleCountAggregateOutputType = {
    UserID: number
    ArticleID: number
    _all: number
  }


  export type UserArticleAvgAggregateInputType = {
    UserID?: true
    ArticleID?: true
  }

  export type UserArticleSumAggregateInputType = {
    UserID?: true
    ArticleID?: true
  }

  export type UserArticleMinAggregateInputType = {
    UserID?: true
    ArticleID?: true
  }

  export type UserArticleMaxAggregateInputType = {
    UserID?: true
    ArticleID?: true
  }

  export type UserArticleCountAggregateInputType = {
    UserID?: true
    ArticleID?: true
    _all?: true
  }

  export type UserArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserArticle to aggregate.
     */
    where?: UserArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserArticles to fetch.
     */
    orderBy?: UserArticleOrderByWithRelationInput | UserArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserArticles
    **/
    _count?: true | UserArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserArticleMaxAggregateInputType
  }

  export type GetUserArticleAggregateType<T extends UserArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserArticle[P]>
      : GetScalarType<T[P], AggregateUserArticle[P]>
  }




  export type UserArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserArticleWhereInput
    orderBy?: UserArticleOrderByWithAggregationInput | UserArticleOrderByWithAggregationInput[]
    by: UserArticleScalarFieldEnum[] | UserArticleScalarFieldEnum
    having?: UserArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserArticleCountAggregateInputType | true
    _avg?: UserArticleAvgAggregateInputType
    _sum?: UserArticleSumAggregateInputType
    _min?: UserArticleMinAggregateInputType
    _max?: UserArticleMaxAggregateInputType
  }

  export type UserArticleGroupByOutputType = {
    UserID: number
    ArticleID: number
    _count: UserArticleCountAggregateOutputType | null
    _avg: UserArticleAvgAggregateOutputType | null
    _sum: UserArticleSumAggregateOutputType | null
    _min: UserArticleMinAggregateOutputType | null
    _max: UserArticleMaxAggregateOutputType | null
  }

  type GetUserArticleGroupByPayload<T extends UserArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserArticleGroupByOutputType[P]>
            : GetScalarType<T[P], UserArticleGroupByOutputType[P]>
        }
      >
    >


  export type UserArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserID?: boolean
    ArticleID?: boolean
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    Articles?: boolean | ArticlesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userArticle"]>

  export type UserArticleSelectScalar = {
    UserID?: boolean
    ArticleID?: boolean
  }

  export type UserArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    Articles?: boolean | ArticlesDefaultArgs<ExtArgs>
  }


  export type $UserArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserArticle"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs>
      Articles: Prisma.$ArticlesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      UserID: number
      ArticleID: number
    }, ExtArgs["result"]["userArticle"]>
    composites: {}
  }


  type UserArticleGetPayload<S extends boolean | null | undefined | UserArticleDefaultArgs> = $Result.GetResult<Prisma.$UserArticlePayload, S>

  type UserArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserArticleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserArticleCountAggregateInputType | true
    }

  export interface UserArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserArticle'], meta: { name: 'UserArticle' } }
    /**
     * Find zero or one UserArticle that matches the filter.
     * @param {UserArticleFindUniqueArgs} args - Arguments to find a UserArticle
     * @example
     * // Get one UserArticle
     * const userArticle = await prisma.userArticle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserArticleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserArticleFindUniqueArgs<ExtArgs>>
    ): Prisma__UserArticleClient<$Result.GetResult<Prisma.$UserArticlePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserArticle that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserArticleFindUniqueOrThrowArgs} args - Arguments to find a UserArticle
     * @example
     * // Get one UserArticle
     * const userArticle = await prisma.userArticle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserArticleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserArticleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserArticleClient<$Result.GetResult<Prisma.$UserArticlePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserArticle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserArticleFindFirstArgs} args - Arguments to find a UserArticle
     * @example
     * // Get one UserArticle
     * const userArticle = await prisma.userArticle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserArticleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserArticleFindFirstArgs<ExtArgs>>
    ): Prisma__UserArticleClient<$Result.GetResult<Prisma.$UserArticlePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserArticle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserArticleFindFirstOrThrowArgs} args - Arguments to find a UserArticle
     * @example
     * // Get one UserArticle
     * const userArticle = await prisma.userArticle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserArticleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserArticleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserArticleClient<$Result.GetResult<Prisma.$UserArticlePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserArticles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserArticleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserArticles
     * const userArticles = await prisma.userArticle.findMany()
     * 
     * // Get first 10 UserArticles
     * const userArticles = await prisma.userArticle.findMany({ take: 10 })
     * 
     * // Only select the `UserID`
     * const userArticleWithUserIDOnly = await prisma.userArticle.findMany({ select: { UserID: true } })
     * 
    **/
    findMany<T extends UserArticleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserArticleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserArticlePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserArticle.
     * @param {UserArticleCreateArgs} args - Arguments to create a UserArticle.
     * @example
     * // Create one UserArticle
     * const UserArticle = await prisma.userArticle.create({
     *   data: {
     *     // ... data to create a UserArticle
     *   }
     * })
     * 
    **/
    create<T extends UserArticleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserArticleCreateArgs<ExtArgs>>
    ): Prisma__UserArticleClient<$Result.GetResult<Prisma.$UserArticlePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserArticles.
     *     @param {UserArticleCreateManyArgs} args - Arguments to create many UserArticles.
     *     @example
     *     // Create many UserArticles
     *     const userArticle = await prisma.userArticle.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserArticleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserArticleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserArticle.
     * @param {UserArticleDeleteArgs} args - Arguments to delete one UserArticle.
     * @example
     * // Delete one UserArticle
     * const UserArticle = await prisma.userArticle.delete({
     *   where: {
     *     // ... filter to delete one UserArticle
     *   }
     * })
     * 
    **/
    delete<T extends UserArticleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserArticleDeleteArgs<ExtArgs>>
    ): Prisma__UserArticleClient<$Result.GetResult<Prisma.$UserArticlePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserArticle.
     * @param {UserArticleUpdateArgs} args - Arguments to update one UserArticle.
     * @example
     * // Update one UserArticle
     * const userArticle = await prisma.userArticle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserArticleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserArticleUpdateArgs<ExtArgs>>
    ): Prisma__UserArticleClient<$Result.GetResult<Prisma.$UserArticlePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserArticles.
     * @param {UserArticleDeleteManyArgs} args - Arguments to filter UserArticles to delete.
     * @example
     * // Delete a few UserArticles
     * const { count } = await prisma.userArticle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserArticleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserArticleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserArticles
     * const userArticle = await prisma.userArticle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserArticleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserArticleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserArticle.
     * @param {UserArticleUpsertArgs} args - Arguments to update or create a UserArticle.
     * @example
     * // Update or create a UserArticle
     * const userArticle = await prisma.userArticle.upsert({
     *   create: {
     *     // ... data to create a UserArticle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserArticle we want to update
     *   }
     * })
    **/
    upsert<T extends UserArticleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserArticleUpsertArgs<ExtArgs>>
    ): Prisma__UserArticleClient<$Result.GetResult<Prisma.$UserArticlePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserArticleCountArgs} args - Arguments to filter UserArticles to count.
     * @example
     * // Count the number of UserArticles
     * const count = await prisma.userArticle.count({
     *   where: {
     *     // ... the filter for the UserArticles we want to count
     *   }
     * })
    **/
    count<T extends UserArticleCountArgs>(
      args?: Subset<T, UserArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserArticleAggregateArgs>(args: Subset<T, UserArticleAggregateArgs>): Prisma.PrismaPromise<GetUserArticleAggregateType<T>>

    /**
     * Group by UserArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserArticleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserArticleGroupByArgs['orderBy'] }
        : { orderBy?: UserArticleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserArticle model
   */
  readonly fields: UserArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserArticle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Articles<T extends ArticlesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArticlesDefaultArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserArticle model
   */ 
  interface UserArticleFieldRefs {
    readonly UserID: FieldRef<"UserArticle", 'Int'>
    readonly ArticleID: FieldRef<"UserArticle", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * UserArticle findUnique
   */
  export type UserArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserArticle
     */
    select?: UserArticleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserArticleInclude<ExtArgs> | null
    /**
     * Filter, which UserArticle to fetch.
     */
    where: UserArticleWhereUniqueInput
  }


  /**
   * UserArticle findUniqueOrThrow
   */
  export type UserArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserArticle
     */
    select?: UserArticleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserArticleInclude<ExtArgs> | null
    /**
     * Filter, which UserArticle to fetch.
     */
    where: UserArticleWhereUniqueInput
  }


  /**
   * UserArticle findFirst
   */
  export type UserArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserArticle
     */
    select?: UserArticleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserArticleInclude<ExtArgs> | null
    /**
     * Filter, which UserArticle to fetch.
     */
    where?: UserArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserArticles to fetch.
     */
    orderBy?: UserArticleOrderByWithRelationInput | UserArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserArticles.
     */
    cursor?: UserArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserArticles.
     */
    distinct?: UserArticleScalarFieldEnum | UserArticleScalarFieldEnum[]
  }


  /**
   * UserArticle findFirstOrThrow
   */
  export type UserArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserArticle
     */
    select?: UserArticleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserArticleInclude<ExtArgs> | null
    /**
     * Filter, which UserArticle to fetch.
     */
    where?: UserArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserArticles to fetch.
     */
    orderBy?: UserArticleOrderByWithRelationInput | UserArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserArticles.
     */
    cursor?: UserArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserArticles.
     */
    distinct?: UserArticleScalarFieldEnum | UserArticleScalarFieldEnum[]
  }


  /**
   * UserArticle findMany
   */
  export type UserArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserArticle
     */
    select?: UserArticleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserArticleInclude<ExtArgs> | null
    /**
     * Filter, which UserArticles to fetch.
     */
    where?: UserArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserArticles to fetch.
     */
    orderBy?: UserArticleOrderByWithRelationInput | UserArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserArticles.
     */
    cursor?: UserArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserArticles.
     */
    skip?: number
    distinct?: UserArticleScalarFieldEnum | UserArticleScalarFieldEnum[]
  }


  /**
   * UserArticle create
   */
  export type UserArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserArticle
     */
    select?: UserArticleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserArticle.
     */
    data: XOR<UserArticleCreateInput, UserArticleUncheckedCreateInput>
  }


  /**
   * UserArticle createMany
   */
  export type UserArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserArticles.
     */
    data: UserArticleCreateManyInput | UserArticleCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserArticle update
   */
  export type UserArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserArticle
     */
    select?: UserArticleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserArticle.
     */
    data: XOR<UserArticleUpdateInput, UserArticleUncheckedUpdateInput>
    /**
     * Choose, which UserArticle to update.
     */
    where: UserArticleWhereUniqueInput
  }


  /**
   * UserArticle updateMany
   */
  export type UserArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserArticles.
     */
    data: XOR<UserArticleUpdateManyMutationInput, UserArticleUncheckedUpdateManyInput>
    /**
     * Filter which UserArticles to update
     */
    where?: UserArticleWhereInput
  }


  /**
   * UserArticle upsert
   */
  export type UserArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserArticle
     */
    select?: UserArticleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserArticle to update in case it exists.
     */
    where: UserArticleWhereUniqueInput
    /**
     * In case the UserArticle found by the `where` argument doesn't exist, create a new UserArticle with this data.
     */
    create: XOR<UserArticleCreateInput, UserArticleUncheckedCreateInput>
    /**
     * In case the UserArticle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserArticleUpdateInput, UserArticleUncheckedUpdateInput>
  }


  /**
   * UserArticle delete
   */
  export type UserArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserArticle
     */
    select?: UserArticleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserArticleInclude<ExtArgs> | null
    /**
     * Filter which UserArticle to delete.
     */
    where: UserArticleWhereUniqueInput
  }


  /**
   * UserArticle deleteMany
   */
  export type UserArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserArticles to delete
     */
    where?: UserArticleWhereInput
  }


  /**
   * UserArticle without action
   */
  export type UserArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserArticle
     */
    select?: UserArticleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserArticleInclude<ExtArgs> | null
  }



  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    UserID: number | null
  }

  export type UsersSumAggregateOutputType = {
    UserID: number | null
  }

  export type UsersMinAggregateOutputType = {
    UserID: number | null
    FirstName: string | null
    LastName: string | null
    Email: string | null
    HashedPassword: string | null
    Salt: string | null
    Active: boolean | null
  }

  export type UsersMaxAggregateOutputType = {
    UserID: number | null
    FirstName: string | null
    LastName: string | null
    Email: string | null
    HashedPassword: string | null
    Salt: string | null
    Active: boolean | null
  }

  export type UsersCountAggregateOutputType = {
    UserID: number
    FirstName: number
    LastName: number
    Email: number
    HashedPassword: number
    Salt: number
    Active: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    UserID?: true
  }

  export type UsersSumAggregateInputType = {
    UserID?: true
  }

  export type UsersMinAggregateInputType = {
    UserID?: true
    FirstName?: true
    LastName?: true
    Email?: true
    HashedPassword?: true
    Salt?: true
    Active?: true
  }

  export type UsersMaxAggregateInputType = {
    UserID?: true
    FirstName?: true
    LastName?: true
    Email?: true
    HashedPassword?: true
    Salt?: true
    Active?: true
  }

  export type UsersCountAggregateInputType = {
    UserID?: true
    FirstName?: true
    LastName?: true
    Email?: true
    HashedPassword?: true
    Salt?: true
    Active?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    UserID: number
    FirstName: string
    LastName: string
    Email: string
    HashedPassword: string
    Salt: string
    Active: boolean
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserID?: boolean
    FirstName?: boolean
    LastName?: boolean
    Email?: boolean
    HashedPassword?: boolean
    Salt?: boolean
    Active?: boolean
    UserArticle?: boolean | Users$UserArticleArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    UserID?: boolean
    FirstName?: boolean
    LastName?: boolean
    Email?: boolean
    HashedPassword?: boolean
    Salt?: boolean
    Active?: boolean
  }

  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserArticle?: boolean | Users$UserArticleArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      UserArticle: Prisma.$UserArticlePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      UserID: number
      FirstName: string
      LastName: string
      Email: string
      HashedPassword: string
      Salt: string
      Active: boolean
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `UserID`
     * const usersWithUserIDOnly = await prisma.users.findMany({ select: { UserID: true } })
     * 
    **/
    findMany<T extends UsersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends UsersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersCreateArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UsersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends UsersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends UsersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    UserArticle<T extends Users$UserArticleArgs<ExtArgs> = {}>(args?: Subset<T, Users$UserArticleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserArticlePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Users model
   */ 
  interface UsersFieldRefs {
    readonly UserID: FieldRef<"Users", 'Int'>
    readonly FirstName: FieldRef<"Users", 'String'>
    readonly LastName: FieldRef<"Users", 'String'>
    readonly Email: FieldRef<"Users", 'String'>
    readonly HashedPassword: FieldRef<"Users", 'String'>
    readonly Salt: FieldRef<"Users", 'String'>
    readonly Active: FieldRef<"Users", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }


  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
  }


  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }


  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
  }


  /**
   * Users.UserArticle
   */
  export type Users$UserArticleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserArticle
     */
    select?: UserArticleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserArticleInclude<ExtArgs> | null
    where?: UserArticleWhereInput
    orderBy?: UserArticleOrderByWithRelationInput | UserArticleOrderByWithRelationInput[]
    cursor?: UserArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserArticleScalarFieldEnum | UserArticleScalarFieldEnum[]
  }


  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ArticlesScalarFieldEnum: {
    ArticleID: 'ArticleID',
    Title: 'Title',
    StorageArticleUUID: 'StorageArticleUUID',
    Active: 'Active',
    PdfFileSummary: 'PdfFileSummary'
  };

  export type ArticlesScalarFieldEnum = (typeof ArticlesScalarFieldEnum)[keyof typeof ArticlesScalarFieldEnum]


  export const DiagramScalarFieldEnum: {
    ArticleID: 'ArticleID',
    StorageDiagramName: 'StorageDiagramName',
    Active: 'Active'
  };

  export type DiagramScalarFieldEnum = (typeof DiagramScalarFieldEnum)[keyof typeof DiagramScalarFieldEnum]


  export const UserArticleScalarFieldEnum: {
    UserID: 'UserID',
    ArticleID: 'ArticleID'
  };

  export type UserArticleScalarFieldEnum = (typeof UserArticleScalarFieldEnum)[keyof typeof UserArticleScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    UserID: 'UserID',
    FirstName: 'FirstName',
    LastName: 'LastName',
    Email: 'Email',
    HashedPassword: 'HashedPassword',
    Salt: 'Salt',
    Active: 'Active'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ArticlesWhereInput = {
    AND?: ArticlesWhereInput | ArticlesWhereInput[]
    OR?: ArticlesWhereInput[]
    NOT?: ArticlesWhereInput | ArticlesWhereInput[]
    ArticleID?: IntFilter<"Articles"> | number
    Title?: StringFilter<"Articles"> | string
    StorageArticleUUID?: StringFilter<"Articles"> | string
    Active?: BoolFilter<"Articles"> | boolean
    PdfFileSummary?: StringFilter<"Articles"> | string
    Diagram?: XOR<DiagramNullableRelationFilter, DiagramWhereInput> | null
    UserArticle?: UserArticleListRelationFilter
  }

  export type ArticlesOrderByWithRelationInput = {
    ArticleID?: SortOrder
    Title?: SortOrder
    StorageArticleUUID?: SortOrder
    Active?: SortOrder
    PdfFileSummary?: SortOrder
    Diagram?: DiagramOrderByWithRelationInput
    UserArticle?: UserArticleOrderByRelationAggregateInput
  }

  export type ArticlesWhereUniqueInput = Prisma.AtLeast<{
    ArticleID?: number
    StorageArticleUUID?: string
    AND?: ArticlesWhereInput | ArticlesWhereInput[]
    OR?: ArticlesWhereInput[]
    NOT?: ArticlesWhereInput | ArticlesWhereInput[]
    Title?: StringFilter<"Articles"> | string
    Active?: BoolFilter<"Articles"> | boolean
    PdfFileSummary?: StringFilter<"Articles"> | string
    Diagram?: XOR<DiagramNullableRelationFilter, DiagramWhereInput> | null
    UserArticle?: UserArticleListRelationFilter
  }, "ArticleID" | "StorageArticleUUID">

  export type ArticlesOrderByWithAggregationInput = {
    ArticleID?: SortOrder
    Title?: SortOrder
    StorageArticleUUID?: SortOrder
    Active?: SortOrder
    PdfFileSummary?: SortOrder
    _count?: ArticlesCountOrderByAggregateInput
    _avg?: ArticlesAvgOrderByAggregateInput
    _max?: ArticlesMaxOrderByAggregateInput
    _min?: ArticlesMinOrderByAggregateInput
    _sum?: ArticlesSumOrderByAggregateInput
  }

  export type ArticlesScalarWhereWithAggregatesInput = {
    AND?: ArticlesScalarWhereWithAggregatesInput | ArticlesScalarWhereWithAggregatesInput[]
    OR?: ArticlesScalarWhereWithAggregatesInput[]
    NOT?: ArticlesScalarWhereWithAggregatesInput | ArticlesScalarWhereWithAggregatesInput[]
    ArticleID?: IntWithAggregatesFilter<"Articles"> | number
    Title?: StringWithAggregatesFilter<"Articles"> | string
    StorageArticleUUID?: StringWithAggregatesFilter<"Articles"> | string
    Active?: BoolWithAggregatesFilter<"Articles"> | boolean
    PdfFileSummary?: StringWithAggregatesFilter<"Articles"> | string
  }

  export type DiagramWhereInput = {
    AND?: DiagramWhereInput | DiagramWhereInput[]
    OR?: DiagramWhereInput[]
    NOT?: DiagramWhereInput | DiagramWhereInput[]
    ArticleID?: IntFilter<"Diagram"> | number
    StorageDiagramName?: StringNullableFilter<"Diagram"> | string | null
    Active?: BoolFilter<"Diagram"> | boolean
    Articles?: XOR<ArticlesRelationFilter, ArticlesWhereInput>
  }

  export type DiagramOrderByWithRelationInput = {
    ArticleID?: SortOrder
    StorageDiagramName?: SortOrderInput | SortOrder
    Active?: SortOrder
    Articles?: ArticlesOrderByWithRelationInput
  }

  export type DiagramWhereUniqueInput = Prisma.AtLeast<{
    ArticleID?: number
    AND?: DiagramWhereInput | DiagramWhereInput[]
    OR?: DiagramWhereInput[]
    NOT?: DiagramWhereInput | DiagramWhereInput[]
    StorageDiagramName?: StringNullableFilter<"Diagram"> | string | null
    Active?: BoolFilter<"Diagram"> | boolean
    Articles?: XOR<ArticlesRelationFilter, ArticlesWhereInput>
  }, "ArticleID">

  export type DiagramOrderByWithAggregationInput = {
    ArticleID?: SortOrder
    StorageDiagramName?: SortOrderInput | SortOrder
    Active?: SortOrder
    _count?: DiagramCountOrderByAggregateInput
    _avg?: DiagramAvgOrderByAggregateInput
    _max?: DiagramMaxOrderByAggregateInput
    _min?: DiagramMinOrderByAggregateInput
    _sum?: DiagramSumOrderByAggregateInput
  }

  export type DiagramScalarWhereWithAggregatesInput = {
    AND?: DiagramScalarWhereWithAggregatesInput | DiagramScalarWhereWithAggregatesInput[]
    OR?: DiagramScalarWhereWithAggregatesInput[]
    NOT?: DiagramScalarWhereWithAggregatesInput | DiagramScalarWhereWithAggregatesInput[]
    ArticleID?: IntWithAggregatesFilter<"Diagram"> | number
    StorageDiagramName?: StringNullableWithAggregatesFilter<"Diagram"> | string | null
    Active?: BoolWithAggregatesFilter<"Diagram"> | boolean
  }

  export type UserArticleWhereInput = {
    AND?: UserArticleWhereInput | UserArticleWhereInput[]
    OR?: UserArticleWhereInput[]
    NOT?: UserArticleWhereInput | UserArticleWhereInput[]
    UserID?: IntFilter<"UserArticle"> | number
    ArticleID?: IntFilter<"UserArticle"> | number
    Users?: XOR<UsersRelationFilter, UsersWhereInput>
    Articles?: XOR<ArticlesRelationFilter, ArticlesWhereInput>
  }

  export type UserArticleOrderByWithRelationInput = {
    UserID?: SortOrder
    ArticleID?: SortOrder
    Users?: UsersOrderByWithRelationInput
    Articles?: ArticlesOrderByWithRelationInput
  }

  export type UserArticleWhereUniqueInput = Prisma.AtLeast<{
    UserID_ArticleID?: UserArticleUserIDArticleIDCompoundUniqueInput
    AND?: UserArticleWhereInput | UserArticleWhereInput[]
    OR?: UserArticleWhereInput[]
    NOT?: UserArticleWhereInput | UserArticleWhereInput[]
    UserID?: IntFilter<"UserArticle"> | number
    ArticleID?: IntFilter<"UserArticle"> | number
    Users?: XOR<UsersRelationFilter, UsersWhereInput>
    Articles?: XOR<ArticlesRelationFilter, ArticlesWhereInput>
  }, "UserID_ArticleID">

  export type UserArticleOrderByWithAggregationInput = {
    UserID?: SortOrder
    ArticleID?: SortOrder
    _count?: UserArticleCountOrderByAggregateInput
    _avg?: UserArticleAvgOrderByAggregateInput
    _max?: UserArticleMaxOrderByAggregateInput
    _min?: UserArticleMinOrderByAggregateInput
    _sum?: UserArticleSumOrderByAggregateInput
  }

  export type UserArticleScalarWhereWithAggregatesInput = {
    AND?: UserArticleScalarWhereWithAggregatesInput | UserArticleScalarWhereWithAggregatesInput[]
    OR?: UserArticleScalarWhereWithAggregatesInput[]
    NOT?: UserArticleScalarWhereWithAggregatesInput | UserArticleScalarWhereWithAggregatesInput[]
    UserID?: IntWithAggregatesFilter<"UserArticle"> | number
    ArticleID?: IntWithAggregatesFilter<"UserArticle"> | number
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    UserID?: IntFilter<"Users"> | number
    FirstName?: StringFilter<"Users"> | string
    LastName?: StringFilter<"Users"> | string
    Email?: StringFilter<"Users"> | string
    HashedPassword?: StringFilter<"Users"> | string
    Salt?: StringFilter<"Users"> | string
    Active?: BoolFilter<"Users"> | boolean
    UserArticle?: UserArticleListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    UserID?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Email?: SortOrder
    HashedPassword?: SortOrder
    Salt?: SortOrder
    Active?: SortOrder
    UserArticle?: UserArticleOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    UserID?: number
    Email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    FirstName?: StringFilter<"Users"> | string
    LastName?: StringFilter<"Users"> | string
    HashedPassword?: StringFilter<"Users"> | string
    Salt?: StringFilter<"Users"> | string
    Active?: BoolFilter<"Users"> | boolean
    UserArticle?: UserArticleListRelationFilter
  }, "UserID" | "Email">

  export type UsersOrderByWithAggregationInput = {
    UserID?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Email?: SortOrder
    HashedPassword?: SortOrder
    Salt?: SortOrder
    Active?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    UserID?: IntWithAggregatesFilter<"Users"> | number
    FirstName?: StringWithAggregatesFilter<"Users"> | string
    LastName?: StringWithAggregatesFilter<"Users"> | string
    Email?: StringWithAggregatesFilter<"Users"> | string
    HashedPassword?: StringWithAggregatesFilter<"Users"> | string
    Salt?: StringWithAggregatesFilter<"Users"> | string
    Active?: BoolWithAggregatesFilter<"Users"> | boolean
  }

  export type ArticlesCreateInput = {
    Title: string
    StorageArticleUUID: string
    Active?: boolean
    PdfFileSummary: string
    Diagram?: DiagramCreateNestedOneWithoutArticlesInput
    UserArticle?: UserArticleCreateNestedManyWithoutArticlesInput
  }

  export type ArticlesUncheckedCreateInput = {
    ArticleID?: number
    Title: string
    StorageArticleUUID: string
    Active?: boolean
    PdfFileSummary: string
    Diagram?: DiagramUncheckedCreateNestedOneWithoutArticlesInput
    UserArticle?: UserArticleUncheckedCreateNestedManyWithoutArticlesInput
  }

  export type ArticlesUpdateInput = {
    Title?: StringFieldUpdateOperationsInput | string
    StorageArticleUUID?: StringFieldUpdateOperationsInput | string
    Active?: BoolFieldUpdateOperationsInput | boolean
    PdfFileSummary?: StringFieldUpdateOperationsInput | string
    Diagram?: DiagramUpdateOneWithoutArticlesNestedInput
    UserArticle?: UserArticleUpdateManyWithoutArticlesNestedInput
  }

  export type ArticlesUncheckedUpdateInput = {
    ArticleID?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    StorageArticleUUID?: StringFieldUpdateOperationsInput | string
    Active?: BoolFieldUpdateOperationsInput | boolean
    PdfFileSummary?: StringFieldUpdateOperationsInput | string
    Diagram?: DiagramUncheckedUpdateOneWithoutArticlesNestedInput
    UserArticle?: UserArticleUncheckedUpdateManyWithoutArticlesNestedInput
  }

  export type ArticlesCreateManyInput = {
    ArticleID?: number
    Title: string
    StorageArticleUUID: string
    Active?: boolean
    PdfFileSummary: string
  }

  export type ArticlesUpdateManyMutationInput = {
    Title?: StringFieldUpdateOperationsInput | string
    StorageArticleUUID?: StringFieldUpdateOperationsInput | string
    Active?: BoolFieldUpdateOperationsInput | boolean
    PdfFileSummary?: StringFieldUpdateOperationsInput | string
  }

  export type ArticlesUncheckedUpdateManyInput = {
    ArticleID?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    StorageArticleUUID?: StringFieldUpdateOperationsInput | string
    Active?: BoolFieldUpdateOperationsInput | boolean
    PdfFileSummary?: StringFieldUpdateOperationsInput | string
  }

  export type DiagramCreateInput = {
    StorageDiagramName?: string | null
    Active?: boolean
    Articles: ArticlesCreateNestedOneWithoutDiagramInput
  }

  export type DiagramUncheckedCreateInput = {
    ArticleID: number
    StorageDiagramName?: string | null
    Active?: boolean
  }

  export type DiagramUpdateInput = {
    StorageDiagramName?: NullableStringFieldUpdateOperationsInput | string | null
    Active?: BoolFieldUpdateOperationsInput | boolean
    Articles?: ArticlesUpdateOneRequiredWithoutDiagramNestedInput
  }

  export type DiagramUncheckedUpdateInput = {
    ArticleID?: IntFieldUpdateOperationsInput | number
    StorageDiagramName?: NullableStringFieldUpdateOperationsInput | string | null
    Active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DiagramCreateManyInput = {
    ArticleID: number
    StorageDiagramName?: string | null
    Active?: boolean
  }

  export type DiagramUpdateManyMutationInput = {
    StorageDiagramName?: NullableStringFieldUpdateOperationsInput | string | null
    Active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DiagramUncheckedUpdateManyInput = {
    ArticleID?: IntFieldUpdateOperationsInput | number
    StorageDiagramName?: NullableStringFieldUpdateOperationsInput | string | null
    Active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserArticleCreateInput = {
    Users: UsersCreateNestedOneWithoutUserArticleInput
    Articles: ArticlesCreateNestedOneWithoutUserArticleInput
  }

  export type UserArticleUncheckedCreateInput = {
    UserID: number
    ArticleID: number
  }

  export type UserArticleUpdateInput = {
    Users?: UsersUpdateOneRequiredWithoutUserArticleNestedInput
    Articles?: ArticlesUpdateOneRequiredWithoutUserArticleNestedInput
  }

  export type UserArticleUncheckedUpdateInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    ArticleID?: IntFieldUpdateOperationsInput | number
  }

  export type UserArticleCreateManyInput = {
    UserID: number
    ArticleID: number
  }

  export type UserArticleUpdateManyMutationInput = {

  }

  export type UserArticleUncheckedUpdateManyInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    ArticleID?: IntFieldUpdateOperationsInput | number
  }

  export type UsersCreateInput = {
    FirstName: string
    LastName: string
    Email: string
    HashedPassword: string
    Salt: string
    Active?: boolean
    UserArticle?: UserArticleCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    UserID?: number
    FirstName: string
    LastName: string
    Email: string
    HashedPassword: string
    Salt: string
    Active?: boolean
    UserArticle?: UserArticleUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersUpdateInput = {
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    HashedPassword?: StringFieldUpdateOperationsInput | string
    Salt?: StringFieldUpdateOperationsInput | string
    Active?: BoolFieldUpdateOperationsInput | boolean
    UserArticle?: UserArticleUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    HashedPassword?: StringFieldUpdateOperationsInput | string
    Salt?: StringFieldUpdateOperationsInput | string
    Active?: BoolFieldUpdateOperationsInput | boolean
    UserArticle?: UserArticleUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateManyInput = {
    UserID?: number
    FirstName: string
    LastName: string
    Email: string
    HashedPassword: string
    Salt: string
    Active?: boolean
  }

  export type UsersUpdateManyMutationInput = {
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    HashedPassword?: StringFieldUpdateOperationsInput | string
    Salt?: StringFieldUpdateOperationsInput | string
    Active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsersUncheckedUpdateManyInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    HashedPassword?: StringFieldUpdateOperationsInput | string
    Salt?: StringFieldUpdateOperationsInput | string
    Active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DiagramNullableRelationFilter = {
    is?: DiagramWhereInput | null
    isNot?: DiagramWhereInput | null
  }

  export type UserArticleListRelationFilter = {
    every?: UserArticleWhereInput
    some?: UserArticleWhereInput
    none?: UserArticleWhereInput
  }

  export type UserArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArticlesCountOrderByAggregateInput = {
    ArticleID?: SortOrder
    Title?: SortOrder
    StorageArticleUUID?: SortOrder
    Active?: SortOrder
    PdfFileSummary?: SortOrder
  }

  export type ArticlesAvgOrderByAggregateInput = {
    ArticleID?: SortOrder
  }

  export type ArticlesMaxOrderByAggregateInput = {
    ArticleID?: SortOrder
    Title?: SortOrder
    StorageArticleUUID?: SortOrder
    Active?: SortOrder
    PdfFileSummary?: SortOrder
  }

  export type ArticlesMinOrderByAggregateInput = {
    ArticleID?: SortOrder
    Title?: SortOrder
    StorageArticleUUID?: SortOrder
    Active?: SortOrder
    PdfFileSummary?: SortOrder
  }

  export type ArticlesSumOrderByAggregateInput = {
    ArticleID?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ArticlesRelationFilter = {
    is?: ArticlesWhereInput
    isNot?: ArticlesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DiagramCountOrderByAggregateInput = {
    ArticleID?: SortOrder
    StorageDiagramName?: SortOrder
    Active?: SortOrder
  }

  export type DiagramAvgOrderByAggregateInput = {
    ArticleID?: SortOrder
  }

  export type DiagramMaxOrderByAggregateInput = {
    ArticleID?: SortOrder
    StorageDiagramName?: SortOrder
    Active?: SortOrder
  }

  export type DiagramMinOrderByAggregateInput = {
    ArticleID?: SortOrder
    StorageDiagramName?: SortOrder
    Active?: SortOrder
  }

  export type DiagramSumOrderByAggregateInput = {
    ArticleID?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UsersRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type UserArticleUserIDArticleIDCompoundUniqueInput = {
    UserID: number
    ArticleID: number
  }

  export type UserArticleCountOrderByAggregateInput = {
    UserID?: SortOrder
    ArticleID?: SortOrder
  }

  export type UserArticleAvgOrderByAggregateInput = {
    UserID?: SortOrder
    ArticleID?: SortOrder
  }

  export type UserArticleMaxOrderByAggregateInput = {
    UserID?: SortOrder
    ArticleID?: SortOrder
  }

  export type UserArticleMinOrderByAggregateInput = {
    UserID?: SortOrder
    ArticleID?: SortOrder
  }

  export type UserArticleSumOrderByAggregateInput = {
    UserID?: SortOrder
    ArticleID?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    UserID?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Email?: SortOrder
    HashedPassword?: SortOrder
    Salt?: SortOrder
    Active?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    UserID?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    UserID?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Email?: SortOrder
    HashedPassword?: SortOrder
    Salt?: SortOrder
    Active?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    UserID?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Email?: SortOrder
    HashedPassword?: SortOrder
    Salt?: SortOrder
    Active?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    UserID?: SortOrder
  }

  export type DiagramCreateNestedOneWithoutArticlesInput = {
    create?: XOR<DiagramCreateWithoutArticlesInput, DiagramUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: DiagramCreateOrConnectWithoutArticlesInput
    connect?: DiagramWhereUniqueInput
  }

  export type UserArticleCreateNestedManyWithoutArticlesInput = {
    create?: XOR<UserArticleCreateWithoutArticlesInput, UserArticleUncheckedCreateWithoutArticlesInput> | UserArticleCreateWithoutArticlesInput[] | UserArticleUncheckedCreateWithoutArticlesInput[]
    connectOrCreate?: UserArticleCreateOrConnectWithoutArticlesInput | UserArticleCreateOrConnectWithoutArticlesInput[]
    createMany?: UserArticleCreateManyArticlesInputEnvelope
    connect?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
  }

  export type DiagramUncheckedCreateNestedOneWithoutArticlesInput = {
    create?: XOR<DiagramCreateWithoutArticlesInput, DiagramUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: DiagramCreateOrConnectWithoutArticlesInput
    connect?: DiagramWhereUniqueInput
  }

  export type UserArticleUncheckedCreateNestedManyWithoutArticlesInput = {
    create?: XOR<UserArticleCreateWithoutArticlesInput, UserArticleUncheckedCreateWithoutArticlesInput> | UserArticleCreateWithoutArticlesInput[] | UserArticleUncheckedCreateWithoutArticlesInput[]
    connectOrCreate?: UserArticleCreateOrConnectWithoutArticlesInput | UserArticleCreateOrConnectWithoutArticlesInput[]
    createMany?: UserArticleCreateManyArticlesInputEnvelope
    connect?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DiagramUpdateOneWithoutArticlesNestedInput = {
    create?: XOR<DiagramCreateWithoutArticlesInput, DiagramUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: DiagramCreateOrConnectWithoutArticlesInput
    upsert?: DiagramUpsertWithoutArticlesInput
    disconnect?: DiagramWhereInput | boolean
    delete?: DiagramWhereInput | boolean
    connect?: DiagramWhereUniqueInput
    update?: XOR<XOR<DiagramUpdateToOneWithWhereWithoutArticlesInput, DiagramUpdateWithoutArticlesInput>, DiagramUncheckedUpdateWithoutArticlesInput>
  }

  export type UserArticleUpdateManyWithoutArticlesNestedInput = {
    create?: XOR<UserArticleCreateWithoutArticlesInput, UserArticleUncheckedCreateWithoutArticlesInput> | UserArticleCreateWithoutArticlesInput[] | UserArticleUncheckedCreateWithoutArticlesInput[]
    connectOrCreate?: UserArticleCreateOrConnectWithoutArticlesInput | UserArticleCreateOrConnectWithoutArticlesInput[]
    upsert?: UserArticleUpsertWithWhereUniqueWithoutArticlesInput | UserArticleUpsertWithWhereUniqueWithoutArticlesInput[]
    createMany?: UserArticleCreateManyArticlesInputEnvelope
    set?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
    disconnect?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
    delete?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
    connect?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
    update?: UserArticleUpdateWithWhereUniqueWithoutArticlesInput | UserArticleUpdateWithWhereUniqueWithoutArticlesInput[]
    updateMany?: UserArticleUpdateManyWithWhereWithoutArticlesInput | UserArticleUpdateManyWithWhereWithoutArticlesInput[]
    deleteMany?: UserArticleScalarWhereInput | UserArticleScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DiagramUncheckedUpdateOneWithoutArticlesNestedInput = {
    create?: XOR<DiagramCreateWithoutArticlesInput, DiagramUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: DiagramCreateOrConnectWithoutArticlesInput
    upsert?: DiagramUpsertWithoutArticlesInput
    disconnect?: DiagramWhereInput | boolean
    delete?: DiagramWhereInput | boolean
    connect?: DiagramWhereUniqueInput
    update?: XOR<XOR<DiagramUpdateToOneWithWhereWithoutArticlesInput, DiagramUpdateWithoutArticlesInput>, DiagramUncheckedUpdateWithoutArticlesInput>
  }

  export type UserArticleUncheckedUpdateManyWithoutArticlesNestedInput = {
    create?: XOR<UserArticleCreateWithoutArticlesInput, UserArticleUncheckedCreateWithoutArticlesInput> | UserArticleCreateWithoutArticlesInput[] | UserArticleUncheckedCreateWithoutArticlesInput[]
    connectOrCreate?: UserArticleCreateOrConnectWithoutArticlesInput | UserArticleCreateOrConnectWithoutArticlesInput[]
    upsert?: UserArticleUpsertWithWhereUniqueWithoutArticlesInput | UserArticleUpsertWithWhereUniqueWithoutArticlesInput[]
    createMany?: UserArticleCreateManyArticlesInputEnvelope
    set?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
    disconnect?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
    delete?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
    connect?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
    update?: UserArticleUpdateWithWhereUniqueWithoutArticlesInput | UserArticleUpdateWithWhereUniqueWithoutArticlesInput[]
    updateMany?: UserArticleUpdateManyWithWhereWithoutArticlesInput | UserArticleUpdateManyWithWhereWithoutArticlesInput[]
    deleteMany?: UserArticleScalarWhereInput | UserArticleScalarWhereInput[]
  }

  export type ArticlesCreateNestedOneWithoutDiagramInput = {
    create?: XOR<ArticlesCreateWithoutDiagramInput, ArticlesUncheckedCreateWithoutDiagramInput>
    connectOrCreate?: ArticlesCreateOrConnectWithoutDiagramInput
    connect?: ArticlesWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ArticlesUpdateOneRequiredWithoutDiagramNestedInput = {
    create?: XOR<ArticlesCreateWithoutDiagramInput, ArticlesUncheckedCreateWithoutDiagramInput>
    connectOrCreate?: ArticlesCreateOrConnectWithoutDiagramInput
    upsert?: ArticlesUpsertWithoutDiagramInput
    connect?: ArticlesWhereUniqueInput
    update?: XOR<XOR<ArticlesUpdateToOneWithWhereWithoutDiagramInput, ArticlesUpdateWithoutDiagramInput>, ArticlesUncheckedUpdateWithoutDiagramInput>
  }

  export type UsersCreateNestedOneWithoutUserArticleInput = {
    create?: XOR<UsersCreateWithoutUserArticleInput, UsersUncheckedCreateWithoutUserArticleInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUserArticleInput
    connect?: UsersWhereUniqueInput
  }

  export type ArticlesCreateNestedOneWithoutUserArticleInput = {
    create?: XOR<ArticlesCreateWithoutUserArticleInput, ArticlesUncheckedCreateWithoutUserArticleInput>
    connectOrCreate?: ArticlesCreateOrConnectWithoutUserArticleInput
    connect?: ArticlesWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutUserArticleNestedInput = {
    create?: XOR<UsersCreateWithoutUserArticleInput, UsersUncheckedCreateWithoutUserArticleInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUserArticleInput
    upsert?: UsersUpsertWithoutUserArticleInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutUserArticleInput, UsersUpdateWithoutUserArticleInput>, UsersUncheckedUpdateWithoutUserArticleInput>
  }

  export type ArticlesUpdateOneRequiredWithoutUserArticleNestedInput = {
    create?: XOR<ArticlesCreateWithoutUserArticleInput, ArticlesUncheckedCreateWithoutUserArticleInput>
    connectOrCreate?: ArticlesCreateOrConnectWithoutUserArticleInput
    upsert?: ArticlesUpsertWithoutUserArticleInput
    connect?: ArticlesWhereUniqueInput
    update?: XOR<XOR<ArticlesUpdateToOneWithWhereWithoutUserArticleInput, ArticlesUpdateWithoutUserArticleInput>, ArticlesUncheckedUpdateWithoutUserArticleInput>
  }

  export type UserArticleCreateNestedManyWithoutUsersInput = {
    create?: XOR<UserArticleCreateWithoutUsersInput, UserArticleUncheckedCreateWithoutUsersInput> | UserArticleCreateWithoutUsersInput[] | UserArticleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: UserArticleCreateOrConnectWithoutUsersInput | UserArticleCreateOrConnectWithoutUsersInput[]
    createMany?: UserArticleCreateManyUsersInputEnvelope
    connect?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
  }

  export type UserArticleUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<UserArticleCreateWithoutUsersInput, UserArticleUncheckedCreateWithoutUsersInput> | UserArticleCreateWithoutUsersInput[] | UserArticleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: UserArticleCreateOrConnectWithoutUsersInput | UserArticleCreateOrConnectWithoutUsersInput[]
    createMany?: UserArticleCreateManyUsersInputEnvelope
    connect?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
  }

  export type UserArticleUpdateManyWithoutUsersNestedInput = {
    create?: XOR<UserArticleCreateWithoutUsersInput, UserArticleUncheckedCreateWithoutUsersInput> | UserArticleCreateWithoutUsersInput[] | UserArticleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: UserArticleCreateOrConnectWithoutUsersInput | UserArticleCreateOrConnectWithoutUsersInput[]
    upsert?: UserArticleUpsertWithWhereUniqueWithoutUsersInput | UserArticleUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: UserArticleCreateManyUsersInputEnvelope
    set?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
    disconnect?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
    delete?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
    connect?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
    update?: UserArticleUpdateWithWhereUniqueWithoutUsersInput | UserArticleUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: UserArticleUpdateManyWithWhereWithoutUsersInput | UserArticleUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: UserArticleScalarWhereInput | UserArticleScalarWhereInput[]
  }

  export type UserArticleUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<UserArticleCreateWithoutUsersInput, UserArticleUncheckedCreateWithoutUsersInput> | UserArticleCreateWithoutUsersInput[] | UserArticleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: UserArticleCreateOrConnectWithoutUsersInput | UserArticleCreateOrConnectWithoutUsersInput[]
    upsert?: UserArticleUpsertWithWhereUniqueWithoutUsersInput | UserArticleUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: UserArticleCreateManyUsersInputEnvelope
    set?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
    disconnect?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
    delete?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
    connect?: UserArticleWhereUniqueInput | UserArticleWhereUniqueInput[]
    update?: UserArticleUpdateWithWhereUniqueWithoutUsersInput | UserArticleUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: UserArticleUpdateManyWithWhereWithoutUsersInput | UserArticleUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: UserArticleScalarWhereInput | UserArticleScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DiagramCreateWithoutArticlesInput = {
    StorageDiagramName?: string | null
    Active?: boolean
  }

  export type DiagramUncheckedCreateWithoutArticlesInput = {
    StorageDiagramName?: string | null
    Active?: boolean
  }

  export type DiagramCreateOrConnectWithoutArticlesInput = {
    where: DiagramWhereUniqueInput
    create: XOR<DiagramCreateWithoutArticlesInput, DiagramUncheckedCreateWithoutArticlesInput>
  }

  export type UserArticleCreateWithoutArticlesInput = {
    Users: UsersCreateNestedOneWithoutUserArticleInput
  }

  export type UserArticleUncheckedCreateWithoutArticlesInput = {
    UserID: number
  }

  export type UserArticleCreateOrConnectWithoutArticlesInput = {
    where: UserArticleWhereUniqueInput
    create: XOR<UserArticleCreateWithoutArticlesInput, UserArticleUncheckedCreateWithoutArticlesInput>
  }

  export type UserArticleCreateManyArticlesInputEnvelope = {
    data: UserArticleCreateManyArticlesInput | UserArticleCreateManyArticlesInput[]
    skipDuplicates?: boolean
  }

  export type DiagramUpsertWithoutArticlesInput = {
    update: XOR<DiagramUpdateWithoutArticlesInput, DiagramUncheckedUpdateWithoutArticlesInput>
    create: XOR<DiagramCreateWithoutArticlesInput, DiagramUncheckedCreateWithoutArticlesInput>
    where?: DiagramWhereInput
  }

  export type DiagramUpdateToOneWithWhereWithoutArticlesInput = {
    where?: DiagramWhereInput
    data: XOR<DiagramUpdateWithoutArticlesInput, DiagramUncheckedUpdateWithoutArticlesInput>
  }

  export type DiagramUpdateWithoutArticlesInput = {
    StorageDiagramName?: NullableStringFieldUpdateOperationsInput | string | null
    Active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DiagramUncheckedUpdateWithoutArticlesInput = {
    StorageDiagramName?: NullableStringFieldUpdateOperationsInput | string | null
    Active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserArticleUpsertWithWhereUniqueWithoutArticlesInput = {
    where: UserArticleWhereUniqueInput
    update: XOR<UserArticleUpdateWithoutArticlesInput, UserArticleUncheckedUpdateWithoutArticlesInput>
    create: XOR<UserArticleCreateWithoutArticlesInput, UserArticleUncheckedCreateWithoutArticlesInput>
  }

  export type UserArticleUpdateWithWhereUniqueWithoutArticlesInput = {
    where: UserArticleWhereUniqueInput
    data: XOR<UserArticleUpdateWithoutArticlesInput, UserArticleUncheckedUpdateWithoutArticlesInput>
  }

  export type UserArticleUpdateManyWithWhereWithoutArticlesInput = {
    where: UserArticleScalarWhereInput
    data: XOR<UserArticleUpdateManyMutationInput, UserArticleUncheckedUpdateManyWithoutArticlesInput>
  }

  export type UserArticleScalarWhereInput = {
    AND?: UserArticleScalarWhereInput | UserArticleScalarWhereInput[]
    OR?: UserArticleScalarWhereInput[]
    NOT?: UserArticleScalarWhereInput | UserArticleScalarWhereInput[]
    UserID?: IntFilter<"UserArticle"> | number
    ArticleID?: IntFilter<"UserArticle"> | number
  }

  export type ArticlesCreateWithoutDiagramInput = {
    Title: string
    StorageArticleUUID: string
    Active?: boolean
    PdfFileSummary: string
    UserArticle?: UserArticleCreateNestedManyWithoutArticlesInput
  }

  export type ArticlesUncheckedCreateWithoutDiagramInput = {
    ArticleID?: number
    Title: string
    StorageArticleUUID: string
    Active?: boolean
    PdfFileSummary: string
    UserArticle?: UserArticleUncheckedCreateNestedManyWithoutArticlesInput
  }

  export type ArticlesCreateOrConnectWithoutDiagramInput = {
    where: ArticlesWhereUniqueInput
    create: XOR<ArticlesCreateWithoutDiagramInput, ArticlesUncheckedCreateWithoutDiagramInput>
  }

  export type ArticlesUpsertWithoutDiagramInput = {
    update: XOR<ArticlesUpdateWithoutDiagramInput, ArticlesUncheckedUpdateWithoutDiagramInput>
    create: XOR<ArticlesCreateWithoutDiagramInput, ArticlesUncheckedCreateWithoutDiagramInput>
    where?: ArticlesWhereInput
  }

  export type ArticlesUpdateToOneWithWhereWithoutDiagramInput = {
    where?: ArticlesWhereInput
    data: XOR<ArticlesUpdateWithoutDiagramInput, ArticlesUncheckedUpdateWithoutDiagramInput>
  }

  export type ArticlesUpdateWithoutDiagramInput = {
    Title?: StringFieldUpdateOperationsInput | string
    StorageArticleUUID?: StringFieldUpdateOperationsInput | string
    Active?: BoolFieldUpdateOperationsInput | boolean
    PdfFileSummary?: StringFieldUpdateOperationsInput | string
    UserArticle?: UserArticleUpdateManyWithoutArticlesNestedInput
  }

  export type ArticlesUncheckedUpdateWithoutDiagramInput = {
    ArticleID?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    StorageArticleUUID?: StringFieldUpdateOperationsInput | string
    Active?: BoolFieldUpdateOperationsInput | boolean
    PdfFileSummary?: StringFieldUpdateOperationsInput | string
    UserArticle?: UserArticleUncheckedUpdateManyWithoutArticlesNestedInput
  }

  export type UsersCreateWithoutUserArticleInput = {
    FirstName: string
    LastName: string
    Email: string
    HashedPassword: string
    Salt: string
    Active?: boolean
  }

  export type UsersUncheckedCreateWithoutUserArticleInput = {
    UserID?: number
    FirstName: string
    LastName: string
    Email: string
    HashedPassword: string
    Salt: string
    Active?: boolean
  }

  export type UsersCreateOrConnectWithoutUserArticleInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUserArticleInput, UsersUncheckedCreateWithoutUserArticleInput>
  }

  export type ArticlesCreateWithoutUserArticleInput = {
    Title: string
    StorageArticleUUID: string
    Active?: boolean
    PdfFileSummary: string
    Diagram?: DiagramCreateNestedOneWithoutArticlesInput
  }

  export type ArticlesUncheckedCreateWithoutUserArticleInput = {
    ArticleID?: number
    Title: string
    StorageArticleUUID: string
    Active?: boolean
    PdfFileSummary: string
    Diagram?: DiagramUncheckedCreateNestedOneWithoutArticlesInput
  }

  export type ArticlesCreateOrConnectWithoutUserArticleInput = {
    where: ArticlesWhereUniqueInput
    create: XOR<ArticlesCreateWithoutUserArticleInput, ArticlesUncheckedCreateWithoutUserArticleInput>
  }

  export type UsersUpsertWithoutUserArticleInput = {
    update: XOR<UsersUpdateWithoutUserArticleInput, UsersUncheckedUpdateWithoutUserArticleInput>
    create: XOR<UsersCreateWithoutUserArticleInput, UsersUncheckedCreateWithoutUserArticleInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutUserArticleInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutUserArticleInput, UsersUncheckedUpdateWithoutUserArticleInput>
  }

  export type UsersUpdateWithoutUserArticleInput = {
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    HashedPassword?: StringFieldUpdateOperationsInput | string
    Salt?: StringFieldUpdateOperationsInput | string
    Active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsersUncheckedUpdateWithoutUserArticleInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    HashedPassword?: StringFieldUpdateOperationsInput | string
    Salt?: StringFieldUpdateOperationsInput | string
    Active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ArticlesUpsertWithoutUserArticleInput = {
    update: XOR<ArticlesUpdateWithoutUserArticleInput, ArticlesUncheckedUpdateWithoutUserArticleInput>
    create: XOR<ArticlesCreateWithoutUserArticleInput, ArticlesUncheckedCreateWithoutUserArticleInput>
    where?: ArticlesWhereInput
  }

  export type ArticlesUpdateToOneWithWhereWithoutUserArticleInput = {
    where?: ArticlesWhereInput
    data: XOR<ArticlesUpdateWithoutUserArticleInput, ArticlesUncheckedUpdateWithoutUserArticleInput>
  }

  export type ArticlesUpdateWithoutUserArticleInput = {
    Title?: StringFieldUpdateOperationsInput | string
    StorageArticleUUID?: StringFieldUpdateOperationsInput | string
    Active?: BoolFieldUpdateOperationsInput | boolean
    PdfFileSummary?: StringFieldUpdateOperationsInput | string
    Diagram?: DiagramUpdateOneWithoutArticlesNestedInput
  }

  export type ArticlesUncheckedUpdateWithoutUserArticleInput = {
    ArticleID?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    StorageArticleUUID?: StringFieldUpdateOperationsInput | string
    Active?: BoolFieldUpdateOperationsInput | boolean
    PdfFileSummary?: StringFieldUpdateOperationsInput | string
    Diagram?: DiagramUncheckedUpdateOneWithoutArticlesNestedInput
  }

  export type UserArticleCreateWithoutUsersInput = {
    Articles: ArticlesCreateNestedOneWithoutUserArticleInput
  }

  export type UserArticleUncheckedCreateWithoutUsersInput = {
    ArticleID: number
  }

  export type UserArticleCreateOrConnectWithoutUsersInput = {
    where: UserArticleWhereUniqueInput
    create: XOR<UserArticleCreateWithoutUsersInput, UserArticleUncheckedCreateWithoutUsersInput>
  }

  export type UserArticleCreateManyUsersInputEnvelope = {
    data: UserArticleCreateManyUsersInput | UserArticleCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type UserArticleUpsertWithWhereUniqueWithoutUsersInput = {
    where: UserArticleWhereUniqueInput
    update: XOR<UserArticleUpdateWithoutUsersInput, UserArticleUncheckedUpdateWithoutUsersInput>
    create: XOR<UserArticleCreateWithoutUsersInput, UserArticleUncheckedCreateWithoutUsersInput>
  }

  export type UserArticleUpdateWithWhereUniqueWithoutUsersInput = {
    where: UserArticleWhereUniqueInput
    data: XOR<UserArticleUpdateWithoutUsersInput, UserArticleUncheckedUpdateWithoutUsersInput>
  }

  export type UserArticleUpdateManyWithWhereWithoutUsersInput = {
    where: UserArticleScalarWhereInput
    data: XOR<UserArticleUpdateManyMutationInput, UserArticleUncheckedUpdateManyWithoutUsersInput>
  }

  export type UserArticleCreateManyArticlesInput = {
    UserID: number
  }

  export type UserArticleUpdateWithoutArticlesInput = {
    Users?: UsersUpdateOneRequiredWithoutUserArticleNestedInput
  }

  export type UserArticleUncheckedUpdateWithoutArticlesInput = {
    UserID?: IntFieldUpdateOperationsInput | number
  }

  export type UserArticleUncheckedUpdateManyWithoutArticlesInput = {
    UserID?: IntFieldUpdateOperationsInput | number
  }

  export type UserArticleCreateManyUsersInput = {
    ArticleID: number
  }

  export type UserArticleUpdateWithoutUsersInput = {
    Articles?: ArticlesUpdateOneRequiredWithoutUserArticleNestedInput
  }

  export type UserArticleUncheckedUpdateWithoutUsersInput = {
    ArticleID?: IntFieldUpdateOperationsInput | number
  }

  export type UserArticleUncheckedUpdateManyWithoutUsersInput = {
    ArticleID?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ArticlesCountOutputTypeDefaultArgs instead
     */
    export type ArticlesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArticlesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArticlesDefaultArgs instead
     */
    export type ArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArticlesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DiagramDefaultArgs instead
     */
    export type DiagramArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DiagramDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserArticleDefaultArgs instead
     */
    export type UserArticleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserArticleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersDefaultArgs instead
     */
    export type UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}