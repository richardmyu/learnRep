# 三 语法

## 1 组成

1).**ECMAScript**：定义了 js 里面的命名规范、变量、数据类型、基本语法、操作语句等最核心的东西；

2).**DOM**（document object modle）文档对象模型 ：DOM 结构中提供了很多用来操作 DOM 元素的方法和属性（`api`）；

3).**BOM**（brower object modle）浏览器对象模型 ：提供一系列的方法（`api`）来操作浏览器；

## 2 命名规范

1).严格区分大小写；

2).使用小驼峰命名法：

---

- a.首字母小写，其余每个有意义的单词首字母大写；
- b.可以使用数字（但不能作为首位）、字母、下划线、`$`；
- c.不能使用关键字（在 js 中有特殊意义的字）和保留字（未来可能成为关键字的词）；

---

- 规范如下：

  1.变量：匈牙利命名法

  2.函数：Camel (第一个单词首字母小写，其他单词首字母大写)

  3.属性：Camel

| 类型     | 前缀 | 实例      |
| -------- | :--: | --------- |
| Array    |  a   | aNameList |
| Boolean  |  b   | bVisible  |
| Float    |  f   | fMoney    |
| Function |  fn  | fnMethod  |
| Int      |  i   | iAge      |
| Object   |  o   | oType     |
| Regexp   |  re  | rePattern |
| String   |  s   | sName     |

## 3 JavaScript 中的变量

### 3.1 `var`

1).用来声明一个变量（对于未经初始化的变量，会保存一个特殊的值: `undefined` ），可以重复声明；

2).在全局域下用 `var` 关键字定义一个变量 a 或者不使用声明变量而直接写一个变量则表示该变量为全局变量，都相当于给 `window` 增加一个属性 a，可以写成 `window.a`；

3).用 `var` 操作符定义的变量将成为定义该变量的作用域中的局部变量，在该作用域之外无法访问该变量。也就是说，如果在函数中使用 `var` 定义一个变量，那么这个变量在函数退出后就会被销毁；

4).可以用一条语句定义多个变量，用逗号隔开(因为 ECMAScript 的变量是松散类型的，所以不同类型初始化变量的操作可以放在一条语句中来完成)。

严格地说，`var a = 1` 与 `a = 1`，这两条语句的效果不完全一样，主要体现在 `delete` 命令无法删除前者。不过，绝大多数情况下，这种差异是可以忽略的。

> 严格模式下，不能定义 `eval` 或 `arguments` 的变量，否则导致语法错误。

虽然省略 `var` 操作符可以定义全局变量，但我们不推荐这种做法。因为在局部作用域中定义的全局变量很难维护，而且如果有意的忽略 `var` 操作符，也会由于相应的变量不会马上就有定义而导致不必要的混乱。给未经声明的变量赋值在严格模式下会导致抛出 `ReferenceRrror` 错误。

### 3.2 变量提升

JavaScript 引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行地运行。这造成的结果，就是所有的变量的声明语句，都会被提升到代码的头部，这就叫做**变量提升（hoisting）**。

变量提升是一种机制，在作用域形成后，代码执行之前，把关键词 `var` 和 `function` 提前声明或定义；`var` 只会声明，`function` 定义；

> JS 的变量提升是以段为处理单元的。

对引用数据类型变量提升，会把内容放在堆内存，任意类型数据都会记录（变量也会存放），若是表达式（函数也是表达式）则将结果存放；待代码执行时，才将对应的变量赋值；

变量提升注意事项：

---

1).`if` 或 `while` 判断语句中：不管条件判断是否成立，判断体中的内容都要进行变量提升，但是 `var` 和 `function` 都只能起声明的作用（即块级作用域之外，`function` 只作声明）；若条件成立，先给 `function` 赋值再执行代码(声明和赋值同时进行)；

```javascript
console.log(a); //undefined
console.log(aa); //undefined
console.log(cc); //Fn cc(){}
if (true) {
  console.log(a); //undefined
  console.log(aa); //Fn aa(){}
  var a = 6;

  function aa() {
    return "aa"
  }
}
console.log(b); //undefined
console.log(bb); //undefined
while (false) {
  var b = 6;

  function bb() {
    return "bb"
  }
}

function cc() {
  return "cc"
}
```

---

2).变量提升的时候只对 "`=`" 等号左边的变量进行变量提升，右边代表的都是值，是不进行变量提升的；

```javascript
console.log(a); //undefined
console.log(b); //b is not defined

var a = b + 1;
```

---

3).在全局作用域下变量提升的时候，自执行函数中的 `function` 是不参与的，当代码执行到对应的区域后，声明、定义、执行一起完成；

```javascript
console.log(a); //Fn a(){}
console.log(b); //b is not defined

function a() {
  return "a"
}
(function b(str) {
  return str;
})("123");
```

---

4).匿名函数当做参数的时候不进行变量提升；

---

5).虽然函数体中 `return` 下面的代码是不执行的，但是需要进行私有作用域下的变量提升；而 `return` 的代码会执行，但是不进行变量提升的；

```javascript
function a() {
  console.log(b); //b is not defined
  console.log(c); //ƒ c() {}
  return function b() {};

  function c() {};
}
a();
```

---

6).在变量提升的时候，如果发现名字冲突了，不需要重新声明，可能需要重新的赋值。（在 JS 中不管是变量还是函数，只要名字一样了，就是相互冲突，JS 中一个名字就代表一个变量，只不过存储的值可以是任意数据类型的）；

```javascript
//同名函数会覆盖变量
console.log(a); //ƒ a() {}
var a = 6;
function a() {}
//同名变量不会覆盖函数
console.log(a); //ƒ a() {}
function a() {}
var a = 6;
//同名函数会覆盖函数
console.log(a); //ƒ a() { return "2"}
function a() {
  return "1"
}

function a() {
  return "2"
}
```

---

7).对于函数定义式，会将函数定义提前。而函数表达式，会在执行过程中才计算。

---

> 变量提声时，先声明的拥有声明权，后声明的会被忽略；但是不会忽略赋值行为；

### 3.3 变量赋值

变量进行连续赋值时，只有最左边才会被声明，中间变量不会被声明（但有赋值）；

```javascript
console.log(m); //undefined
console.log(n); //n is not defined
var m = n = 2;
console.log(m); //2
console.log(n); //2
```

### 3.4 执行环境

**执行环境（execution context）**定义变量或函数有权访问的其他数据，决定了它们各自的行为。每个执行环境都有一个与之关联的**变量对象（variable object）**，环境中定义的所有变量和函数都保持在这个对象中。

### 3.5 作用域链

当代码在一个环境中执行的时候，会创建变量对象的一个**作用域链（scope chain）**；

在私有作用域中变量调用时，先检查私有作用域是否有变量声明，若没有则往上一级查找，直至 `window`，若还找不到则报错，这个过程称为作用域链；

> 私有作用域之间没有关联；

### 3.6 作用域销毁机制

堆内存销毁需要手动销毁，否则待全局作用域退出才销毁 （即赋值 `null`）;

---

栈内存：

- 全局：关闭浏览器；

- 私有：
  - 销毁：一个函数没有返回值，或者返回值的内容没有被外界占用（返回值为引用数据类型，且被外界变量接受）；
  - 不销毁：一个函数返回值（通常是函数）被外界占用；

---

## 4 数据类型

ECMAScript 的数据类型具有动态性

### 4.1 `typeof` 操作符

`typeof` 用来检测给定变量的数据类型。对一个值使用 `typeof` 操作符可能返回以下某个字符串：

---

- `“undefined”` 该值未定义
- `“boolean”` 该值是布尔值
- `“string”` 该值是字符串
- `“number”` 该值是数值
- `“object”` 该值是对象或者 `null`
- `“function”` 该值是函数

---

```javascript
s; // ReferenceError: v is not defined

console.log(typeof s); //undefined

s = "tian";
console.log(typeof s); //string
```

上面代码中，变量 s 没有用 `var` 命令声明，直接使用就会报错。但是，放在 `typeof` 后面，就不报错了，而是返回 `undefined`。

实际编程中，这个特点通常用在判断语句。

```javascript
// 错误的写法
if (s) {
  // ...
}
// ReferenceError: s is not defined

// 正确的写法
if (typeof s === "undefined") {
  // ...
}
```

`typeof` 操作符的操作数可以是变量，也可以是字面量。注意 `typeof` 是一个操作符而不是函数，因而圆括号可用可不用。

`typeof` 操作符对 `null` 返回 `"object"`，因为特殊值 `"object"` 被认为是一个空的对象引用。Safari 及之前版本、chrome7 及之前版本对正则表达式调用 `typeof` 操作符时会返回 `"function"`，而其他浏览器在这种情况下会返回 `"object"`。

> 从技术角度讲，函数在 ECMAScript 中是对象，不是一种数据类型。然而，函数也确实有一些特殊的属性，因此通过 `typeof` 操作符来区分函数和其他对象是很有必要的。

### 4.2 基本数据类型（值类型）

由简单的结构组成

1).`number` 数字

2).`string` 字符串

3).`boolean` 布尔

4).`null` 空对象指针

5).`undefined` 未定义(即由于目前没有定义，所以此处暂时没有任何值)

6).`Symbol`

> 为了避免属性名的冲突，ES6 新增了 `Symbol` 类型，`Symbol` 是一种原始数据类型，表示独一无二的值；

### 4.3 引用数据类型（地址类型）

结构相对复杂

1).`object` 对象数据类型

2).`function` 函数数据类型

引用类型的值（对象）是引用类型的一个实例。在 ECMAScript 中，**引用类型**是一种数据结构，用于将数据和功能组织在一起。它也常被称为**类**，但这并不妥当。尽管从技术上讲，ECMAScript 是一门面向对象的语言，但它不具备传统的面向对象语言所支持的类和接口等基本结构。引用类型有时也被称为**对象定义**，因为它描述的是一类对象所具有的属性和方法。

**对象是某个特定引用类型的实例**。新对象是使用 `new` 操作符后跟一个构造函数来创建的。构造函数本身就是一个函数，只不过该函数是出于用来创建新对象而定义的。

> 函数其实是处理数据的方法，JavaScript 把它当成一种数据类型，可以赋值给变量，这为编程带来了很大的灵活性，也为 JavaScript 的“函数式编程”奠定了基础。

### 4.4 基本数据类型和引用数据类型的区别

原始值：存储在**栈（stack）**中的简单数据，也就是说，它们的值直接存储在变量访问的位置。这是因为这些原始类型占据的空间是固定的，所以可将他们存储在较小的内存区域 – 栈中。这样存储便于迅速查寻变量的值。

引用值：存储在**堆（heap）**中的对象，也就是说，存储在变量处的值是一个**指针（point）**，指向存储对象的内存地址。这是因为：引用值的大小会改变，所以不能把它放在栈中，否则会降低变量查寻的速度。相反，放在变量的栈空间中的值是该对象存储在堆中的地址。地址的大小是固定的，所以把它存储在栈中对变量性能无任何负面影响。

基本数据类型是把值直接的给变量，在接下来的操作过程中，直接拿这个值进行操作但是两者直接不会相互影响，各自独立；

而引用数据类型：

---

- a：定义了一个变量；
- b：开辟了一个新空间，并把属性名和属性值存储在这个空间中，有相应的空间地址；
- c：把空间地址给这个变量（不是直接给值），变量并没有存储这个值，而是存储这个值的引用空间地址；
- d：接下来我们把这个地址传递给新变量，此时两个变量操作的是同一空间，当其中一个变量改变，另一个变量也会改变（因为引用空间里的值发生改变）。

---

### 4.5 `undefined` 类型

`undefined` 是 JavaScript 独有的数据和数据类型，这种类型数据只有一个值，即 `undefined`，它的类型也是 `undefined`。

> 一般而言，不需要显示的把变量的值设置为 `undefined`。字面值 `undefined` 的主要目的是用来比较。ECMA-262 第 3 版引入这个值，是为了正是区分空对象指针与未经初始化的变量。

不过，包含 `undefined` 值的变量与尚未定义的变量还是不一样的：

```javascript
var mess;
console.log(mess); //undefined
console.log(me);
//Uncaught ReferenceError: me is not defined

console.log(typeof mess); //undefined
console.log(typeof me); //undefined
```

对于尚未定义的变量，只能进行一项操作，即使用 `typeof` 检测其数据类型（使用 `delete` 也不会报错，但没什么实际意义，严格模式下则会报错）。

然而对未初始化的变量和未声明的变量执行 `typeof` 操作，均返回 `undefined`，这个结果有其逻辑上的合理性。因为虽然这两种变量从技术角度看有本质区别，但实际上无论对哪种变量也不可能执行真正的操作。

`undefined` 表示“未定义”，下面是返回 `undefined` 的典型场景。

```javascript
// 变量声明了，但没有赋值
var i;
i; // undefined

// 调用函数时，应该提供的参数没有提供，该参数等于 undefined
function f(x) {
  return x;
}
f(); // undefined

// 对象没有赋值的属性
var o = new Object();
o.p; // undefined

// 函数没有返回值时，默认返回 undefined
function f() {}
f(); // undefined
```

### 4.6 `null` 类型

`null` 是 JavaScript 第二个独有的数据和数据类型，这种类型数据只有一个值，即 `null`，它的类型也是 `null`。从逻辑角度看，`null` 值表示一个空对象指针，而这也是使用 `typeof` 操作符检测 `null` 值返回 `"object"` 的原因。

`null` 的用 typeof 操作符检测的类型是 `object`，这是由于历史原因造成的。1995 年的 JavaScript 语言第一版，只设计了五种数据类型（对象、整数、浮点数、字符串和布尔值），没考虑 `null`，只把它当作 `object` 的一种特殊值。后来 `null` 独立出来，作为一种单独的数据类型，为了兼容以前的代码，`typeof null` 返回 `object` 就没法改变了。

如果定义的变量准备用来保存一个对象，那么最好将该变量初始化为 `null` 而不是其他值。这样只要直接检测 `null` 值就可以知道相应的变量是否保存了一个对象的引用。

只要在意保存对象还没有真正的保存对象，就应该明确地让该变量保存 `null` 值。这样不仅可以体现 `null` 作为空对象指针的惯例，而且有助于区分 `null` 和 `undefined`。

`null` 表示空值，即该处的值现在为空。调用函数时，某个参数未设置任何值，这时就可以传入 `null`，表示该参数为空。比如，某个函数接受引擎抛出的错误作为参数，如果运行过程中未出错，那么这个参数就会传入 `null`，表示未发生错误。

### 4.7 `null` 和 `undefined`

`null` 和 `undefined`，既然含义与用法都差不多，为什么要同时设置两个这样的值，这不是无端增加复杂度？这与历史原因有关。

1995 年 JavaScript 诞生时，最初像 Java 一样，只设置了 `null` 表示”无”。根据 C 语言的传统，`null` 可以自动转为 0。

```javascript
Number(null); // 0
5 + null; // 5
```

但是，JavaScript 的设计者 Brendan Eich，觉得这样做还不够。首先，第一版的 JavaScript 里面，`null` 就像在 Java 里一样，被当成一个对象，Brendan Eich 觉得表示“无”的值最好不是对象。其次，那时的 JavaScript 不包括错误处理机制，Brendan Eich 觉得，如果 `null` 自动转为 0，很不容易发现错误。

因此，他又设计了一个 `undefined`。区别是这样的：`null` 是一个表示“空”的对象，转为数值时为 0；`undefined` 是一个表示”此处无定义”的原始值，转为数值时为 `NaN`。

```javascript
Number(undefined); // NaN
5 + undefined; // NaN
```

在 JavaScript 里，`null` 和 `undefined` 都表示不存在的数据，并且 `undefined` 也是从 `null` 中继承而来；主要区别如下：

---

- 1).`null` 和 `undefined` 都是表示没有的、不存在的值。他们在进行逻辑转换时都是 false，这两个值进行(`==`)比较是 true；

