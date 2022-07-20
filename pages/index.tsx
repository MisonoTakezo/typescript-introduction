import type { NextPage } from "next";

function double(x: number): number {
  return x * 2;
}
const Home: NextPage = () => {
  return <div>a</div>;
};
export default Home;

// 型推論　タイプインファレンス 勝手に型を推測してくれる
// 型注釈 タイプアノテーション プログラマーが型をつける
// ドキュメント的な役割を果たす
// コンパイラ(tsc)の理解の助けになり、コンパイルが速くなる
// 型推論では足りないこともある
// 型注釈をつけることで、プログラマードリブンな開発ができる
// 型アサーション タイプアサーション 既にある型に対して上書きで型を付与できる。
// let foo = {} as { bar: number };
// foo.bar = 1;

// Javascriptはプリミティブ型とオブジェクトに分かれる
// プリミティブ型　Boolean, String, Number, null, undefind, BigInt, Symbolの7つ

// const foo: boolean = true
// const foo: string = "aaaa"
// const foo: number = 0.1
// const foo: null = null
//const foo: undefined = undefined;
// undefinedは初期化されていない状態

// Literal Types
// Boolean, String, Numberのこれらのプリミティブ型を細分化したもの
// const foo:true = true;
// const foo: "foo" = "foo";
// const foo: 1 = 1;

// const foo = "foo";
// let bar = foo;
// widnig = 型が拡張されてしまう性質のこと

// オブジェクトのさまざまな型 Array Tuple Any Unknown Void Never

// const foo: (number | string)[] = [1, 2, 3, "4", 5];

// Tupleの配列との違いはそれぞれの要素に対して型をつけることができ、要素の数が決まっている
// const bar: Array<number> = [1, 2, 3];

// const bar: [string, number] = ["a", 1];

// const foo: any = "hello";

// Unknownは型安全なany 利用するときに型判定

/* const foo: unknown = "foo";
if (typeof foo === "string") {
  foo.length;
}
 */

//voidは返り値がないという型

/* function foo(): void {
  alert("hello");
} */

/* const foo = (): void => {
  alert("hello");
};

const bar: () => void = () => {
  alert("hello");
}; */

// neverは絶対到達しない

/* const foo = (bar: "a" | "b"): never => {
  switch (bar) {
    case "a":
      return;
    case "b":
      return;
    default:
      bar.toFixed();
      break;
  }
}; */

// オブジェクトの2つの意味　プリミティブ型以外のオブジェクト または、{}辞書型のオブジェクト

// 空のオブジェクトの作成方法
// let obj3: Record<string, unknown> = {};
// キーの部分[key: string]を index signature と呼ぶ。
// let obj4: { [key: string]: unknown; foo?: string } = {}; // この書き方が好ましい

// プロパティがある場合の書き方(キーが決まっている場合)
// let obj5: { a: number; b: string; c?: unknown } = { a: 1, b: "hello" };

//複数の型を1つにまとめることができる

/* type Foo = {
  a: number;
  b: string;
};

type Bar = {
  a: string;
  c: boolean;
};
 */
// Type Alies
// Intersection Types
// type FooBar = Foo | Bar;
// Union Types
// type FooBar = Foo | Bar;
/* const test: FooBar = {
  a: 1,
  b: "",
  c: true,
};

if ("c" in test) {
  test.c;
} */

/* // Type Alies
type Foo = {
  a: number;
};

// Interface
interface Bar {
  a: number;
} */

/* const foo: Bar = {
  a: 1,
}; */

// Interfaceは宣言できるものが辞書型のオブジェクト
// Interfaceは同名宣言するとマージされる
// Interfaceはextendsで継承できる Type Aliesの場合は Intercectで表現
// プロパティのオーバーライドの際、型違いではInterfaceはエラー、Type Aliesは Intercectになる。
// Maped Types

/* interface Bar {
  b: number;
}

const bar: Bar = {
  a: 1,
  b: 1,
};

interface Bar2 extends Bar {
  c: number;
}

const bar2: Bar2 = {
  a: 1,
  b: 2,
  c: 3,
}; */

// Type Aliesの場合はIntercectで表現
/* type Bar = Foo & {
  b: number;
}; */

// Mapped Types Type AliesのみでMapped Typesが使用可能

/* type Animals = "dog" | "cat";

type Foo = {
  [key in Animals]: number;
};

const foo: Foo = {
  dog: 1,
  cat: 1,
}; */