---

- 2).`null` 表示空引用，它是 `object` 类型；`undefined` 表示未定义，是 `undefined` 类型；

---

- 3).如果一个变量的值是 `null`，那么必须主动给它赋值 `null`；如果这个对象以后要用，但是现在还没有值，一般情况下，会给它一个 `null` 值；

---

- 4).一个变量未声明（对未声明的变量，只能进行一个操作，即使用 `typeof` 操作符检测其数据类型），报错：`xx is not defined`；一个变量定义了未赋值，则值是 `undefined`。

---

- 5).对属性来说，如果原来没有这个属性，根本就不存在这个属性，那么他的值就是 `undefined`。（对象的属性不需要定义，如果不存在也可以直接读取，不会报错，而会给出一个 `undefined` 的值出来）；

---

- 6).在函数（方法）里，如果必须返回值，但是值又计算不出来，那就返回一个 `null`（这是规范，不是语法规定，js 遵循）；但是没有返回值的函数，它的返回值都是 `undefined`。

---

### 4.8 Boolean 类型

该类型只有两个字面值：true 和 false (区分大小写)，这两个值与数字值不是一回事，因此 true 不一定等于 1，而 false 不一定等于 0； 但 ECMAScript 中所有数据类型都有与这两个值等价的值。

下列运算符会返回布尔值：

---

- 两元逻辑运算符： `&& (And)，|| (Or)`
- 前置逻辑运算符： `! (Not)`
- 相等运算符：`===，!==，==，!=`
- 比较运算符：`>，>=，<，<=`

---

#### 4.8.1 `Boolean()`

强制将其他类型数据转换为布尔型，对 `0、NaN、null、undefined、""、false` (空字符串不是空格字符串)这 6 个为 false，其余为 true；

> 在流控制语句中，自动执行相应的 `Boolean` 转换。

#### 4.8.2 `！`

取反，先将值转为布尔类型，然后取反；

```javascript
let a = 6;
console.log(typeof a); //number
console.log(typeof !a); //boolean
console.log(!a); //false
```

#### 4.8.3 `！！`

再次取反；将其他数据类型转换为布尔数据类型，相当于 `Boolean（）`；

### 4.9 Number 类型

#### 4.9.1 `isNaN()`

检测一个值不是有效数字；若是有效数字返回 false，不是有效数字返回 true；若传入非数值会自动转换为数值。对于空数组和只有一个数组成员(能转化为数值的)的数组，会返回 false。因此在使用 `isNaN` 之前，最好先判断数据类型：

```javascript
console.group("boolean");
console.log(isNaN(true)); //false
console.log(isNaN(false)); //false
console.groupEnd();

console.group("number");
console.log(isNaN(0123)); //false
console.log(isNaN(00123)); //false
console.log(isNaN(0x123)); //false
console.log(isNaN(0b111)); //false
console.log(isNaN(-123)); //false
console.log(isNaN(0.123)); //false
console.log(isNaN(0.992)); //false
console.log(isNaN(0.00000123)); //false
console.log(isNaN(0.000000123)); //false
console.log(isNaN(0.0123)); //false
console.log(isNaN(3e20)); //false
console.log(isNaN(3e-21)); //false
console.groupEnd();

console.group("null && undefined");
console.log(isNaN(null)); //false
console.log(isNaN(undefined)); //true
console.log(isNaN(NaN)); //true
console.groupEnd();

console.group("object");
console.log(isNaN({})); //true
console.log(isNaN({ name: "hhh" })); //true
console.log(isNaN({ 1: "2" })); //true
console.groupEnd();

console.group("array");
console.log(isNaN([])); //false
console.log(isNaN([1])); //false
console.log(isNaN(["1x"])); //true
console.log(isNaN([1, 2])); //true
console.log(isNaN(["1", "2"])); //true
console.groupEnd();

console.group("string");
console.log(isNaN("123")); //false
console.log(isNaN(" 123")); //false
console.log(isNaN("1 23")); //true
console.log(isNaN("123 ")); //false
console.log(isNaN("+123")); //false
console.log(isNaN("-123")); //false
console.log(isNaN("0123")); //false
console.log(isNaN("00123")); //false
console.log(isNaN("0x123")); //false
console.log(isNaN("0b111")); //false
console.log(isNaN("0.123")); //false
console.log(isNaN("0.1.23")); //true
console.log(isNaN("0.00000000000123")); //false
console.log(isNaN("0.012300000000000")); //false
console.log(isNaN("0.0123000 0000000")); //true
console.log(isNaN("3e33")); //false
console.log(isNaN("3e-33")); //false
console.log(isNaN("3ez")); //true
console.log(isNaN("")); //false
console.log(isNaN(" ")); //false
console.log(isNaN(" ")); //false
console.groupEnd();

//[].valueOf() = [] ===> [].toString() = "" ===> 0
//[1].valueOf() = [1] ===> [].toString() = "1" ===> 1

function myIsNaN(value) {
  return typeof value === "number" && isNaN(value);
  //推荐用法
  return value !== value;
}
```

`isNaN()` 也适用于对象。在基于对象调用 `isNaN()` 函数时，会首先调用对象的 `valueOf()` 方法，然后确定该方法返回的值是否可以装换为数值。如果不能，则基于这个返回值再调用 `toString()` 方法，再测试(`parseFloat()`)返回值，而这个过程也是 ECMAScript 中内置函数和操作符的一般执行流程。

> 执行 `Number()` 返回 NaN 的值在 `isNaN()` 中均会返回 flase，是否在 `isNaN()` 类型转换中默认调用 `Number()` 方法？？？

#### 4.9.2 `isFinite()`

`isFinite` 方法返回一个布尔值，表示某个值是否为正常的数值。

除了 `Infinity`、`-Infinity`、`NaN` 和 `undefined` 这几个值会返回 false，`isFinite` 对于其他的数值都会返回 true。

```javascript
console.log(isFinite(Infinity)); //false
console.log(isFinite(-Infinity)); //false
console.log(isFinite(NaN)); //false
console.log(isFinite(undefined)); //false
console.log(isFinite(null)); //true
console.log(isFinite("1.23")); //true
```

#### 4.9.3 `Number()`

强制将其他数据类型转换为 `number` 类型；如果是字符串，只有全部是数字才能转换。

`Number()` 函数转换规则：

1).`Boolean` 值，转换 0 或 1；

```javascript
Number(true); //1
Number(false); //0
```

2).数字值，简单传入传出（第一个数为 `0`，则会被认为是八进制数，忽略剩余前导 `0`，再转化为十进制输出；若前两位为`0x`，则会被认为是十六进制，转化为十进制）；

```javascript
//带前导0被当做 8 进制
Number(0123); //83
Number(00123); //83
//带前导0x被当做 16 进制
Number(0x123); //291

Number(-123); //-123
Number(0.123); //0.123
//小数点后 0 超过 5 个会自动转科学计数法
Number(0.00000123); //0.00000123
Number(0.000000123); //1.23e-7
Number(0.012300000000000000); //0.0123
//科学计数法指数不超过20就不会是科学计数法形式
Number(3e20); //300000000000000000000
Number(3e-21); //3e-21
```

3).空数组也会转换为 0；可以转化数值的单数值数组转换对应的数值；其他数组为 `NaN`；

```javascript
//空数组
Number([]); //0
//可以转化数值的单数值数组
Number([1]); //1
//其他
Number(["1x"]); //NaN
Number([1, 2]); //NaN
```

4).`null`，输出 0; `undefined`，输出 `NaN`;

```javascript
Number(null); //0
Number(undefined); //NaN
//NaN是数字类型，但不是一个数...
Number(NaN); //NaN
```

5).如果是对象。则调用对象的 `valueOf()` 方法，然后依照前面规则转换返回值。如果转换的结果是 `NaN`，则调用对象的 `toString()` 方法。

```javascript
Number({}); //NaN
Number({ name: "hhh" }); //NaN
```

6).如果是字符串：

---

- a.只包含数字（包括正负两种情况），转换十进制（忽略前导 0）;
- b.带浮点格式，转换对应浮点数值（忽略前导 0）;
- c.若有上述之外其他字符，输出 `NaN`;
- d.注意：空字符串或者内有任意空格，转换为 0;
- e.空格只在首/尾位忽略，中间位置作为非法字符;

---

```javascript
//boolean
Number(true); //1
Number(false); //0

//number
//能识别八进制，十六进制和二进制
Number(0123); //83
Number(00123); //83
Number(0x123); //291
Number(0b111); //7
//负数，浮点数
Number(-123); //-123
Number(0.123); //0.123
Number(0.992); //0.992
//小数点后面的 0 超过 5 位自动转化为科学计数法
Number(0.00000123); //0.00000123
Number(0.000000123); //1.23e-7
//最后一位非 0 数后面的 0 会被忽略
Number(0.012300000000000000); //0.0123
//小数点前面的 0 超过 20 位也会自动转化为科学计数法
Number(3e20); //300000000000000000000
Number(3e-21); //3e-21

//特殊值
Number(null); //0
Number(undefined); //NaN
Number(NaN); //NaN

//对象一律 NaN
Number({}); //NaN
Number({ name: "hhh" }); //NaN
Number({ 1: "2" }); //NaN

//空数组或可转化的单元素数组之外为 NaN
Number([]); //0
Number([1]); //1
Number(["1x"]); //NaN
Number(["12"]); //12
Number([1, 2]); //NaN
Number(["1", "2"]); //NaN

//string
//中间空格不识别，前后空格会忽略
Number("123"); //123
Number(" 123"); //123
Number("1 23"); //NaN
Number("123 "); //123
//识别正负
Number("+123"); //123
Number("-123"); //-123
//不识别八进制，识别十六进制和二进制
Number("0123"); //123
Number("00123"); //123
Number("0x123"); //291
Number("0b111"); //7
//只能识别第一个小数点
Number("0.123"); //0.123
Number("0.1.23"); //NaN
//会自动进行科学计数法的转换
Number("0.00000000000123"); //1.23e-12
Number("0.012300000000000"); //0.0123
Number("3e33"); //3e+33
Number("3e-33"); //3e-33
//非数字 NaN
Number("3ez"); //NaN
//空字符串（或带空格）为 0
Number(""); //0
Number(" "); //0
```

#### 4.9.4 `parseInt()`

非强制数据类型转换

1).主要用于将字符串转为整数；

2).忽略字符串前面的空格，直至找到第一个非空格字符；

3).如果第一个字符不是数字字符或正负号(符号后面必须有数字)，则返回 `NaN`；

4).直至解析完所有数字字符或遇到非数字字符(不识别小数点)，返回转好的部分；

```javascript
//boolean
parseInt(true); //NaN
parseInt(false); //NaN

//number
//能识别八进制，十六进制和二进制
parseInt(0123); //83
parseInt(00123); //83
parseInt(0x123); //291
parseInt(0b111); //7
//负数，忽略小数点
parseInt(-123); //-123
parseInt(0.123); //0
parseInt(0.992); //0
//会自动转化为科学计数法，然后再转换字符串
parseInt(0.00000123); //0
parseInt(0.000000123); //1 ：1.23E-7 ---> 1
parseInt(0.012300000000000000); //0
parseInt(3e20); //300000000000000000000
parseInt(3e-21); //3

//特殊值均不识别
parseInt(null); //NaN
parseInt(undefined); //NaN
parseInt(NaN); //NaN

//对象一律 NaN
parseInt({}); //NaN
parseInt({ name: "hhh" }); //NaN
parseInt({ 1: "2" }); //NaN

//不识别空数组，但会将数组的第一项解析而忽略其他项
parseInt([]); //NaN
parseInt([1]); //1
parseInt(["1x"]); //1
parseInt([1, 2]); //1
parseInt(["1", "2"]); //1

//string
//中间空格不识别（返回可以转化的），前后空格会忽略
parseInt("123"); //123
parseInt(" 123"); //123
parseInt("1 23"); //1
parseInt("123 "); //123
parseInt("+123"); //123
parseInt("-123"); //-123
//不识别八进制和二进制，识别十六进制
parseInt("0123"); //123
parseInt("00123"); //123
parseInt("0x123"); //291
parseInt("0b111"); //0
//不能识别小数点
parseInt("0.123"); //0
parseInt("0.1.23"); //0
//不会自动进行科学计数法的转换
parseInt("0.00000000000123"); //0
parseInt("0.012300000000000"); //0
parseInt("3e33"); //3
parseInt("3e-33"); //3
parseInt("3ez"); //3
//不识别空字符串（或带空格）
parseInt(""); //NaN
parseInt(" "); //NaN
```

> **第一个参数若不是字符串，会自动转换为字符串再读取(`String()`)**；但这回导致一些意外：

```javascript
parseInt(0x11, 36); // 43
parseInt(0x11, 2); // 1

// 等同于
parseInt(String(0x11), 36);
parseInt(String(0x11), 2);

// 等同于
parseInt("17", 36);
parseInt("17", 2);
```

这种处理方式，对于八进制的前缀 0，尤其需要注意。

```javascript
parseInt(011, 2); // NaN

// 等同于
parseInt(String(011), 2);

// 等同于
parseInt(String(9), 2);
```

> JavaScript 不再允许将带有前缀 0 的数字视为八进制数，而是要求忽略这个 0。但是，为了保证兼容性，大部分浏览器并没有部署这一条规定。

5).存在第二个参数，用来指定转换时的所使用的基数（进制）；如果第二个参数不是数值，会被自动转为（`parseInt()`???）一个整数。这个整数只有在 2 到 36 之间，才能得到有意义的结果，(转化为数字后)超出这个范围，则返回 `NaN`；如果第二个参数是或者转化为 0、`NaN`、`undefined` 和 `null`，则直接忽略（或者可以说调用默认值？？？）。

```javascript
parseInt("10", 37); // NaN
parseInt("10", 1); // NaN
parseInt("10", 0); // 10
parseInt("10", null); // 10
parseInt("10", undefined); // 10
parseInt("10", 2); //2
parseInt("10", "1.9"); //NaN
//2-36 范围内非整数会忽略小数部分
parseInt("10", "2.1"); //2
parseInt("10", "3.000000007"); //3
parseInt("10", "3.007"); //3
//忽略进制标识符???
parseInt("10", "03"); //3
parseInt("10", "0x2"); //2
parseInt("10", "0x3"); //3
```

如果第一个参数字符串包含对于指定进制无意义的字符，则从最高位开始，只返回可以转换的数值。如果最高位无法转换，则直接返回 `NaN`。

```javascript
parseInt("1546", 2); // 1
parseInt("546", 2); // NaN
```

> `parseInt()`的第二个参数默认为 10；

6).对于会自动转化为科学计数法的数字，`parseInt()` 会产生一些奇怪的结果；`parseFloat()` 不会(原因在于 `parseInt()` 会先转化为科学计数法再转化为字符串，而 `parseFloat()` 先转化为字符串，再自动转化科学计数法输出)。

```javascript
parseInt(1000000000000000000000.5); // 1
// 等同于
parseInt("1e+21"); // 1

parseInt(0.0000008); // 8
// 等同于
parseInt("8e-7"); // 8

parseFloat(1000000000000000000000.5); //1e+21
// 等同于
parseFloat("1e+21"); //1e+21

parseFloat(0.0000008); //8e-7
// 等同于
parseFloat("8e-7"); //8e-7
```

#### 4.9.5 `parseFloat()`

1).`parseFloat` 方法用于将一个字符串转为浮点数(同 `parseInt`，但多识别一个小数点)。

2).如果字符符合科学计数法，则会进行相应的转换；若有不能转换为浮点数的字符，就返回已转好的部分。

3).自动过滤前导空格；若参数不是字符串或者字符串的第一个字符不能转换为浮点数，则返回 `NaN`。

```javascript
//boolean
parseFloat(true); //NaN
parseFloat(false); //NaN

//number
//能识别八进制，十六进制和二进制
parseFloat(0123); //83
parseFloat(00123); //83
parseFloat(0x123); //291
parseFloat(0b111); //7
//负数，小数点
parseFloat(-123); //-123
parseFloat(0.123); //0.123
parseFloat(0.992); //0.992
//会先转换字符串，然后再自动转化为科学计数法
parseFloat(0.00000123); //0.00000123
parseFloat(0.000000123); //1.23e-7
parseFloat(0.012300000000000000); //0.0123
parseFloat(3e20); //300000000000000000000
parseFloat(3e-21); //3e-21

//特殊值均不识别
parseFloat(null); //NaN
parseFloat(undefined); //NaN
parseFloat(NaN); //NaN

//对象一律 NaN
parseFloat({}); //NaN
parseFloat({ name: "hhh" }); //NaN
parseFloat({ 1: "2" }); //NaN
console.groupEnd();

//不识别空数组，但会将数组的第一项解析而忽略其他项
parseFloat([]); //NaN
parseFloat([1]); //1
parseFloat(["1x"]); //1
parseFloat([1, 2]); //1
parseFloat(["1", "2"]); //1

//string
//中间空格不识别（返回可以转化的），前后空格会忽略
parseFloat("123"); //123
parseFloat(" 123"); //123
parseFloat("1 23"); //1
parseFloat("123 "); //123
parseFloat("+123"); //123
parseFloat("-123"); //-123
//不识别八进制和二进制，十六进制
parseFloat("0123"); //123
parseFloat("00123"); //123
parseFloat("0x123"); //0
parseFloat("0b111"); //0
//能识别小数点
parseFloat("0.123"); //0.123
parseFloat("0.1.23"); //0.1
//会自动进行科学计数法的转换
parseFloat("0.00000000000123"); //1.23e-12
parseFloat("0.012300000000000"); //0.0123
parseFloat("3e33"); //3e+33
parseFloat("3e-33"); //3e-33
parseFloat("3ez"); //3
//不识别空字符串（或带空格）
parseFloat(""); //NaN
parseFloat(" "); //NaN
```

#### 4.9.6 浮点运算

JavaScript 内部，所有数字都是以 64 位浮点数形式储存，即使整数也是如此。所以，1 与 1.0 是相同的，是同一个数。

`1 === 1.0 // true`

这就是说，JavaScript 语言的底层根本没有整数，所有数字都是小数（64 位浮点数）。容易造成混淆的是，某些运算只有整数才能完成，此时 JavaScript 会自动把 64 位浮点数，转成 32 位整数，然后再进行运算。

根据国际标准 IEEE 754，JavaScript 浮点数的 64 个二进制位，从最左边开始，是这样组成的。

---

- 第 1 位：符号位，0 表示正数，1 表示负数
- 第 2 位到第 12 位（共 11 位）：指数部分
- 第 13 位到第 64 位（共 52 位）：小数部分（即有效数字）

---

符号位决定了一个数的正负，指数部分决定了数值的大小，小数部分决定了数值的精度。

由于浮点数不是精确的值，所以涉及小数的比较和运算要特别小心。

```javascript
0.1 + 0.2 === 0.3
// false

0.1+0.2=
//0.300 000 000 000 000 04

0.3 / 0.1
//2.999 999 999 999 999 6

(0.3 - 0.2) === (0.2 - 0.1)
// false
```

对于那些极大或极小的数值，可以用 `e` 表示法表示浮点数值。默认情况下，ECMAScript 会将那些小数点后面带有 6 个 0 以上的浮点数值转换为以 `e` 表示的数值。浮点数值最高精确度是 17 位小数，但在进行算数计算时精确度远远不如整数。因此，永远不要测试某个特定的浮点数值。

> 关于浮点数值计算产生舍入误差的问题，这是基于 IEEE754 数值的浮点数值计算的通病。
>
> 数值运算中，任何涉及 `NaN` 和 `undefined` 的运算，结果均为 `NaN`;`null` 会转换为 0 参与运算。

#### 4.9.7 数值范围

根据标准，64 位浮点数的指数部分的长度是 11 个二进制位，意味着指数部分的最大值是 2047（2 的 11 次方减 1）。也就是说，64 位浮点数的指数部分的值最大为 2047，分出一半表示负数，则 JavaScript 能够表示的数值范围为 2^1024 到 2^1023（开区间），超出这个范围的数无法表示。

如果一个数大于等于 2 的 1024 次方，那么就会发生“**正向溢出（overflow）**”，即 JavaScript 无法表示这么大的数，这时就会返回`Infinity`。

```javascript
Math.pow(2, 1023); //8.98846567431158e+307
Math.pow(2, 1024); //Infinity
```

如果一个数小于等于 2 的 -1075 次方（指数部分最小值 -1023，再加上小数部分的 52 位），那么就会发生为“**负向溢出（underflow）**”，即 JavaScript 无法表示这么小的数，这时会直接返回 0。

```javascript
Math.pow(2, -1073); //5e-323
Math.pow(2, -1074); //5e-324
Math.pow(2, -1075); //5e-324
Math.pow(2, -1076); //0
```

JavaScript 提供 `Number` 对象的 `MAX_VALUE` 和 `MIN_VALUE` 属性，返回可以表示的具体的最大值和最小值。

```javascript
Number.MAX_VALUE; // 1.7976931348623157e+308
Number.MIN_VALUE; // 5e-324
```

> 如果某次计算返回了 `Infinity` 值，那么该值将无法继续参与下一次的计算，因为 `Infinity` 值不能参与数值计算。
>
> 要想确定一个值是不是有穷的，可以使用 `isFinite()` 函数，如果该值位于最小值和最大值之间，返回 true。

#### 4.9.8 数值的表示法

JavaScript 的数值有多种表示方法，可以用字面形式直接表示，比如 35（十进制）和 `0xFF`（十六进制）。

数值也可以采用科学计数法表示。科学计数法允许字母 `e` 或 `E` 的后面，跟着一个整数，表示这个数值的指数部分。

以下两种情况，JavaScript 会自动将数值转为科学计数法表示，其他情况都采用字面形式直接表示。

（1）小数点前的数字多于 21 位

```javascript
1234567890123456789012
// 1.2345678901234568e+21

123456789012345678901
// 123456789012345680000

123456789123456789
//123456789123456780 ???
```

（2）小数点后的零多于 5 个

```javascript
// 小数点后紧跟5个以上的零，
// 就自动转为科学计数法
0.0000003; // 3e-7

// 否则，就保持原来的字面形式
0.000003; // 0.000003
```

#### 4.9.9 数值的进制

使用**字面量（literal）**直接表示一个数值时，JavaScript 对整数提供四种进制的表示方法：

---

- 十进制：没有前导 0 的数值。
- 八进制：有前缀 `0o` 或 `0O` 的数值，或者有前导 0、且只用到 0-7 的八个阿拉伯数字的数值。
- 十六进制：有前缀 `0x` 或 `0X` 的数值。
- 二进制：有前缀 `0b` 或 `0B` 的数值。

---

默认情况下，JavaScript 内部会自动将八进制、十六进制、二进制转为十进制。

如果八进制、十六进制、二进制的数值里面，出现不属于该进制的数字，就会报错。

通常来说，有前导 0 的数值会被视为八进制，但是如果前导 0 后面有数字 8 和 9，则该数值被视为十进制。

前导 0 表示八进制，处理时很容易造成混乱。ES5 的严格模式和 ES6，已经废除了这种表示法，但是浏览器为了兼容以前的代码，目前还继续支持这种表示法。

> 八进制字面量在严格模式下是无效的，会导致支持该模式的 JavaScript 引擎抛出错误。

#### 4.9.10 特殊数值

JavaScript 提供了几个特殊的数值。

1).正零和负零

前面说过，JavaScript 的 64 位浮点数之中，有一个二进制位是符号位。这意味着，任何一个数都有一个对应的负值，就连 0 也不例外。

JavaScript 内部实际上存在 2 个 0：一个是 `+0`，一个是 `-0`，区别就是 64 位浮点数表示法的符号位不同。它们是等价的。

几乎所有场合，正零和负零都会被当作正常的 0。唯一有区别的场合是，`+0`或`-0`当作分母，返回的值是不相等的。

`(1 / +0) === (1 / -0) // false`

上面的代码之所以出现这样结果，是因为除以正零得到 `+Infinity`，除以负零得到 `-Infinity`，这两者是不相等的。

2).`NaN`

`NaN`是 JavaScript 的特殊值，表示**非数字（Not a Number）**，主要出现在将字符串解析成数字出错的场合。

`5 - 'x' // NaN`

上面代码运行时，会自动将字符串 x 转为数值，但是由于 x 不是数值，所以最后得到结果为 `NaN`，表示它是“非数字”（`NaN`）。

需要注意的是，`NaN` 不是独立的数据类型，而是一个特殊数值，它的数据类型依然属于 `Number`。

`NaN` 不等于任何值，包括它本身。`NaN` 与任何数（包括它自己）的运算，得到的都是 `NaN`。

> 数组的 `indexOf` 方法内部使用的是严格相等运算符，所以该方法对 `NaN` 不成立。

3).`Infinity`

`Infinity` 表示“无穷”，用来表示两种场景。一种是一个正的数值太大，或一个负的数值太小，无法表示；另一种是非 0 数值除以 0，得到 `Infinity`。

```javascript
Math.pow(2, 1024);
// Infinity

0 / 0; // NaN
1 / 0; // Infinity
```

`Infinity` 有正负之分，`Infinity` 表示正的无穷，`-Infinity` 表示负的无穷。

`Infinity === -Infinity // false`

由于数值正向溢出、负向溢出和被 0 除，JavaScript 都不报错，而是返回 `Infinity`，所以单纯的数学运算几乎没有可能抛出错误。

`Infinity` 大于一切数值（除了 `NaN`），`-Infinity` 小于一切数值（除了 `NaN`）。

`Infinity` 的四则运算，(部分)符合无穷的数学计算规则。

```javascript
//一些特例

0 * Infinity; // NaN
0 / Infinity; // 0
Infinity / 0; // Infinity

Infinity - Infinity; // NaN
Infinity / Infinity; // NaN

null * Infinity; // NaN
null / Infinity; // 0
Infinity / null; // Infinity
```

### 4.10 String 类型

#### 4.10.1  length 属性

1).`string.length`

`string.length` 属性是一个只读的整数，指明指定字符串中的字符个数。字符串的 `length` 属性不会在 `for-in` 循环中枚举，也不可用通过 `delete` 操作符删除。

字符串可以被视为字符数组，因此可以使用数组的方括号运算符，用来返回某个位置的字符（位置编号从 0 开始）。如果方括号中的数字超过字符串的长度，或者方括号中根本不是数字，则返回 `undefined`。

> 任何字符串的长度都可以通过访问其 `length` 属性取得。如果字符中包含双字节字符，那么 `length` 属性可能不会精确返回字符数目。

#### 4.10.2 字符字面量

`String` 类型用于表示由零个或多个 16 位 `Unicode` 字符组成的字符序列，即字符串。如果要在单引号字符串的内部，使用单引号，就必须在内部的单引号前面加上反斜杠，用来转义。

> 由于 HTML 语言的属性值使用双引号，所以很多项目约定 JavaScript 语言的字符串只使用单引号。

字符串默认只能写在一行内，分成多行将会报错。如果长字符串必须分成多行，可以在每一行的尾部使用反斜杠。但是，输出的时候还是单行，效果与写在同一行完全一样。注意，反斜杠的后面必须是换行符，而不能有其他字符（比如空格），否则会报错。

```javascript
var str='a
b
c';
console.log(str);
//SyntaxError: unterminated string literal

var str='a \
b \
c';

console.log(str); //a b c
```

连接运算符（`+`）可以连接多个单行字符串，将长字符串拆成多行书写，输出的时候也是单行。

如果想输出多行字符串，有一种利用多行注释的变通方法。

```javascript
(function() {
  /*
line 1
line 2
line 3
*/
}
  .toString()
  .split("\n")
  .slice(1, -1)
  .join("\n"));
// "line 1
// line 2
// line 3"
```

`String` 类型包含一些特殊的字符字面量，也叫**转义序列**，用于表示非打印字符或者有其他用途的字符：

| 字面量   | 含义                                                |
| :------: | :-------------------------------------------------: |
| `\n`     | 换行                                                |
| `\t`     | 制表                                                |
| `\b`     | 退格                                                |
| `\r`     | 回车                                                |
| `\f`     | 进纸                                                |
| `\\`     | 斜杠                                                |
| `\'`     | 单引号，在单引号表示的字符中使用                    |
| `\"`     | 双引号，在单引号表示的字符中使用                    |
| `\xnn`   | 以十六进制代码 nn 表示一个字符（其中 n 为 0 ~ F）   |
| `\unnnn` | 以十六进制代码 nnnn 表示一个字符（其中 n 为 0 ~ F） |

这些字面量可以出现在字符串中的任何位置，而且也将被作为一个字符来解析。

斜杠还有三种特殊用法。

（1）`\HHH`

反斜杠后面紧跟三个八进制数（`000` 到 `377`），代表一个字符。`HHH` 对应该字符的 `Unicode` 码点，比如 `\251` 表示版权符号。显然，这种方法只能输出 256 种字符。

（2）`\xHH`

`\x` 后面紧跟两个十六进制数（`00` 到 `FF`），代表一个字符。`HH` 对应该字符的 `Unicode` 码点，比如 `\xA9` 表示版权符号。这种方法也只能输出 256 种字符。

（3）`\uXXXX`

`\u` 后面紧跟四个十六进制数（`0000` 到 `FFFF`），代表一个字符。`XXXX` 对应该字符的 `Unicode` 码点，比如 `\u00A9` 表示版权符号。

> 如果在非特殊字符前面使用斜杠，则斜杠会被省略。

#### 4.10.3 字符串的特点

ECMAScript 中的字符串是不可变的，也就是说，字符一旦创建，他们的值就不可能改变。

要改变某个变量保存的字符串，首先销毁原来的字符串，然后再引用包含新值的字符串填充该变量。这个过程是在后台发生的，而这也是在某些旧版本浏览器（低于 1.0 的 Firefox、IE6 等）中拼接字符串时速度很慢的原因。

#### 4.10.4 转换为字符串

要把一个值转换为一个字符串有两种方式。第一种是使用几乎每个值都有的 `toString()` 方法，这个方法唯一要做的就是返回相应值的字符串表现。

数值、布尔值、对象和字符串值（每个字符串有 `toString()` 方法，该方法返回字符串的一个副本）都有 `toString()` 方法。但 `null` 和 `undefined` 没有这个方法。

多数情况下调用 `toString()` 方法不必传递参数。但是，调用数值的 `toString()` 方法时，可以传递一个参数：输出数值的基数。默认情况下，`toString()` 方法以十进制格式返回数值的字符串表示。而通过传递基数，可以输出二进制、八进制、十六进制，甚至其他任意有效进制表示的字符串值。

在不知道转换的值是不是 `null` 和 `undefined` 的情况下，可以用转型函数 `String()`，这个函数能够将任何类型的值转换为字符串。

`String()` 函数遵循以下转换规则：

---

- 如果值有 `toString()` 方法，则调用该方法并返回相应的结果；
- 如果值是 `null`，则返回 `null`；
- 如果值是 `undefined`，则返回 `undefined`；

---

> 要把某个值转换为字符串，可以使用加号操作符把它与一个字符串加在一起。

#### 4.10.5 字符集

JavaScript 使用 `Unicode` 字符集。JavaScript 引擎内部，所有字符都用 `Unicode` 表示。

JavaScript 不仅以 `Unicode` 储存字符，还允许直接在程序中使用 `Unicode` 码点表示字符，即将字符写成 `\uxxxx` 的形式，其中 `xxxx` 代表该字符的 `Unicode` 码点。

解析代码的时候，JavaScript 会自动识别一个字符是字面形式表示，还是 `Unicode` 形式表示。输出给用户的时候，所有字符都会转成字面形式。

我们还需要知道，每个字符在 JavaScript 内部都是以 16 位（即 2 个字节）的 UTF-16 格式储存。也就是说，JavaScript 的单位字符长度固定为 16 位长度，即 2 个字节。

但是，UTF-16 有两种长度：对于码点在 `U+0000` 到 `U+FFFF` 之间的字符，长度为 16 位（即 2 个字节）；对于码点在 `U+10000` 到 `U+10FFFF` 之间的字符，长度为 32 位（即 4 个字节），而且前两个字节在 `0xD800` 到 `0xDBFF` 之间，后两个字节在 `0xDC00` 到 `0xDFFF` 之间。

JavaScript 对 `UTF-16` 的支持是不完整的，由于历史原因，只支持两字节的字符，不支持四字节的字符。这是因为 JavaScript 第一版发布的时候，`Unicode` 的码点只编到 `U+FFFF`，因此两字节足够表示了。后来，`Unicode` 纳入的字符越来越多，出现了四字节的编码。但是，JavaScript 的标准此时已经定型了，统一将字符长度限制在两字节，导致无法识别四字节的字符。

总结一下，对于码点在 `U+10000` 到 `U+10FFFF` 之间的字符，JavaScript 总是认为它们是两个字符（`length` 属性为 2）。所以处理的时候，必须把这一点考虑在内，也就是说，JavaScript 返回的字符串长度可能是不正确的。

#### 4.10.6 Base64 转码

有时，文本里面包含一些不可打印的符号，比如 ASCII 码 0 到 31 的符号都无法打印出来，这时可以使用 Base64 编码，将它们转成可以打印的字符。另一个场景是，有时需要以文本格式传递二进制数据，那么也可以使用 Base64 编码。

所谓 Base64 就是一种编码方法，可以将任意值转成 `0～9、A～Z、a-z、+` 和 `/` 这 64 个字符组成的可打印字符。使用它的主要目的，不是为了加密，而是为了不出现特殊字符，简化程序的处理。

JavaScript 原生提供两个 Base64 相关的方法。

- `btoa()`：任意值转为 Base64 编码
- `atob()`：Base64 编码转为原来的值

```javascript
var string = "Hello World!";
btoa(string); // "SGVsbG8gV29ybGQh"
atob("SGVsbG8gV29ybGQh"); // "Hello World!"
```

> 注意，这两个方法不适合非 ASCII 码的字符，会报错。

要将非 ASCII 码字符转为 Base64 编码，必须中间插入一个转码环节，再使用这两个方法。

```javascript
function b64Encode(str) {
  return btoa(encodeURIComponent(str));
}

function b64Decode(str) {
  return decodeURIComponent(atob(str));
}

b64Encode("你好"); // "JUU0JUJEJUEwJUU1JUE1JUJE"
b64Decode("JUU0JUJEJUEwJUU1JUE1JUJE"); // "你好
```

### 4.11 Object 类型

> 只要是引用数据类型，都可以添加自定义属性；
> 元素也是对象，DOM 对象；

#### 4.11.1 ECMAScript 中的对象

ECMAScript 中的对象其实就是一组数据和功能的集合，主要思想： `Object` 类型是所有他的的实例的基础，即 `Object` 类型所具有的任何属性和方法也同样存在于更具体的对象中。

`Object` 的每个实例都具有以下属性和方法：

属性：

1).`constructor`：保存着用于创建当前对象的函数，即**构造函数（constructor）**；

方法：

2).`hasOwnProperty(propertyName)`：用于检查对象是否拥有一个指定名字的自身定义(而不是继承)的属性。其中，作为参数的属性名(_propertyName_)必须以字符串形式指定（例如：`o.hasOwnProperty("name")`）；

3).`isPrototypeOf(object)`：用于检查传入的对象是否是当前对象的原型；

4).`propertyIsEnumerable(propertyName)`：用于检查给定的属性是否存在并且能够使用 `for-in` 语句来枚举；作为参数的属性名(propertyName)必须以字符串形式指定；

5).`toLocaleString()`：返回对象的字符串表示，该字符串执行与执行环境的地区对应；

6).`toString()`：返回对象的字符串表示；`Object` 类实现的这个方法非常宽泛，不能提供很多有效的信息。`Object` 的子类通常会通过自定义的 `toString()` 方法来将他覆盖，以便提供更多有用的输出信息。

7).`valueOf()`：返回对象的原始值(如果存在)。对于 `Object` 类来说，只是简单的返回该对象本身。`Object` 的子类(如 `Number`,`Boolean`)则重载了这个方法，以便返回与该对象相关的原始值。

由于 `object` 是所有对象的基础，因此所有对象都具有这些基本的属性和方法。

> 从技术角度讲，ECMA-262 中对象的行为不一定适用于 JavaScript 中其他对象。浏览器环境中的对象，比如 BOM 和 DOM 中的对象，都属于宿主对象，因为它们是由宿主实现提供和定义的。ECMA-262 不负责定义宿主对象，因此宿主对象可能也会也可能不会继承 `object`。

#### 4.11.2 `toString()`

在 JavaScript 程序中一般不会经常显式的调用 `toString()` 方法。当对象在一个字符串上下文中使用时，系统会调用相应的 `toString()` 方法来将该对象转换为字符串。

调用 `toString()` 方法时没有参数，返回值是一个字符串。为了便于使用，返回的字符串应当以某种形式与调用这个方法的对象的值有关。

在 JavaScript 中定义自定义类时，为这个类定义一个 `toString()` 方法是一个不错的实践。如果没有定义，则对象会从 `Object` 类继承默认的 `toString()` 方法。默认方法返回的字符串：`[object class]`，其中 `class` 是该对象的类。

有时候可以用默认的 `toString()` 方法的这个行为来判断未知对象的类型或类。不过，由于大多数对象都有自定义的 `toString()` 方法，因此一般需要在对象上显式的调用 `Object.toString()` 方法：如 `Object.prototype.toString.apply()`；注意，这个判断未知对象的技术只适用于内置对象。

自定义对象类有一个 “`Object`” 类，可以使用 `Object.constructor` 属性来获取关于这个对象更多的信息。

有时候需要手动调用 `toString()` 方法，比如某些时候，需要将某个对象显式的转换为字符串，但系统没有自动调用：

```javascript
var n=5;
console.log(n.toString());//"5"
console.log(5.toString());
//Uncaught SyntaxError: Invalid or unexpected token

var boo=true;
console.log(boo.toString());//"true"

var ary=[1,2,3];
console.log(ary.toString());//"1,2,3"

var obj={"a":"12"};
console.log(obj.toString());//[object Object]

var fn=function(){};
console.log(fn.toString());//function(){}
```

显式地使用 `toString()` 方法，有助于使代码更加清晰。

#### 4.11.3 `valueOf()`

对象的 `valueOf()` 方法返回与该对象关联的原始值，如果存在这样的值的话。类型为 `Object` 的对象没有原始值，这个方法只是简单的返回该对象本身。

```javascript
var obj1={};
console.log(obj1.valueOf());//{}

var obj2={"a":"12"};
console.log(obj2.valueOf());//{a: "12"}

var n=123;
console.log(n.valueOf());//123
console.log(123.valueOf());
//Uncaught SyntaxError: Invalid or unexpected token

var str="nm12";
console.log(str.valueOf());//"nm12"

var boo=true;
console.log(boo.valueOf());//true

var ary=[1,3,6];
console.log(ary.valueOf());//[1,3,6]

var fn=function(){
    console.log("k");
};
console.log(fn.valueOf());//fn=function(){}
```

不过，对类型为 `Number` 的对象而言，`valueOf()` 将返回该对象表示的原始数字值。类似的，`Boolean` 对象会返回一个关联的原始布尔值，`String` 对象则返回一个关联的字符串。

`valueOf()` 方法很少需要手动调用，在需要原始值时，JavaScript 会自动调用。事实上，由于自调用，甚至很难区分原始值和他们关联的对象。例如，虽然 `typeof` 操作符能告诉你字符串和 `String` 对象之间的不同，但实际应用的 JavaScript 代码中两者完全可以等价。

`Number`、`Boolean` 以及 `String` 对象的 `valueOf()` 方法将这些包装对象转化为他们所表示的原始值。传入数字、布尔值、字符串到 `Object()` 构造函数时则进行相反的操作：他将原始值包装到一个合适的对象中。在绝大多数情况下，JavaScript 会自动处理这种原始值到对象的转换，所有很少需要这样调用 `Object()` 构造函数。

> 对象转成原始类型的值：一般来说，对象的 `valueOf` 方法总是返回对象自身，这时再自动调用对象的 `toString` 方法，将其转为字符串。如果是一个 Date 对象的实例，那么会优先执行 `toString` 方法。

#### 4.11.4 组成和特征

由多组属性名和属性值组成；属性名和属性值是用来描述对象特征的。

对象的所有键名都是字符串（ES6 又引入了 `Symbol` 值也可以作为键值），所以加不加引号都可以。如果键名是数值，会被自动转为字符串。如果键名不符合标识名的条件（比如第一个字符为数字，或者含有空格或运算符），且也不是数字，则必须加上引号，否则会报错。

对象的每一个键名又称为**“属性”（property）**，它的“键值”可以是任何数据类型。如果一个属性的值为函数，通常把这个属性称为“**方法**”，它可以像函数那样调用。对象的属性之间用逗号分隔，最后一个属性后面可以加逗号，也可以不加。属性可以动态创建，不必在对象声明时就指定。

> 如果属性的值还是一个对象，就形成了链式引用。

1).对象是无序的（若有属性名是数字的，排序时会放在前面，从小到大排序，然后再排其他属性名）；

2).属性名必须是字符串，即使不是也会默认转换为字符串类型（为了以后的严谨，建议写为字符串形式）；

#### 4.11.5 创建方式

1).实例创建方式（`new` 运算符）

```javascript
var obj = new Object();
obj.name = "Mark";
```

2).字面量（直接量）创建方式

```javascript
var obj = {}; //与new Object()相同
var obj = { name: "12", age: 6 }; //最后一对不写逗号
```

> 在通过对象字面量方式创建对象时，实际上不会调用 `Object` 构造函数

#### 4.11.6 对象的引用

如果不同的变量名指向同一个对象，那么它们都是这个对象的引用，也就是说指向同一个内存地址。修改其中一个变量，会影响到其他所有变量。此时，如果取消某一个变量对于原对象的引用，不会影响到另一个变量。

#### 4.11.7 属性值的获取/赋值

1).`对象.属性名`

获取属性名对应的属性值（属性名为数字例外,因为会被当成小数点）；

2).`对象["属性名"]`

不加引号就会被标记为变量，然后去找该变量的值，并将该值返回给该对象再进行判断选择；如果不存在该变量，则报错：`is not defined`；属性名为数字例外(因为会自动转成字符串)；此外，方括号内部还可以使用表达式；

JavaScript 允许属性的“**后绑定**”，也就是说，你可以在任意时刻新增属性，没必要在定义对象的时候，就定义好属性。

修改原有属性名的属性值，规定一个对象中原有的属性名不能重复；如果之前有就是修改，如果没有就是增加；

> 从功能上看，这两种访问属性的方法没有任何区别。但方括号语法的主要优点是可以通过变量来访问属性。如果属性名包含会导致语法错误的字符，或者属性名使用的是关键字或保留字，也可以通过使用方括号表示法。
> 通常，除非必须使用变量来访问属性，否则我们建议使用点表示法；

```javascript
var obj={a:"xue",2:"xi"};
console.log(obj.a);//xue

console.log(obj.2);
//Uncaught SyntaxError: missing ) after argument list

console.log(obj[2]);//xi
```

#### 4.11.8 查看所有属性

查看一个对象本身的所有属性，可以使用 `Object.keys` 方法。

```javascript
var obj = {
  key1: 1,
  key2: 2
};

Object.keys(obj);
// ['key1', 'key2']
```

#### 4.11.9 删除属性

假删除 `obj.xx = null`;
真删除 `delete obj.xx`;

> `delete` 命令用于删除对象的属性，删除成功后返回 true。注意，删除一个不存在的属性，`delete` 不报错，而且返回 true。只有一种情况，`delete` 命令会返回 false，那就是该属性存在，且不得删除。另外，需要注意的是，`delete` 命令只能删除对象本身的属性，无法删除继承的属性。

```javascript
var obj = {
  zx: "1",
  cv: "2"
};
obj.zx = null;
console.log(obj); //{ zx: null, cv: "2" }

delete obj["cv"];
console.log(obj); //{ zx: null}
```

#### 4.11.10 表达式还是语句

对象采用大括号表示，这导致了一个问题：如果行首是一个大括号，它到底是表达式还是语句？

`{ foo: 123 }`

JavaScript 引擎读到上面这行代码，会发现可能有两种含义。第一种可能是，这是一个表达式，表示一个包含 foo 属性的对象；第二种可能是，这是一个语句，表示一个代码区块，里面有一个标签 foo，指向表达式 123。

为了避免这种歧义，JavaScript 规定，如果行首是大括号，一律解释为语句（即代码块）。如果要解释为表达式（即对象），必须在大括号前加上圆括号。这种差异在 `eval` 语句（作用是对字符串求值）中反映得最明显。

#### 4.11.11 `in` 运算符

`in` 运算符用于检查对象是否包含某个属性（注意，检查的是键名，不是键值），如果包含就返回 true，否则返回 false。

```javascript
var obj = { p: 1 };
"p" in obj; // true
```

`in` 运算符的一个问题是，它不能识别哪些属性是对象自身的，哪些属性是继承的。

```javascript
var obj = {};
"toString" in obj; // true
```

上面代码中，`toString` 方法不是对象 obj 自身的属性，而是继承的属性。但是，`in` 运算符不能识别，对继承的属性也返回 true。

#### 4.11.12 `for…in` 循环

`for...in` 循环用来遍历一个对象的全部属性。

```javascript
var obj = { a: 1, b: 2, c: 3 };
for (var i in obj) {
  console.log(obj[i]);
}
// 1
// 2
// 3
```

`for...in` 循环有两个使用注意点。

- 它遍历的是对象所有**可遍历（enumerable）**的属性，会跳过不可遍历的属性。
- 它不仅遍历对象自身的属性，还遍历继承的属性。

如果继承的属性是可遍历的，那么就会被 `for...in` 循环遍历到。但是，一般情况下，都是只想遍历对象自身的属性，所以使用 `for...in` 的时候，应该结合使用 `hasOwnProperty` 方法，在循环内部判断一下，某个属性是否为对象自身的属性。

```javascript
var obj = {
  hello: "world"
};
for (var key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key);
  }
}

//hello
```

### 4.12 Array 类型

#### 4.12.1 定义

数组是按次序排列的一组值。每个值的位置都有编号（从 0 开始），整个数组用方括号表示。除了在定义时赋值，数组也可以先定义后赋值。任何类型的数据，都可以放入数组。

> 如果数组的元素还是数组，就形成了多维数组。

#### 4.12.2 数组的本质

本质上，数组属于一种特殊的对象。`typeof` 运算符会返回数组的类型是 `Object`。

数组的特殊性体现在，它的键名是按次序排列的一组整数（0，1，2…）。

```javascript
var arr = ["a", "b", "c"];

Object.keys(arr);
// ["0", "1", "2"]
```

上面代码中，`Object.keys` 方法返回数组的所有键名。可以看到数组的键名就是整数 0、1、2。

由于数组成员的键名是固定的，因此数组不用为每个元素指定键名，而对象的每个成员都必须指定键名。JavaScript 语言规定，对象的键名一律为字符串，所以，数组的键名其实也是字符串。之所以可以用数值读取，是因为非字符串的键名会被转为字符串。

> 注意，这点在赋值时也成立。如果一个值总是先转成字符串，再进行赋值。

对象有两种读取成员的方法：点结构（`object.key`）和方括号结构（`object['key']`）。但是，对于数值的键名，不能使用点结构，因为单独的数值不能作为标识符。所以，数组成员只能用方括号 `arr[n]` 表示（方括号是运算符，可以接受数值）。

#### 4.12.3 `length` 属性

数组的 `length` 属性，返回数组的成员数量。

JavaScript 使用一个 32 位整数，保存数组的元素个数。这意味着，数组成员最多只有 4 294 967 295 个（232 - 1）个，也就是说 `length` 属性的最大值就是 4 294 967 295。

只要是数组，就一定有 `length` 属性。该属性是一个动态的值，等于键名中的最大整数加上 1。

数组的数字键不需要连续，`length` 属性的值总是比最大的那个整数键大 1。另外，这也表明数组是一种动态的数据结构，可以随时增减数组的成员。

`length` 属性是可写的。如果人为设置一个小于当前成员个数的值，该数组的成员会自动减少到 `length` 设置的值。清空数组的一个有效方法，就是将 `length` 属性设为 0。

```javascript
var arr = ["a", "b", "c"];

arr.length = 0;
arr; // []
```

如果人为设置 `length` 大于当前元素个数，则数组的成员数量会增加到这个值，新增的位置都是空位。

如果人为设置 `length` 为不合法的值，JavaScript 会报错。

```javascript
// 设置负值
[].length = -1
// RangeError: Invalid array length

// 数组元素个数大于等于2的32次方
[].length = Math.pow(2, 32)
// RangeError: Invalid array length

// 设置字符串
[].length = 'abc'
// RangeError: Invalid array length
```

值得注意的是，由于数组本质上是一种对象，所以可以为数组添加属性，但是这不影响 `length` 属性的值。

```javascript
var arr = [];
arr["a"] = "ab";
console.log(arr.length); //0
arr[1] = "zx";
console.log(arr.length); //2
console.log(arr); //[ <1 empty slot>, "zx" ]
console.log(arr[0]); //undefined
```

如果数组的键名是添加超出范围的数值，该键名会自动转为字符串。

```javascript
var arr = [];
arr[-1] = "a";
arr[Math.pow(2, 32)] = "b";

arr.length; // 0
arr[-1]; // "a"
arr[4294967296]; // "b"
```

上面代码中，我们为数组添加了两个不合法的数字键，结果 `length` 属性没有发生变化。这些数字键都变成了字符串键名。最后两行之所以会取到值，是因为取键值时，数字键名会默认转为字符串。

#### 4.12.4 `in` 运算符

检查某个键名是否存在的运算符 `in`，适用于对象，也适用于数组。

```javascript
var arr = [, "a", "b", "c"];
2 in arr; // true
"2" in arr; // true
4 in arr; // false
0 in arr; //false
```

> 注意，如果数组的某个位置是空位，`in` 运算符返回 false。

#### 4.12.5 `for…in` 循环和数组的遍历

`for...in` 循环不仅可以遍历对象，也可以遍历数组，毕竟数组只是一种特殊对象。但是，`for...in` 不仅会遍历数组所有的数字键，还会遍历非数字键。所以，不推荐使用 `for...in` 遍历数组。

```javascript
var a = [1, 2, 3];
a.foo = true;

for (var key in a) {
  console.log(key);
}
// 0
// 1
// 2
// foo
```

数组的遍历可以考虑使用 `for` 循环或 `while` 循环。

```javascript
var a = [1, 2, 3];

// for循环
for (var i = 0; i < a.length; i++) {
  console.log(a[i]);
}

// while循环
var i = 0;
while (i < a.length) {
  console.log(a[i]);
  i++;
}

var l = a.length;
while (l--) {
  console.log(a[l]);
}
```

上面代码是三种遍历数组的写法。最后一种写法是逆向遍历，即从最后一个元素向第一个元素遍历。

数组的 `forEach` 方法，也可以用来遍历数组。

```javascript
var colors = ["red", "green", "blue"];
colors.forEach(function(color) {
  console.log(color);
});
// red
// green
// blue
```

#### 4.12.6 数组的空位

当数组的某个位置是空元素，即两个逗号之间没有任何值，我们称该数组存在**空位（hole）**。数组的空位不影响 `length` 属性。

需要注意的是，如果最后一个元素后面有逗号，并不会产生空位。也就是说，有没有这个逗号，结果都是一样的。

数组的空位是可以读取的，返回 `undefined`。

使用 `delete` 命令删除一个数组成员，会形成空位，并且不会影响 `length` 属性。

```javascript
var a = [1, 2, 3];
delete a[1];

a[1]; // undefined
a.length; // 3
```

上面代码用 `delete` 命令删除了数组的第二个元素，这个位置就形成了空位，但是对 `length` 属性没有影响。也就是说，`length` 属性不过滤空位。所以，使用 `length` 属性进行数组遍历，一定要非常小心。

数组的某个位置是空位，与某个位置是 `undefined`，是不一样的。如果是空位，使用数组的 `forEach` 等迭代方法、`for...in` 结构、以及 `Object.keys` 方法进行遍历，空位都会被跳过。(`for` 可以遍历，返回 `undefined`)

```javascript
var a = [, , ,];

a.forEach(function(x, i) {
  console.log(i + ". " + x);
});
// 不产生任何输出

for (var i in a) {
  console.log(i);
}
// 不产生任何输出

Object.keys(a);
// []

for (let i = 0; i < a.length; i++) {
  console.log(a[i]); //undefined
}
```

如果某个位置是 `undefined`，遍历的时候就不会被跳过。

> 这就是说，空位就是数组没有这个元素，所以不会被遍历到，而 `undefined` 则表示数组有这个元素，值是 `undefined`，所以遍历不会跳过。

#### 4.12.7 Array.of()

作用类似 `Array`，只是解决了 `Array` 传入一个参数变成 `length` 的问题，而会将单个传入的数值当做数组的项传入

```javascript
var ary = Array(4);
var ary1 = Array.of(4);
console.log(ary); // [empty × 4]
console.log(ary1); //[4]
```

#### 4.12.8 Array.fill()

填充，一般用来初始化或者清空一个数组

```javascript
var ary = Array(4);
console.log(ary); //[empty × 4]
console.log(ary.fill(1)); //[1, 1, 1, 1]
console.log(ary.fill(0)); //[0, 0, 0, 0]
```

#### 4.12.9 类似数组的对象

如果一个对象的所有键名都是正整数或零，并且有 `length` 属性，那么这个对象就很像数组，语法上称为**类似数组的对象（array-like object）**。

```javascript
var obj = {
  0: "a",
  1: "b",
  2: "c",
  length: 3
};

obj[0]; // 'a'
obj[1]; // 'b'
obj.length; // 3
obj.push("d"); // TypeError: obj.push is not a function
```

但是，“类似数组的对象”并不是数组，因为它们不具备数组特有的方法。对象 obj 没有数组的 `push` 方法，使用该方法就会报错。

“类似数组的对象”的根本特征，就是具有 `length` 属性。只要有 `length` 属性，就可以认为这个对象类似于数组。但是有一个问题，这种 `length` 属性不是动态值，不会随着成员的变化而变化。

```javascript
var obj = {
  length: 0
};
obj[3] = "d";
obj.length; // 0
```

典型的“类似数组的对象”是函数的 `arguments` 对象，以及大多数 DOM 元素集，还有字符串。

数组的 `Array.prototype.slice.call()` 方法可以将“类似数组的对象”变成真正的数组。

`var arr = Array.prototype.slice.call(arrayLike);`

除了转为真正的数组，“类似数组的对象”还有一个办法可以使用数组的方法，就是通过 `call()` 把数组的方法放到对象上面。

```javascript
function print(value, index) {
  console.log(index + " : " + value);
}

Array.prototype.forEach.call(arrayLike, print);

Array.from(arrayLike);
[...arrayLike];
```

> 注意，这种方法比直接使用数组原生的 `forEach` 要慢，所以最好还是先将“类似数组的对象”转为真正的数组，然后再直接调用数组的 `forEach` 方法。

### 4.13 数据类型转换

JavaScript 是一种动态类型语言，变量没有类型限制，可以随时赋予任意值。

虽然变量的数据类型是不确定的，但是各种运算符对数据类型是有要求的。如果运算符发现，运算子的类型与预期不符，就会自动转换类型。

#### 4.13.1 强制转换

强制转换主要指使用 `Number`、`String` 和 `Boolean` 三个函数，手动将各种类型的值，分布转换成数字、字符串或者布尔值。

---

`Number()`

使用 `Number` 函数，可以将任意类型的值转化成数值。

下面分成两种情况讨论，一种是参数是原始类型的值，另一种是参数是对象。

1).原始类型值

原始类型值的转换规则如下。

```javascript
// 数值：转换后还是原来的值
Number(324); // 324

// 字符串：如果可以被解析为数值，则转换为相应的数值
Number("324"); // 324

// 字符串：如果不可以被解析为数值，返回 NaN
Number("324abc"); // NaN

// 空字符串转为0
Number(""); // 0

// 布尔值：true 转成 1，false 转成 0
Number(true); // 1
Number(false); // 0

// undefined：转成 NaN
Number(undefined); // NaN

// null：转成0
Number(null); // 0
```

`Number` 函数将字符串转为数值，要比 `parseInt` 函数严格很多。基本上，只要有一个字符无法转成数值，整个字符串就会被转为 `NaN`。

另外，`parseInt` 和 `Number` 函数都会自动过滤一个字符串前导和后缀的空格。

2).对象

简单的规则是，`Number` 方法的参数是对象时，将返回 `NaN`，除非是包含单个数值的数组。

之所以会这样，是因为 `Number` 背后的转换规则比较复杂。

第一步，调用对象自身的 `valueOf` 方法。如果返回原始类型的值，则直接对该值使用 `Number` 函数，不再进行后续步骤。

第二步，如果 `valueOf` 方法返回的还是对象，则改为调用对象自身的 `toString` 方法。如果 `toString` 方法返回原始类型的值，则对该值使用 `Number` 函数，不再进行后续步骤。

第三步，如果 `toString` 方法返回的是对象，就报错。

默认情况下，对象的 `valueOf` 方法返回对象本身，所以一般总是会调用 `toString` 方法，而 `toString` 方法返回对象的类型字符串（比如 `[object Object]`）。

---

`String()`

`String` 函数可以将任意类型的值转化成字符串，转换规则如下。

1).原始类型值

数值：转为相应的字符串。
字符串：转换后还是原来的值。
布尔值：true 转为字符串 "true"，false 转为字符串 "false"。
`undefined`：转为字符串 "`undefined`"。
`null`：转为字符串 "`null`"。

2).对象

`String` 方法的参数如果是对象，返回一个类型字符串；如果是数组，返回该数组的字符串形式。

```javascript
String({ a: 1 }); // "[object Object]"
String([1, 2, 3]); // "1,2,3"
```

`String` 方法背后的转换规则，与 `Number` 方法基本相同，只是互换了 `valueOf` 方法和 `toString` 方法的执行顺序。

先调用对象自身的 `toString` 方法。如果返回原始类型的值，则对该值使用 `String` 函数，不再进行以下步骤。

如果 `toString` 方法返回的是对象，再调用原对象的 `valueOf` 方法。如果 `valueOf` 方法返回原始类型的值，则对该值使用 `String` 函数，不再进行以下步骤。

如果 `valueOf` 方法返回的是对象，就报错。

如果 `toString` 法和 `valueOf` 方法，返回的都是对象，就会报错。

---

`Boolean()`

`Boolean` 函数可以将任意类型的值转为布尔值。

它的转换规则相对简单：除了以下五个值的转换结果为 false，其他的值全部为 true。

---

- `undefined`
- `null`
- `-0` 或 `+0`
- `NaN`
- `''`（空字符串）

---

> 注意，所有对象（包括空对象）的转换结果都是 true，甚至连 false 对应的布尔对象 `new Boolean(false)` 也是 true。

所有对象的布尔值都是 true，这是因为 JavaScript 语言设计的时候，出于性能的考虑，如果对象需要计算才能得到布尔值，对于 `obj1 && obj2` 这样的场景，可能会需要较多的计算。为了保证性能，就统一规定，对象的布尔值为 true。

#### 4.13.2 自动转换

下面介绍自动转换，它是以强制转换为基础的。

遇到以下三种情况时，JavaScript 会自动转换数据类型，即转换是自动完成的，用户不可见。

第一种情况，不同类型的数据互相运算。

第二种情况，对非布尔值类型的数据求布尔值。

第三种情况，对非数值类型的值使用一元运算符（即 `+` 和 `-`）。

自动转换的规则是这样的：预期什么类型的值，就调用该类型的转换函数。比如，某个位置预期为字符串，就调用 `String` 函数进行转换。如果该位置即可以是字符串，也可能是数值，那么默认转为数值。

由于自动转换具有不确定性，而且不易除错，建议在预期为布尔值、数值、字符串的地方，全部使用 `Boolean`、`Number` 和 `String` 函数进行显式转换。

---

自动转换为布尔值

JavaScript 遇到预期为布尔值的地方（比如 `if` 语句的条件部分），就会将非布尔值的参数自动转换为布尔值。系统内部会自动调用 `Boolean` 函数。

JavaScript 遇到预期为字符串的地方，就会将非字符串的值自动转为字符串。具体规则是，先将复合类型的值转为原始类型的值，再将原始类型的值转为字符串。

字符串的自动转换，主要发生在字符串的加法运算时。当一个值为字符串，另一个值为非字符串，则后者转为字符串。

---

自动转换为数值

JavaScript 遇到预期为数值的地方，就会将参数值自动转换为数值。系统内部会自动调用 `Number` 函数。

除了加法运算符（`+`）有可能把运算子转为字符串，其他运算符都会把运算子自动转成数值。

> 注意：`null` 转为数值时为 0，而 `undefined` 转为数值时为 `NaN`。

一元运算符也会把运算子转成数值。

## 5 操作符

ESMAScript 操作符与众不同之处在于，它们能够适用于很多值。在应用于对象时，相应的操作符通常都会调用对象的 `valueOf()` 和 `toString()`（或）方法，以便取得可以操作的值。

### 5.1 一元操作符

只能操作一个值的操作符就做一元操作符。

#### 5.1.1 递增和递减操作符

直接借鉴自 C，各有两个版本：前置型和后置型。

```javascript
//前置型
var age = 18;
console.log(++age); //19
console.log(age); //19
//语句求值之前，变量已变

//后置型
var year = 2018;
console.log(year--); //2018
console.log(year); //2017
//语句求值之后，变量才变
```

执行前置递增或递减时，变量的值都是在语句被求值以前改变的（在计算机科学领域，这种情况通常被称作**副效应**），即会先进行自增/自减操作，再返回变量操作后的值；

而后置型递增或递减，是在包含它们的语句被求值之后才执行的，即先返回变量操作前的值，再进行自增/自减操作。

这四个操作符对任何值都适用。遵循规则：

---

- 1).包含有效数字字符的字符串：先转换为数值，在执行增减操作；

- 2).不包含有效数字字符的字符串：`NaN`；

- 3).true/false：先转换为数值，在执行增减操作；

- 4).浮点数值：直接执行增减操作；

- 5).对象：先调用对象的 `valueOf()` 方法，以获取一个可以操作的数值，然后遵循以上规则；若得到 `NaN`，则再调用 `toString()` 方法后再应用上述规则。

---

> `++` 是数值运算，不完全同于 `+=` ；后者可以进行字符串的拼接；

#### 5.1.2 一元加减操作符

`"+"` 放在数值前面，对数值不产生任何影响；但是在非数值变量前面，会像 `Number()` 转型函数一样对这个值执行转换。

`"-"` 主要用于表示负数。应用于非数值变量时，遵循 `"+"` 相同的操作，再将得到的数值转为负数。

### 5.2 位操作符

位操作符用于最基本的层次上，即按内存中表示数值的位来操作数值。ECMAScript 中所有数值都以 `IEEE-754` 64 位格式存储，但位操作符并不直接操作 60 位的值；而是将 64 位值转换为 32 位的整数，然后执行操作，最后转换为 64 位值。

对于有符号的整数，32 位的前 31 位用于表示整数的值，第 32 位表示数值的符号：0 表示正数，1 表示负数，这个表示符号的位叫做**符号位**。符号位决定其他为数值的格式。

其中正数以纯二进制格式表示，31 位中的每一位都表示 2 的幂。没用到的位以 0 填充。负数同样以二进制码存储，但用的是**二进制补码**。

二进制补码：

1).先求这个数的绝对值的二进制码；

2).再求二进制码的反码（0/1 替换 1/0）；

3).将得到的二进制反码加 1；

> 在处理有符号整数时，是不能访问位 31 的。???

以上 64 位转换 32 位的过程，会导致一个严重的副效应：在对特殊的 `NaN` 和 `Infinity` 值应用位操作时，这两个值都会被当做 0 来处理。如果对非数值应用位操作，会先使用 `Number()` 函数将该值转换为一个数值（自动），然后再进行位操作，得到一个数值。

#### 5.2.1 按位非 NOT（`~`）

运算符（`~`）将每个二进制位都变为相反值（0 变为 1，1 变为 0）。

考虑到这样的过程比较麻烦，可以简单记忆成，一个数与自身的取反值相加，等于 -1。

所有的位运算都只对整数有效。按位非遇到小数时，也会将小数部分舍去，只保留整数部分。所以，对一个小数连续进行两次按位非，能达到取整效果，是所有取整方法中最快的一种。

> 按位非是 ECMAScript 操作符中少数几个与二进制计算有关的操作符之一。
> 按位非是在数值表示的最底层执行操作，因此速度很快。

#### 5.2.2 按位与 AND（`&`）

本质：将两个数值的每一位对齐
有两个操作符数

二进制与运算符（`&`）的规则是逐位比较两个运算子，两个二进制位之中只要有一个位为 0，就返回 0，否则返回 1。

`0 & 3 // 0`

上面代码中，0（二进制 00）和 3（二进制 11）进行二进制与运算会得到 00（即 0）。

底层实现

```javascript
 25 = 0000 0000 0000 0000 0000 0000 0001 1001
  3 = 0000 0000 0000 0000 0000 0000 0000 0011
----------------------------------------------
AND = 0000 0000 0000 0000 0000 0000 0000 0001
```

#### 5.2.3 按位或 OR（`|`）

二进制或运算符（`|`）逐位比较两个运算子，两个二进制位之中只要有一个为 1，就返回 1，否则返回 0。

`0 | 3 // 3`

上面代码中，0 和 3 的二进制形式分别是 00 和 11，所以进行二进制或运算会得到 11（即 3）。

位运算只对整数有效，遇到小数时，会将小数部分舍去，只保留整数部分。所以，将一个小数与 0 进行二进制或运算，等同于对该数去除小数部分，即取整数位。

> 需要注意的是，这种取整方法不适用超过 32 位整数最大值 2 147 483 647 的数。

#### 5.2.4 按位异或 XOR（`^`）

| 第一个数值的位 | 第二个数值的位 | 结果 |
| :------------: | :------------: |:--: |
|       1        |       1        |  0   |
|       1        |       0        |  1   |
|       0        |       1        |  1   |
|       0        |       0        |  0   |

“异或运算”有一个特殊运用，连续对两个数 a 和 b 进行三次异或运算，`a^=b; b^=a; a^=b;`，可以互换它们的值。这意味着，使用“异或运算”可以在不引入临时变量的前提下，互换两个变量的值。这是互换两个变量的值的最快方法。

#### 5.2.5 左移（`<<`）

将数值的所有位向左移动指定的位数。左移操作会以 0 填充空位；且不会影响操作数的符号。

如果左移 0 位，就相当于将该数值转为 32 位整数，等同于取整，对于正数和负数都有效。

#### 5.2.6 右移（`>>`）

表示将一个数的二进制值向右移动指定的位数，头部补 0，但保留符号位。

右移运算可以模拟 2 的整除运算。

```javascript
5 >> 1;
// 2
// 相当于 5 / 2 = 2

21 >> 2;
// 5
// 相当于 21 / 4 = 5
```

> 有符号的右移操作会以符号位的值填充空位，与左移操作相反。

#### 5.2.7 带符号的右移（`>>>`）

将数值的所有 32 位都向右移。对正数来说，有、无符号的右移一样，但对于负数来说却是不一样的：

- 1).无符号右移是以 0 来填充的；

- 2).无符号的右移会把负数的二进制码当成正数的二进制码，而且负数以其绝对值的二进制补码形式表示，因此导致右移的结果非常大。

查看一个负整数在计算机内部的储存形式，最快的方法就是使用这个运算符。

`-1 >>> 0 // 4294967295`

位运算符可以用作设置对象属性的开关。

假定某个对象有四个开关，每个开关都是一个变量。那么，可以设置一个四位的二进制数，它的每个位对应一个开关。

```javascript
var FLAG_A = 1; // 0001
var FLAG_B = 2; // 0010
var FLAG_C = 4; // 0100
var FLAG_D = 8; // 1000
```

然后，就可以用二进制与运算检验，当前设置是否打开了指定开关。

```javascript
var flags = 5; // 二进制的0101

if (flags & FLAG_C) {
  // ...
}
// 0101 & 0100 => 0100 => true
```

上面代码检验是否打开了开关 C。如果打开，会返回 true，否则返回 false。

现在假设需要打开 A、B、D 三个开关，我们可以构造一个掩码变量。

```javascript
var mask = FLAG_A | FLAG_B | FLAG_D;
// 0001 | 0010 | 1000 => 1011
```

上面代码对 A、B、D 三个变量进行二进制或运算，得到掩码值为二进制的 1011。

有了掩码，二进制或运算可以确保打开指定的开关。

`flags = flags | mask;`

二进制与运算可以将当前设置中凡是与开关设置不一样的项，全部关闭。

`flags = flags & mask;`

异或运算可以**切换（toggle）**当前设置，即第一次执行可以得到当前设置的相反值，再执行一次又得到原来的值。

`flags = flags ^ mask;`

二进制否运算可以翻转当前设置，即原设置为 0，运算后变为 1；原设置为 1，运算后变为 0。

`flags = ~flags;`

### 5.3 布尔操作符

在一门编程语言中，布尔操作符的重要性堪比相等操作符。

#### 5.3.1 逻辑非 (`!`)

可以应用于任何类型值；无论何种类型，都会返回一个布尔值。逻辑非操作符首先会将它的操作数转换为一个布尔值，然后再取反。

#### 5.3.2 逻辑与 (`&&`)

**逻辑与操作属于短路操作符**，即如果第一个操作数能够决定结果，那么就不会再对第二个操作数求值。对于逻辑与而言，如果第一个操作数为 false，则无论第二个操作数是什么值，都不能是 true。总结为：第一个为 true，返回第二个操作数；第一个为 false，返回第一个操作数，且不再对第二个运算子求值。

#### 5.3.3 逻辑或 (`||`)

同逻辑与，逻辑或也是短路操作符。总结：第一个为 true，返回第一个操作数，且不再对第二个运算子求值；第一个为 false，返回第二个操作数。

> 这种只通过第一个表达式的值，控制是否运行第二个表达式的机制，就称为**短路（short-cut）**。

### 5.4 乘性操作符

ECMAScript 定义了 3 个乘性操作符。这些操作符与 Java、C 或者 Perl 中 相应操作符用途类似，只不过在操作数是非数值的情况下会执行自动的数据转换（`Number()`）。

#### 5.4.1 乘法(`*`)

语法类似 C，处理特殊值时，特殊规则：

---

- 都是数值：常规执行，超过范围返回 `Infinity` 或 `-Infinity`
- `Infinity` 和 0：返回 `NaN`
- `Infinity` 和非 0：返回 `Infinity` 或 `-Infinity`
- `Infinity` 与 `Infinity`/`-Infinity`：返回 `Infinity`/`-Infinity`

---

#### 5.4.2 除法(`/`)

同乘法操作符，处理特殊值时，特殊规则：

---

- 都是数值：常规执行，超过范围返回 `Infinity` 或 `-Infinity`
- `Infinity` 与 `Infinity`/`-Infinity`：返回 `NaN`
- `Infinity` 除非 0 有限数：返回 `Infinity` 或 `-Infinity`
- 0 与 0：返回 `NaN`
- 0 与 非 0：返回 0
- 非 0 除 0：返回 `Infinity`

---

#### 5.4.3 求模(`%`)

处理特殊值时，特殊规则：

---

- 都是数值：常规执行
- `Infinity` 除任何：返回 `NaN`
- 任何除 0：返回 `NaN`
- 非 0 有限数除 `Infinity`：返回被除数
- 0 除非 0：返回 0

---

> 需要注意的是，运算结果的正负号由第一个运算子的正负号决定。

#### 5.4.4 指数(`**`)

指数运算符（`**`）完成指数运算，前一个运算子是底数，后一个运算子是指数。

### 5.5 加性操作符

加法运算符（`+`）是最常见的运算符，用来求两个数值的和。JavaScript 允许非数值的相加。`+` 后面若是字符串则进行字符串拼接。

加法运算符是在运行时决定，到底是执行相加，还是执行连接。也就是说，运算子的不同，导致了不同的语法行为，这种现象称为**重载（overload）**。由于加法运算符存在重载，可能执行两种运算，使用的时候必须很小心。

除了加法运算符，其他算术运算符（比如减法、除法和乘法）都不会发生重载。它们的规则是：所有运算子一律转为数值，再进行相应的数学运算。

> 每个加法操作都是独立的。

### 5.6 关系操作符

小于(`<`)、大于(`>`)、小于等于(`<=`)和大于等于(`>=`)这几个关系操作符用于对两个值比较，返回一个布尔值。

遇到非数值操作数时也会进行数据类型转换，规则：

---

- 都是字符串：比较字符串对应的字符编码值
- 其他，转换数值，再比较
- 对象，调用 `valueOf()` 方法

---

### 5.7 相等操作符

#### 5.7.1 相等和不相等

用 `"=="` 判断两个值是否相等，会默认进行数据转换（通常称为强制转型），变成同一种数据类型再比较；

在转换不同的数据类型时，相等和不相等操作符遵循以下基本规则：

- 1.布尔、字符串：转换为数值再比较(都是字符串则比较 Unicode 马店)；

---

- 2.`NaN` 与任何类型值比较都是 false；`null` 不与其他数据类型相等（除了自身和 `undefined`）；`undefined` 不与其他数据类型相等（除了自身和 `null`）；

---

- 3.两个都是对象，比较是不是同一个对象，看引用地址是否指向同一个对象；

---

- 4.对象 & 非对象，调用对象的 `valueOf()` 方法，用得到的基本类型值再按前面规则进行比较；
  - 注意：对象 & 字符串，先将对象转换为字符串，再进行比较

---

#### 5.7.2 全等和不全等

用 `===` 绝对相等进行两个数据比较；数据类型不同绝对不等（`NaN` 不与任何数据相等）；

> 特殊情况：
> `null` `===` `undefined` //false
> `null` `===` `null` //true
> `undefined` `===` `undefined` //true

### 5.8 条件操作符(`?:`)

遵循与 Java 中的条件操作符相同的语法形式。

`var max = (num1 > num2) ? num1 : num2;`

通常来说，三元条件表达式与 `if...else` 语句具有同样表达效果，前者可以表达的，后者也能表达。但是两者具有一个重大差别，`if...else` 是语句，没有返回值；三元条件表达式是表达式，具有返回值。

### 5.9 赋值操作符(`=`)

简单的**赋值操作符（Assignment Operators）**由等于号表示，起作用就是把右侧的值赋给左侧的变量。

若在等于号前面添加乘性操作符、加性操作符或位操作符，就可以完成复合赋值操作符。

> 使用这些操作符主要是简化赋值操作，不会带来任何性能提升。

### 5.10 逗号操作符

使用逗号操作符可以在一条语句中执行多个操作，用于声明多个变量，除此之外，逗号操作符还可以赋值。在用于赋值时，逗号操作符总会返回表达式中的最后一项。

### 5.11 `void` 运算符

`void` 运算符的作用是执行一个表达式，然后不返回任何值，或者说返回 `undefined`。

```javascript
void 0; // undefined
void 0; // undefined
```

上面是 `void` 运算符的两种写法，都正确。建议采用后一种形式，即总是使用圆括号。因为 `void` 运算符的优先性很高，如果不使用括号，容易造成错误的结果。比如，`void 4 + 7` 实际上等同于 `(void 4) + 7`。

这个运算符的主要用途是浏览器的书签工具（bookmarklet），以及在超级链接中插入代码防止网页跳转。

请看下面的代码。

```javascript
<script>
function f() {
  console.log('Hello World');
}
</script>
<a href="http://example.com" onclick="f(); return false;">点击</a>
```

上面代码中，点击链接后，会先执行 `onclick` 的代码，由于 `onclick` 返回 false，所以浏览器不会跳转到 example.com。

`void` 运算符可以取代上面的写法。

`<a href="javascript: void(f())">文字</a>`

下面是一个更实际的例子，用户点击链接提交表单，但是不产生页面跳转。

```javascript
<a href0="javascript: void(document.form.submit())">提交</a>
```

### 5.12 运算顺序

#### 5.12.1 优先级

JavaScript 各种**运算符优先级别（Operator Precedence）**是不一样的。优先级高的运算符先执行，优先级低的运算符后执行。

#### 5.12.2 圆括号的作用

圆括号（`()`）可以用来提高运算的优先级，因为它的优先级是最高的，即圆括号中的表达式会第一个运算。

运算符的优先级别十分繁杂，且都是硬性规定，因此建议总是使用圆括号，保证运算顺序清晰可读，这对代码的维护和除错至关重要。

顺便说一下，圆括号不是运算符，而是一种**语法结构**。它一共有两种用法：一种是把表达式放在圆括号之中，提升运算的优先级；另一种是跟在函数的后面，作用是调用函数。

> 注意，因为圆括号不是运算符，所以不具有求值作用，只改变运算的优先级。

函数放在圆括号中，会返回函数本身。如果圆括号紧跟在函数的后面，就表示调用函数。

```javascript
function f() {
  return 1;
}

f; // function f(){return 1;}
f(); // 1
```

> 圆括号之中，只能放置表达式，如果将语句放在圆括号之中，就会报错。

#### 5.12.3 左结合与右结合

对于优先级别相同的运算符，大多数情况，计算顺序总是从左到右，这叫做运算符的**左结合（left-to-right associativity）**，即从左边开始计算。

但是少数运算符的计算顺序是从右到左，即从右边开始计算，这叫做运算符的**右结合（right-to-left associativity）**。其中，最主要的是赋值运算符（`=`）和三元条件运算符（`?:`）。

```javascript
w = x = y = z;
q = a ? b : c ? d : e ? f : g;
```

上面代码的运算结果，相当于下面的样子。

```javascript
w = x = y = z;
q = a ? b : c ? d : e ? f : g;
```

## 6 语句

ECMAScript-262 规定了一组语句（也称为**流控制语句**）。从本质上来看，语句定义 ECMAScript 中的主要语法，语句通常使用以或多个关键字来完成给定任务。

### 6.1 条件语句

#### 6.1.1 `if` / (`else`)

最常用的判断，可以解决 js 中所有的判断需求；

```javascript
if (condition) {
  statement1;
} else {
  statement2;
}
```

其中 condition 可以是任意表达式，但必须放在圆括号中，表示对表达式求值。此外对这个表达式求值的结果不一定是布尔值。ECMAScript 会自动调用 `Boolean()` 这个方法将这个表达式的结果转换为一个布尔值。

> statement 语句可以是一行代码，也可以是代码块；不过，业界普遍推崇始终使用代码块，因为这样可以消除误解。

`else` 代码块总是与离自己最近的那个 `if` 语句配对。

> if 中的条件可以是多个小的条件的组合，中间用 `||` 和 `&&` 隔开；`if([]){}` 代表是真的；
> tip：

`if` 后面的表达式之中，容易混淆赋值表达式（`=`）、严格相等运算符（`===`）和相等运算符（`==`）。尤其是赋值表达式不具有比较作用。这种错误可以正常生成一个布尔值，因而不会报错。

为了避免这种情况，将常量写在运算符的左边，这样的话，一旦不小心将相等运算符写成赋值运算符，就会报错，因为常量不能被赋值。

#### 6.1.2 `switch`

`switch` 与 `if` 语句的关系最为密切，而且也是其他语言中普遍使用的一种流控制语句。

```javascript
switch (i) {
  case 25:
  /*合并两种情形*/
  case 35:
    console.log("25 or 35");
    break;
  case 45:
    console.log("45");
    break;
  default:
    console.log("Other");
}
```

`switch` 语句的每一种**情形（case）**的含义是：如果表达式等于这个值，则执行后面的语句。如果省略 `break` 关键字，就会导致执行完前一个 `case`，继续执行下一个 `case`。最后的关键字 `default` 则用于表达式不匹配前面任何一种情形的时候，要执行的代码。

`switch` 语句中可以使用任何数据类型；其次，每一个 `case` 不一定是常量，可以是变量，甚至是表达式：

```javascript
switch ("hello  world") {
  case "hello" + "world":
    console.log("Greeting was found.");
    break;
  case "goodbye":
    console.log("Closing was found.");
    break;
  default:
    console.log("Unexpected message was found.");
}
```

> 每一个 `case` 相当于全等操作符比较，一定要注意数据类型；

#### 6.1.3 三元运算符 `?:`

JavaScript 还有一个三元运算符（即该运算符需要三个运算子） `?:`，也可以用于逻辑判断。

`(条件) ? 表达式1 : 表达式2 ;`

这个三元运算符可以被视为 `if...else...` 的简写形式，因此可以用于多种场合。

### 6.2 循环语句

#### 6.2.1 `do-while`

`do-while` 语句是一种**后测试循环语句**，即只有在循环体中的代码执行之后，才会测试出口条件。即在对表达式求值之前，循环体内的代码至少会被执行一次。

```javascript
var i = 0;
do {
  i += 2;
} while (i < 10);
```

> 后测试循环语句最常用于循环体中的代码至少要执行一次的情形。

#### 6.2.2 `while`

`while` 语句属于**前测试循环语句**，也就是说，在循环体内的代码被执行之前，就会对出口条件求值。因此，循环体内的代码有可能永远不会被执行。

```javascript
var i = 0;
while (i < 10) {
  i += 2;
}
```

#### 6.2.3 `for`

`for` 语句也是一种前测试循环语句，但他具有在执行循环之前初始化变量和定义循环后要执行的代码的能力。

四部曲

---

- 1).设置初始值(initiale)；
- 2).设置循环执行条件(test)；
- 3).执行循环体中的命令；
- 4).每一轮**循环完成后**都会执行 `i++` 累加操作(increment)；

---

```javascript
var count = 6;
for (var i = 0; i < count; i++) {
  //var i=0   初始化表达式
  //i<count   条件表达式
  //i++       定义循环后表达式
  //{...}     循环体
  console.log(i); //0 1 2 3 4 5
}
console.log(i); //6
```

只有条件表达式为 true 时，才会进入 `for` 循环，一次也有可能不会执行循环体中的代码。使用 `while` 循环做不到，使用 `for` 循环也做不到。也就是说，`for` 循环只是把与循环有关的代码集中在一个位置。

有必要指出的是初始化表达式可以在在外部执行，同时由于没有块级作用域，在外部可以访问到循环内部定义的变量。

此外，`for` 语句中的初始化表达式、条件语句和循环定义后表达式都是可选的，将这三个表达式全部省略，就会创建一个无限循环。

#### 6.2.4 `for in`

`for in` 语句是一种精准的迭代语句，可以用来枚举对象的属性：

```javascript
var obj = { a: "小明", b: "中明", c: "大明" };
for (var key in obj) {
  console.log(key, obj[key]);
  //a 小明   b 中明   c 大明
}
```

对象中有多少组属性对，就循环多少次；在 `for in` 循环中，只能通过 `对象名[key]` 来获取，不能写成 `obj.key`（不确定属性名中是不是会有数字）；

顺序问题：首先循环带数字的属性名（由小到大）；再把剩下的属性名按照定义的顺序循环；

ECMAScript 对象的属性没有顺序。因此，通过 `for in` 循环输出的属性名的顺序是不可预测的。具体来讲，所有属性都会被返回一次，但返回的先后顺序可能会因浏览器而异。

但是，如果要迭代的对象是 `null` 和 `undefined`，`for in` 会抛出错误。ECMAScript5 更正了这一行为；对这种情况不再抛出错误，而只是不执行循环体。

### 6.3 `label`

使用 `label` 语句可以在代码中添加标签，以便将来使用：

```javascript
label: statement;

start: for (var i = 0; i < 10; i++) {
  console.log(i);
}
```

这个例子中定义的 start 标签可以在将来由 `break` 或 `continue` 语句所用。加标签语句一般要与 `for` 语句等循环语句配合使用。

### 6.4 `break` 或 `continue`

`break` 或 `continue` 用于在循环中精确的控制代码的执行。其中 `break` 语句会立即退出循环结构，强制继续执行循环后面的语句。而 `continue` 语句会立即退出本轮循环进行下一轮的循环。

> `break` 或 `continue` 后面的语句不会被执行，但 `continue` 会执行递增表达式这一步。

```javascript
var num = 0;
for (var i = 1; i < 10; i++) {
  if (i % 5 == 0) {
    break;
  }
  num++;
}
console.log(num); //4

for (var i = 1; i < 10; i++) {
  console.log("one:" + i, num);
  if (i % 5 == 0) {
    continue;
  }
  console.log("two:" + i, num);
  num++;
}
console.log(num); //8
```

`break` 或 `continue` 语句都可以与 `label` 语句联合使用，从而返回代码中特定的位置。这种联合使用的情况多发生在循环嵌套的情况下：

```javascript
var num = 0;
outermost: for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    if (i === 5 && j === 5) {
      break outermost;
    }
    num++;
  }
}
console.log(num); //55

outermost: for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    if (i === 5 && j === 5) {
      continue outermost;
    }
    num++;
  }
}
console.log(num); //95
```

在以上例子中，outermost 标签表示外部的 `for` 语句。内部的 `break` 语句带有一个参数：要返回的标签。添加这个标签，不仅导致 `break` 语句会退出内部的 `for` 循环，并且还会退出外部的 `for` 循环。`continue` 语句同理。

如果存在多重循环，不带参数的 `break` 语句和 `continue` 语句都只针对最内层循环。

> 过度使用，可能会带来调试的麻烦。建议使用 `label` 语句，一定要使用描述性的标签，同时不要嵌套过多的循环。

### 6.5 `with`

`with` 语句的作用是将代码的作用域设置到一个特定的对象中。定义`with` 语句的主要目的是为了简化多次编写同一个对象的工作：

```javascript
var qs = location.search.substring(1);
var hostName = location.hostname;
var url = location.href;

with (location) {
  var qs = search.substring(1);
  var hostName = hostname;
  var url = href;
}
```

使用 `with` 语句关联了 location 对象，着意味着在 `with` 语句的代码块内部，每个变量首先被认为是一个局部变量，而如果在局部变量环境中找不到该变量的定义，就会查询 location 对象中是否有同名的属性。如果有，则以 location 对象中的属性值作为变量的值。

> 严格模式下，不允许使用 `with` 语句，否则被视为语法错误。
> 大量使用 `with` 语句会降低性能，同时也会给调试代码带来困难，因此，在开发大型医用程序时，不建议使用 `with` 语句。

## 7 Function

函数是一段可以反复调用的代码块。

### 7.1 函数声明

JavaScript 有三种声明函数的方法。

#### 7.1.1 `function` 声明

ECMAScript 中的函数用 `function` 关键字来定义，可以用在函数定义表达式或者函数声明语句中，后面跟随以下组成部分：

1).函数名标识符

是函数声明语句必需的部分。用途类似变量名，新定义的函数对象会赋值给这个变量。对于函数定义表达式，这个名是可选的；如果存在，则该名字只存在于函数体中，并指代该函数本身。

2).一对圆括号

其中包含 0 个或多个标识符组成的列表，这些标识符是函数的参数名称；

3).一对花括号

其中包含 0 条或多条 JavaScript 语句，这些语句构成函数体，一旦函数调用，就会执行这些语句。

> 一条函数声明语句实际上声明了一个变量，并把一个函数对象赋值给它。相对而言，定义函数表达式时并没有声明一个变量。

```javascript
function print(s) {
  console.log(s);
}
```

上面的代码命名了一个 print 函数，以后使用 `print()` 这种形式，就可以调用相应的代码。这叫做**函数的声明（Function Declaration）**。

#### 7.1.2 函数表达式

除了用 `function` 命令声明函数，还可以采用变量赋值的写法。

```javascript
var print = function(s) {
  console.log(s);
};
```

这种写法将一个匿名函数赋值给变量。这时，这个匿名函数又称**函数表达式（Function Expression）**，因为赋值语句的等号右侧只能放表达式。

采用函数表达式声明函数时，`function` 命令后面不带有函数名。如果加上函数名，该函数名只在函数体内部有效，指代函数表达式本身，在函数体外部无效。

```javascript
var print = function x() {
  console.log(typeof x);
};

x;
// ReferenceError: x is not defined

print();
// function
```

这种写法的用处有两个，一是可以在函数体内部调用自身，二是方便除错（除错工具显示函数调用栈时，将显示函数名，而不再显示这里是一个匿名函数）。因此，下面的形式声明函数也非常常见。

`var f = function f() {};`

需要注意的是，函数的表达式需要在语句的结尾加上分号，表示语句结束。而函数的声明在结尾的大括号后面不用加分号。总的来说，这两种声明函数的方式，差别很细微，可以近似认为是等价的。

> 函数表达式特别适合用来定义那些只会用到一次的函数。

#### 7.1.3 Function 构造函数

第三种声明函数的方式是 `Function` 构造函数。

```javascript
var add = new Function("x", "y", "return x + y");

// 等同于
function add(x, y) {
  return x + y;
}
```

上面代码中，`Function` 构造函数接受三个参数，除了最后一个参数是 add 函数的“函数体”，其他参数都是 add 函数的参数。

你可以传递任意数量的参数给 `Function` 构造函数，只有最后一个参数会被当做函数体，如果只有一个参数，该参数就是函数体。

> `Function` 构造函数可以不使用 `new` 命令，返回结果完全一样。总的来说，这种声明函数的方式非常不直观，几乎无人使用。

### 7.2 重复声明

如果同一个函数被同种方式多次声明，后面的声明就会覆盖前面的声明。

> 由于函数名的提升，前一次声明在任何时候都是无效的，这一点要特别注意。

严格模式的限制：

---

- 不能把函数命名为 `eval` 或 `arguments`
- 不能把参数命名为 `eval` 或 `arguments`
- 不能出现两个命名参数同名的情况

---

### 7.3 `return` 语句和递归

调用函数时，要使用圆括号运算符。圆括号之中，可以加入函数的参数。

ECMAScript 中的函数在定义时不必指定是否返回值，实际上，任何函数在任何时候都可以通过 `return` 语句后跟要返回的值来实现返回值；当然应该函数中也可以包含多个 `return` 语句。

另外，`return` 语句也可以不带有任何返回值，在这种情况下，函数停止执行返回 `undefined`，这种用法一般应在需要提前停止函数执行而又不需要返回值的时候。

> 注意，`return` 语句后面的语句是不会被执行的；对于多个 `return` 语句的情况，也是如此。
> 推荐的做法是要么让函数始终返回一个值，要么永远都不要返回值。
> `return` 语句后面，访问 `window` 属性，返回都是 false；

函数可以调用自身，这就是**递归（recursion）**。下面就是通过递归，计算斐波那契数列的代码。

```javascript
function fib(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return fib(num - 2) + fib(num - 1);
}

fib(6); // 8
```

### 7.4 数据函数

JavaScript 语言将函数看作一种值，与其它值（数值、字符串、布尔值等等）地位相同。**凡是可以使用值的地方，就能使用函数**。比如，可以把函数赋值给变量和对象的属性，也可以当作参数传入其他函数，或者作为函数的结果返回。函数只是一个可以执行的值，此外并无特殊之处。

由于函数与其他数据类型地位平等，所以在 JavaScript 语言中又称函数为第一等公民。

### 7.5 函数名的提升

JavaScript 引擎将函数名视同变量名，所以采用 `function` 命令声明函数时，整个函数会像变量声明一样，被提升到代码头部。但是，如果采用赋值语句定义函数，不会提升。

如果同时采用 `function` 命令和赋值语句声明(`var`)同一个函数，最后总是采用赋值语句的定义。

### 7.6 不能在条件语句中声明函数

根据 ES5 的规范，不得在非函数的代码块中声明函数，最常见的情况就是`if`和`try`语句。

```javascript
if (foo) {
  function x() {}
}

try {
  function x() {}
} catch (e) {
  console.log(e);
}
```

上面代码按照语言规范，这是不合法的。但是，实际情况是各家浏览器往往并不报错，能够运行。

但是由于存在函数名的提升，所以在条件语句中声明函数，可能是无效的，这是非常容易出错的地方。

```javascript
if (false) {
  function f() {}
}

f(); // 不报错
```

上面代码的原始意图是不声明函数 f，但是由于 f 的提升，导致 `if` 语句无效，所以上面的代码不会报错。要达到在条件语句中定义函数的目的，只有使用函数表达式。

```javascript
if (false) {
  var f = function() {};
}

f(); // undefined
```

### 7.7 函数的属性

#### 7.7.1 `name` 属性

函数的 `name` 属性返回函数的名字。

```javascript
function f1() {}
f1.name; // "f1"
```

如果是通过变量赋值定义的函数，那么 `name` 属性返回变量名。

```javascript
var f2 = function() {};
f2.name; // "f2"
```

但是，上面这种情况，只有在变量的值是一个匿名函数时才是如此。如果变量的值是一个具名函数，那么 `name` 属性返回 `function` 关键字之后的那个函数名。

```javascript
var f3 = function myName() {};
f3.name; // 'myName'
```

上面代码中，`f3.name` 返回函数表达式的名字。注意，真正的函数名还是 f3，而 `myName` 这个名字只在函数体内部可用。

`name` 属性的一个用处，就是获取参数函数的名字。

```javascript
var myFunc = function() {};
function test(f) {
  console.log(f.name);
}
test(myFunc); // myFunc

//1.函数f.bind 函数的函数名是:  bound 函数f
function f1() {}
var f2 = f1.bind(1);
console.log(f2.name); //bound f1

//2.通过构造函数创建方式创建的函数,name :anonymous
var ff = new Function();
console.log(ff.name); //anonymous
console.log(function() {}.name); //""
```

#### 7.7.2 `length` 属性

函数的 `length` 属性返回函数预期传入的参数个数，即形参个数。

```javascript
function f(a, b) {}
f.length; // 2
```

`length` 属性提供了一种机制，判断定义时和调用时参数的差异，以便实现面向对象编程的方法**重载（overload）**。

### 7.8 `toString()`

函数的 `toString` 方法返回一个字符串，内容是函数的源码。函数内部的注释也可以返回。

### 7.9 函数作用域

形成私有作用域 -> 变量提声 -> 给形参赋值 -> 执行代码

#### 7.9.1 定义

**作用域（scope）**指的是变量存在的范围。在 ES5 的规范中，Javascript 只有两种作用域：一种是全局作用域，变量在整个程序中一直存在，所有地方都可以读取；另一种是函数作用域，变量只在函数内部存在。

函数外部声明的变量就是**全局变量（global variable）**，它可以在函数内部读取。在函数内部定义的变量，外部无法读取，称为**局部变量（local variable）**。函数内部定义的变量，会在该作用域内覆盖同名全局变量。

JavaScript 中的函数运行在它们被定义的作用域里,而不是它们被执行的作用域里。

在一个函数被定义的时候, 会将它定义时刻的**作用域链（scope chain）**链接到这个函数对象的 `[[Scopes]]` 属性.

在一个函数对象被调用的时候，会创建一个活动对象(也就是一个对象)，然后对于每一个函数的形参，都命名为该活动对象的命名属性，然后将这个活动对象做为此时的作用域链最前端，并将这个函数对象的 `[[Scopes]]` 加入到 `scope chain` 中。

```javascript
var fn = function(lps, rps) {
  var name = "laruence";
};
fn();
```

在执行 fn 的定义语句的时候，会创建一个这个函数对象的 `[[Scopes]]` 属性(内部属性，只有 JS 引擎可以访问，但 FireFox 的几个引擎(SpiderMonkey 和 Rhino)提供了私有属性 `__parent__` 来访问它)，并将这个 `[[Scopes]]` 属性，链接到定义它的作用域链上，此时因为 fn 定义在全局环境，所以此时的 `[[Scopes]]` 只是指向全局活动对象 `window active object`。

在调用 fn 的时候，会创建一个活动对象(假设为 `aObj`，由 JS 引擎预编译时刻创建)，并创建 `arguments` 属性，然后会给这个对象添加俩个命名属性 `aObj.lps`，`aObj.rps`；对于每一个在这个函数中申明的局部变量和函数定义，都作为该活动对象的同名命名属性。然后将调用参数赋值给形参数，对于缺少的调用参数，赋值为 `undefined`。

然后将这个活动对象做为 `scope chain` 的最前端，并将 fn 的 `[[Scopes]]` 属性所指向的，定义 fn 时候的顶级活动对象，加入到 `scope chain`。

有了上面的作用域链, 在发生标识符解析的时候，就会逆向查询当前 `scope chain` 列表的每一个活动对象的属性，如果找到同名的就返回。找不到，那就是这个标识符没有被定义。

注意到，因为函数对象的 `[[Scopes]]` 属性是在定义一个函数的时候决定的，而非调用的时候，所以如下面的例子：

```javascript
var name = "laruence";
function echo() {
  console.log(name);
}

function env() {
  var name = "eve";
  echo();
}

env(); //laruence
```

#### 7.9.2 函数内部的变量提升

与全局作用域一样，函数作用域内部也会产生“**变量提升**”现象。`var` 命令声明的变量，不管在什么位置，变量声明都会被提升到函数体的头部。

#### 7.9.3 函数本身的作用域

函数本身也是一个值，也有自己的作用域。它的作用域与变量一样，就是其声明时所在的作用域，与其运行时所在的作用域无关。

```javascript
var a = 1;
var x = function() {
  console.log(a);
};

function f() {
  var a = 2;
  x();
}

f(); // 1
```

总之，**函数执行时所在的作用域，是定义时的作用域**，而不是调用时所在的作用域。同样的，函数体内部声明的函数，作用域绑定函数体内部。

### 7.10 参数

#### 7.10.1 概述

函数运行的时候，有时需要提供外部数据，不同的外部数据会得到不同的结果，这种外部数据就叫参数。

javascript 函数是参数化的：函数的定义会包括一个被称为**形参（parameter）**的标识符列表，这些参数在函数体中像局部变量一样工作。

函数调用会为形参提供实参的值。除了实参外，每次调用还会拥有另一个值--本次调用的上下文 ——— 这就是 `this` 关键字的值。

如果函数挂载在一个对象上，作为对象的一个属性，就称它为对象的方法。当通过对象来调用函数时，该对象就是此次调用的**上下文（context）**。

用于初始化一个新创建的对象的函数称为**构造函数（constructor）**。

> 在 JavaScript 里，函数即对象，程序可以随意操控它们。

#### 7.10.2 参数的省略

函数参数不是必需的，Javascript 允许省略参数。

但是运行时无论提供多少个参数（或者不提供参数），JavaScript 都不会报错。省略的参数的值就变为 `undefined`。

但是，没有办法只省略靠前的参数，而保留靠后的参数。如果一定要省略靠前的参数，只有显式传入 `undefined`。

#### 7.10.3 传递方式

函数参数如果是原始类型的值（数值、字符串、布尔值），传递方式是**传值传递（passes by value）**。这意味着，在函数体内修改参数值，不会影响到函数外部。

但是，如果函数参数是复合类型的值（数组、对象、其他函数），传递方式是**传址传递（pass by reference）**。也就是说，传入函数的原始值的地址，因此在函数内部修改参数，将会影响到原始值。

实际上应用的策略是 `call by sharing`，通俗的说就是，它并不是把引用直接传递进去，而是把引用的拷贝（浅拷贝）传递进去存储在函数内部的活动对象里。因此，如果你对这个引用进行第二次赋值的时候，实际上把这份引用指向了另外一个对象，所以之后对这个对象的操作不会影响到外部的对象。

> 注意，如果函数内部修改的，不是参数对象的某个属性，而是替换掉整个参数(改变了引用地址)，这时不会影响到原始值。

#### 7.10.4 同名参数

如果有同名的参数，则取最后出现的那个值。

```javascript
function f(a, a) {
  console.log(a);
}

f(1, 2); // 2
f(1); //undefined
```

### 7.11.`arguments`对象

#### 7.11.1 定义

ECMAScript 函数不限制传递参数的个数和类型。因为参数在函数内部是用一个数组来表示的。函数始终接收的都是这个数组。

在函数体内可以通过 `arguments` 对象来访问这个参数数组，从而获取传递给函数的每一个参数（所以可以不写形参）。这个对象只有在函数体内部，才可以使用。

ECMAScript 函数的重要特点：

---

- 1).形参只提供便利，不是必须的；
- 2).`arguments` 对象可以与形参一起使用；
- 3).`arguments` 的值永远与对应形参的值保持同步（他们是值同步的，但空间独立）；
- 4).`arguments` 对象的长度由传入参数的长度来决定（跟定义函数的命名参数的个数 `length` 无关）；
- 5).没有传递值的形参将自动被赋予 `undefined`；

---

> 正常模式下，`arguments` 对象可以在运行时修改。严格模式：重写 `arguments` 会导致语法错误（不执行）；对 `arguments` 元素赋值无效。

#### 7.11.2 类数组

与数组类似（但并不是 `Array` 的实例），因此可以使用方括号语法访问它的任意元素，使用 `length` 属性来确定传递进来多少个参数。

如果要让 `arguments` 对象使用数组方法，真正的解决方法是将 `arguments` 转为真正的数组。下面是两种常用的转换方法：`slice` 方法和逐一填入新数组。

```javascript
var args = Array.prototype.slice.call(arguments);

// 或者
var args = [];
for (var i = 0; i < arguments.length; i++) {
  args.push(arguments[i]);
}
```

#### 7.11.3 `callee` 属性

`arguments` 对象带有一个 `callee` 属性，返回它所对应的原函数。

```javascript
var f = function() {
  console.log(arguments.callee === f);
};

f(); // true
```

可以通过 `arguments.callee`，达到调用函数自身的目的。这个属性在严格模式里面是禁用的，因此不建议使用。

#### 7.11.4 `caller`

指向调用当前函数的函数(即只有在函数被调用时才能取到值)

```javascript
function f1() {
  console.log(f1.caller); //指向调用该函数的函数
  console.log(arguments.callee); //指向该函数本身
}

function f2() {
  f1();
}
f2();
```

### 7.12 没有重载

ECMAScript 函数没有**签名**（接收的参数的类型和数量），因为其参数是由包含 0 或多个值的数组来表示的。而没有函数签名，真正的重载是不可能做到的。

### 7.13 闭包

理解**闭包（closure）**，首先必须理解变量作用域。JavaScript 有两种作用域：全局作用域和函数作用域。函数内部可以直接读取全局变量。但是，函数外部无法读取函数内部声明的变量。

如果出于种种原因，需要得到函数内的局部变量。正常情况下，这是办不到的，只有通过变通方法才能实现。那就是在函数的内部，再定义一个函数。

```javascript
function f1() {
  var n = 999;
  function f2() {
    console.log(n); // 999
  }
}
```

上面代码中，函数 f2 就在函数 f1 内部，这时 f1 内部的所有局部变量，对 f2 都是可见的。但是反过来就不行，f2 内部的局部变量，对 f1 就是不可见的。这就是 JavaScript 语言特有的**链式作用域（chain scope）**结构，子对象会一级一级地向上寻找所有父对象的变量。所以，父对象的所有变量，对子对象都是可见的，反之则不成立。

既然 f2 可以读取 f1 的局部变量，那么只要把 f2 作为返回值，我们不就可以在 f1 外部读取它的内部变量了吗！

```javascript
function f1() {
  var n = 999;
  function f2() {
    console.log(n);
  }
  return f2;
}

var result = f1();
result(); // 999
```

闭包就是函数 f2，即**能够读取其他函数内部变量的函数**。由于在 JavaScript 语言中，只有函数内部的子函数才能读取内部变量，因此可以把闭包简单理解成“定义在一个函数内部的函数”。

闭包最大的特点，就是它可以“记住”诞生的环境，比如 f2 记住了它诞生的环境 f1，所以从 f2 可以得到 f1 的内部变量。**在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁**。

闭包的最大用处有两个，一个是可以读取函数内部的变量，另一个就是让这些变量始终保持在内存中，即闭包可以使得它诞生环境一直存在。请看下面的例子，闭包使得内部变量记住上一次调用时的运算结果。

```javascript
function createIncrementor(start) {
  return function() {
    return start++;
  };
}

var inc = createIncrementor(5);

inc(); // 5
inc(); // 6
inc(); // 7
```

上面代码中，start 是函数 createIncrementor 的内部变量。通过闭包，start 的状态被保留了，每一次调用都是在上一次调用的基础上进行计算。从中可以看到，闭包 inc 使得函数 createIncrementor 的内部环境，一直存在。所以，**闭包可以看作是函数内部作用域的一个接口**。

为什么会这样呢？原因就在于 inc 始终在内存中，而 inc 的存在依赖于 createIncrementor，因此也始终在内存中，不会在调用结束后，被垃圾回收机制回收。

闭包的另一个用处，是封装对象的私有属性和私有方法。

```javascript
function Person(name) {
  var _age;
  function setAge(n) {
    _age = n;
  }
  function getAge() {
    return _age;
  }

  return {
    name: name,
    getAge: getAge,
    setAge: setAge
  };
}

var p1 = Person("mark");
p1.setAge(25);
p1.getAge(); // 25
```

注意，外层函数每次运行，都会生成一个新的闭包，而这个闭包又会保留外层函数的内部变量，所以内存消耗很大。因此不能滥用闭包，否则会造成网页的性能问题。

### 7.14 立即调用的函数表达式（IIFE）

在 Javascript 中，圆括号 `()` 是一种运算符，跟在函数名之后，表示调用该函数。

有时，我们需要在定义函数之后，立即调用该函数。这时，你不能在函数的定义之后加上圆括号，这会产生语法错误。

产生这个错误的原因是，`function` 这个关键字即可以当作语句，也可以当作表达式。

为了避免解析上的歧义，JavaScript 引擎规定，如果 `function` 关键字出现在行首，一律解释成语句。因此，JavaScript 引擎看到行首是 `function` 关键字之后，认为这一段都是函数的定义，不应该以圆括号结尾，所以就报错了。

解决方法就是不要让 `function` 出现在行首，让引擎将其理解成一个表达式。最简单的处理，就是将其放在一个圆括号里面。

```javascript
(function() {
  /* code */
})();
// 或者
(function() {
  /* code */
})();
```

上面两种写法都是以圆括号开头，引擎就会认为后面跟的是一个表示式，而不是函数定义语句，所以就避免了错误。这就叫做**立即调用的函数表达式（Immediately-Invoked Function Expression）**，简称 IIFE。

> 注意，上面两种写法最后的分号都是必须的。如果省略分号，遇到连着两个 IIFE，可能就会报错(JavaScript 会将它们连在一起解释，将第二行解释为第一行的参数。)。

推而广之，任何让解释器以表达式来处理函数定义的方法，都能产生同样的效果，比如下面三种写法。

```javascript
var i = (function() {
  return 10;
})();
true &&
  (function() {
    /* code */
  })();
0,
  (function() {
    /* code */
  })();
```

通常情况下，只对匿名函数使用这种“立即执行的函数表达式”。它的目的有两个：

- 一是不必为函数命名，避免了污染全局变量；
- 二是 IIFE 内部形成了一个单独的作用域，可以封装一些外部无法读取的私有变量。

```javascript
// 写法一
var tmp = newData;
processData(tmp);
storeData(tmp);

// 写法二
(function() {
  var tmp = newData;
  processData(tmp);
  storeData(tmp);
})();
```

上面代码中，写法二比写法一更好，因为完全避免了污染全局变量。

### 7.15 `eval`

`eval` 命令的作用是，将字符串当作语句执行。

放在 `eval` 中的字符串，应该有独自存在的意义，不能用来与 `eval` 以外的命令配合使用。

`eval` 没有自己的作用域，都在当前作用域内执行，因此可能会修改当前作用域的变量的值，造成安全问题。

为了防止这种风险，JavaScript 规定，如果使用严格模式，`eval` 内部声明的变量，不会影响到外部作用域。

```javascript
(function f() {
  "use strict";
  eval("var foo = 123");
  console.log(foo); // ReferenceError: foo is not defined
})();
```

不过，即使在严格模式下，`eval` 依然可以读写当前作用域的变量。

```javascript
(function f() {
  "use strict";
  var foo = 1;
  eval("foo = 2");
  console.log(foo); // 2
})();
```

上面代码中，严格模式下，`eval` 内部还是改写了外部变量，可见安全风险依然存在。

此外，`eval` 的命令字符串不会得到 JavaScript 引擎的优化，运行速度较慢。这也是一个不应该使用它的理由。

> 通常情况下，`eval` 最常见的场合是解析 `JSON` 数据字符串，不过正确的做法应该是使用浏览器提供的 `JSON.parse` 方法。

JavaScript 引擎内部，`eval` 实际上是一个引用，默认调用一个内部方法。这使得 `eval` 的使用分成两种情况，一种是像上面这样的调用 `eval(expression)`，这叫做“直接使用”，这种情况下 `eval` 的作用域就是当前作用域。除此之外的调用方法，都叫“间接调用”，此时 `eval` 的作用域总是全局作用域。

```javascript
var a = 1;

function f() {
  var a = 2;
  var e = eval;
  e("console.log(a)");
}

f(); // 1
```

上面代码中，`eval` 是间接调用，所以即使它是在函数中，它的作用域还是全局作用域，因此输出的 a 为全局变量。

与 `eval` 作用类似的还有 `Function` 构造函数。利用它生成一个函数，然后调用该函数，也能将字符串当作命令执行。

```javascript
var jsonp = 'foo({"id": 42})';

var f = new Function("foo", jsonp);
// 相当于定义了如下函数
// function f(foo) {
//   foo({"id":42});
// }

f(function(json) {
  console.log(json.id); // 42
});
```

上面代码中，jsonp 是一个字符串，`Function` 构造函数将这个字符串，变成了函数体。调用该函数的时候，jsonp 就会执行。这种写法的实质是将代码放到函数作用域执行，避免对全局作用域造成影响。

不过，`new Function()` 的写法也可以读写全局作用域，所以也是应该避免使用它。