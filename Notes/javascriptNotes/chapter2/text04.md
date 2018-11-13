##### 5.4.4 空格处理

1).`string.trim()`

创建一个字符串的副本；删除前置及后缀的所有空格，然后返回结果；不修改原字符串；

- --
- 返回值：新字符串
- 没有参数，传参不报错，但是无效
- --

> 该方法去除的不仅是空格，还包括制表符（`\t`、`\v`）、换行符（`\n`）和回车符（`\r`）。

##### 5.4.5 字符串大小写转换方法

1).`string.toUpperCase()`
2).`string.toLowerCase()`
3).`string.toLocaleLowerCase()`
4).`string.toLocaleUpperCase()`

> `toUpperCase()`和`toLowerCase()`借鉴`Java.lang.String`中的同名方法；
> `toLocaleLowerCase()`和`toLocaleUpperCase()`是针对特定地区的实现；

- --
- 返回值：新字符串
- 没有参数，传参不报错，但是无效
- --

> 对于`toLocaleLowerCase()`和`toLocaleUpperCase()`传入参数为`null`或`undefined`会报错：`Uncaught TypeError: Cannot convert undefined or null to object at String.toLocaleLowerCase (native)`

##### 5.4.6 字符串的模式匹配方法

1).**`string.match(str/reg)`**

找到一个或多个正则表达式的匹配结果（在字符串上调用这个方法，本质上与调用`RegExp`的`exec()`方法相同）。

- --
- 返回值：一个数组或`null`；
- 参数类型：正则表达式/`RegExp`对象
- 参数：只接受一个参数
  - 不传参数，匹配项返回空字符
- --

```javascript
var s = "green yellow";

console.log(s.match());
//["", index: 0, input: "green yellow"]

console.log(s.match(/(en)/));
//["e", index: 2, input: "green yellow"]

console.log(/(e)/g.exec(s));
//["e", "e", index: 2, input: "green yellow"]
```

如果参数没有“`g`”标志，`match()`将只进行一次匹配。

如果没有匹配结果，则返回`null`；若有匹配结果，第一项是匹配项，之后每一项保存正则表达式圆括号子表达式匹配的字符串（若有），倒数第二项是匹配项的首字符的索引；最后一项是原字符；

如果参数有“`g`”标志，则`match()`进行一次全局搜索。全局匹配返回的数组和非全局匹配返回的数组内容很不一样。在全局匹配的情况下，数组元素包含`string`中每一个匹配子串，同时返回的数组没有`index`和`input`属性。

> 注意:对于全局匹配，`match()`不会提供有关捕获组的信息，也不会记录每个匹配的子串在`string`中的位置。若想在全局搜索时获取这些信息，可以使用`RegExp.exec()`。

2).`string.search(str/reg)`

根据正则表达式在string中寻找匹配的字符串；

- --
- 返回值：返回字符串中第一个匹配项的索引；如果找不到匹配项，则返回-1；
- 参数类型：正则表达式/RegExp对象
- 参数：只接受一个参数
- --

`search()`不执行全局匹配，会忽略“`g`”标志。也会忽略`regexp`的`lastIndex`属性，总是从开头位置开始搜索，这意味着它总是返回第一个匹配子串的位置。

##### 5.4.7 字符串的替换

1).**`string.replace(regexp[,replacement])`**

替换给定正则表达式匹配的（一个或多个）子表达式；

- --
- 返回值：新字符串，其中匹配的项(正则的最大匹配项)已替换为replacement（可以组合）
- 参数类型：`RegExp`对象/字符串，字符/function
- 参数：
  - a.不传参数，则返回原字符串
  - b.第一个参数可以是一个`RegExp`对象或者一个字符串（这个字符串不会被转换为正则表达式）；
  - c.只传一个参数：若能匹配，则将匹配项替换成`undefined`；若不能匹配，则返回原字符串
  - d.第二个参数是替换文本，可以是一个字符串或者一个函数，用于在调用时生成对应的替换文本（如果第一个参数是字符串，只替换第一个子字符串，要想替换所有子字符串，提供一个正则表达式和全局标志）。
  - e.如果第二个参数是字符串，那么还可以使用一些特殊的字符序列，将正则表达式操作得到的值插入到结果字符串中。
- --

> 更具体的用法见`RegExp`的相关章节。

##### 5.4.8 字符串变数组

1).**`string.split(delimiter[,limit])`**

基于指定的分隔符将一个字符串分割成多个子字符串，并将结果放到一个数组中

- --
- 返回值：返回一个字符串组成的数组（不包含分割文本，有捕获组的正则表达式这个情况）
- 参数类型：字符串/RegExp对象,数值；
- 参数：
  - a.不传参数，则默认将变成一个字符串数组；
  - b.若分隔符不匹配，也是整体变成字符串；
  - c.若分隔符出现在开头或结尾，则返回的数组的第一项或最后一项是空字符
  - d.若分隔符是`""`或者匹配空字符的正则，会将字符串的每一项拆分成数组的一项，返回的数组具有与`string`一样长度的（只是在没有指定更小`limit`的情况下，注意这是一个特例，因为第一个字符之前后最后一个字符之后的空字符不匹配）
  - e.可以接受可选的第二个参数，用于指定返回数组的大小，确保返回的数组不会超过既定大小；没有指定，则将切分整个字符串；
  - f.如果第二个参数是包含圆括号的正则表达式，则匹配这些圆括号表达式的子串将包含在返回的数组中。
- --

```javascript
var s="s1,s2,s3";
console.log(s.split());//["s1,s2,s3"]
console.log(s.split(" "));//["s1,s2,s3"]
console.log(s.split(","));//["s1", "s2", "s3"]
console.log(s.split(/s/));//["", "1,", "2,", "3"]
console.log(s.split(""));//["s", "1", ",", "s", "2", ",", "s", "3"]
```

> 对`split()`中正则的支持因浏览器而异。尽管对于简单模式没有声明差别，但对于未发现匹配项以及带有捕获组的模式，匹配的行为就大相径庭了。差别如下：
> IE8及之前版本会忽略捕获组。ECMCA-262规定应该把捕获组的内容拼接到结果数组中。IE能正确地在结果中包含捕获组；
> Firefox3.6及之前版本在捕获组为捕获到匹配项时，会在结果中包含空字符；ECMCA-262规定没有匹配项的捕获组在结果数组中应该用`undefined`表示；

##### 5.4.9 字符串比较

1).`string.localeCompare(target)`

根据本地默认的排序比较两个字符串（逐个比较），

- --
- 返回值：
  - 如果`target`中的字符排在`string`字符串之前，则返回一个负数（大多数情况下是-1，具体值看具体情况）；
  - 如果等于，返回0；
  - 如果排在后面，则返回正数（大多数情况下是1，具体值看具体情况）；
- 参数类型：字符串
- 参数：一个
- --

方法的最大特点，就是会考虑自然语言的顺序。举例来说，正常情况下，大写的英文字母小于小写字母。因为 JavaScript 采用的是 `Unicode` 码点比较，B的码点是66，而a的码点是9。但是，`localeCompare`方法会考虑自然语言的排序情况，将B排在a的前面。

`localeCompare`还可以有第二个参数，指定所使用的语言（默认是英语），然后根据该语言的规则进行比较。

##### 5.4.10 ES6新方法

1).**`string.includes(string)`**

判断某个字符或子字符串在不在某个字符串中

- --
- 返回值:true/false, 有就是true,没有就是false;
- 参数类型：`string`（非字符类型被强制转换为字符）
- 参数：一个
  - a.输入多个参数不报错，但只有第一个参数有效；
  - b.不传参数则无法匹配，就会返回false；
- --

2).**`string.repeat(n)` ** 重复字符

将字符串重复n次

- --
- 返回值:重复后的新字符串;
- 参数类型：非负数值
- 参数：只有一个参数
  - a.若参数是小数:只取整数部分（即向下取整）
  - b.若参数是负数，则报错
- --

3).`扩展运算符（...）`

扩展运算符；在字符中的作用类似`split()`

- --
- 返回值：
  - a.单个字符串，没有中括号的情况下产生一连串的单字符串；
  - b.若有中括号，会将单字符串放进一个数组返回；用小括号包裹会报错
- --

```javascript
var str="meih";
console.log(...str);//m e i h
console.log(...str+"a");//m e i h a
console.log([...str]);//["m", "e", "i", "h"]

//可以将类数组转换为数组；
function f1(){
    console.log([...arguments]);
};
f1(1,2,3,4);//[1, 2, 3, 4]
```

### 6.Math对象

ECMAScript为数学公式和信息提供了一个公共位置，即Math对象。该对象不是构造函数，不能生成实例，所有的属性和方法都必须在Math对象上调用。

#### 6.1.静态属性

|属性|说明|
|:--:|:--:|
|Math.E|自然对数的底数|
|Math.LN10|10的自然对数|
|Math.LN2|2的自然对数|
|Math.LOG2E|以2位底e的对数|
|Math.LOG10E|以10为e底的对数|
|Math.PI|π的值|
|Math.SQRT2|(2)平方根|

> 属性都是大写并且是只读的，**存储值**

#### 6.2.静态方法

- --
- `Math.abs()`：绝对值
- `Math.ceil()`：向上取整
- `Math.floor()`：向下取整
- `Math.max()`：最大值
- `Math.min()`：最小值
- `Math.pow()`：指数运算
- `Math.sqrt()`：平方根
- `Math.log()`：自然对数
- `Math.exp()`：自然指数
- `Math.round()`：四舍五入
- `Math.randow()`：随机数
- --

##### 6.2.1 Math.abs

返回参数的绝对值

##### 6.2.2 Math.min 和 Math.max

用于返回一组数中的最大值或最小值，可以接收任意多的数值参数。如果参数为空, `Math.min`返回`Infinity`, `Math.max`返回`-Infinity`。

```javascript
// 若要找到数组中的最大/最小值，可以使用apply()方法
//关键在于，把Math对象作为apply（）的第一个参数，正确的设置this，然后，可以将任何数组当做第二个参数；

var values = [1, 3, 2, 6, 12];
var max = Math.max.apply(Math, values);
console.log(max);//12

var min = Math.min.apply(Math, values);
console.log(min);//1
```

##### 6.2.3 取整方法

1).`Math.ceil()`  执行向上舍入
2).`Math.floor()`  执行向下舍入
3).`Math.round()`  执行标准舍入

> `Math.round()`对于`-n.5`一律取值为`-n`;

##### 6.2.4 Math.random

1).`Math.random()`，返回一个大于等于0，小于1的伪随机数。

2).`Math.random()*(m-n)+n`，获得n到m之间的伪随机数（小数）；

3).`Math.floor(Math.randow()*(max-min+1))+min;` 任意范围随机整数

##### 6.2.5 Math.pow

返回以第一个参数为底数、第二个参数为幂的指数值。

##### 6.2.6 Math.sqrt

返回参数值的平方根。如果参数是一个负值，则返回`NaN`。

##### 6.2.7 Math.log

返回以e为底的自然对数值。

如果要计算以10为底的对数，可以先用`Math.log`求出自然对数，然后除以`Math.LN10`；求以2为底的对数，可以除以`Math.LN2`。

##### 6.2.8 Math.exp

返回常数e的参数次方。

##### 6.2.10 三角函数方法

Math对象还提供一系列三角函数方法。

- --
- `Math.sin()`：返回参数的正弦（参数为弧度值）
- `Math.cos()`：返回参数的余弦（参数为弧度值）
- `Math.tan()`：返回参数的正切（参数为弧度值）
- `Math.asin()`：返回参数的反正弦（返回值为弧度值）
- `Math.acos()`：返回参数的反余弦（返回值为弧度值）
- `Math.atan()`：返回参数的反正切（返回值为弧度值）
- --

> 注意，方法都是小写；

### 7.Date对象

ECMAScript中的`Date`类型是在早期Java中的`java.util.Date`类基础上构建的。为此，`Date`类型使用自UTC（*Coordinated Universal Time*，国际协调时间）1970年1月1日午夜（零时）开始经过的毫秒数来保存日期。在使用这种数据储存格式的条件下，`Date`类型保存的日期能精确到1970年1月1日之前或之后的 100 000 000 年。

#### 7.1.普通函数的用法

`Date`对象可以作为普通函数直接调用，返回一个代表当前时间的字符串。

```javascript
Date()
// Sat May 26 2018 12:00:51 GMT+0800 (中国标准时间)
```

注意，即使带有参数，`Date`作为普通函数使用时，返回的还是当前时间。

```javascript
Date(2000, 1, 1)
// Sat May 26 2018 12:00:51 GMT+0800 (中国标准时间)
```

#### 7.2.构造函数的用法

在调用`Date`构造函数时，不传递参数，新创建的对象自动获得当前日期和时间；若想根据特定的时间或日期创建日期对象，必须传入表示该日期的毫秒数（即从1970年1月1日午夜起至该日期经过的毫秒数）。

```javascript
var now= new Date();
console.log(now);
//Sat Mar 03 2018 22:28:29 GMT+0800 (中国标准时间)
```

`Date`实例有一个独特的地方。其他对象求值的时候，都是默认调用`.valueOf()`方法，但是`Date`实例求值的时候，默认调用的是`toString()`方法。这导致对`Date`实例求值，返回的是一个字符串，代表该实例对应的时间。

关于Date构造函数的参数，有几点说明。

第一点，参数可以是负整数，代表1970年元旦之前的时间。
第二点，只要是能被`Date.parse()`方法解析的字符串，都可以当作参数。

```javascript
new Date('2013-2-15')
new Date('2013/2/15')
new Date('02/15/2013')
new Date('2013-FEB-15')
new Date('FEB, 15, 2013')
new Date('FEB 15, 2013')
new Date('Feberuary, 15, 2013')
new Date('Feberuary 15, 2013')
new Date('15 Feb 2013')
new Date('15, Feberuary, 2013')
// Fri Feb 15 2013 00:00:00 GMT+0800 (CST)
```

第三，参数为年、月、日等多个整数时，年和月是不能省略的，其他参数都可以省略的。也就是说，这时至少需要两个参数，因为如果只使用“年”这一个参数，Date会将其解释为毫秒数。

最后，各个参数的取值范围如下。

- --
- 年：使用四位数年份，比如2000。如果写成两位数或个位数，则加上1900，即10代表1910年。如果是负数，表示公元前。
- 月：0表示一月，依次类推，11表示12月。
- 日：1到31。
- 小时：0到23。
- 分钟：0到59。
- 秒：0到59
- 毫秒：0到999。
- --

> 注意，月份从0开始计算，但是，天数从1开始计算。另外，除了日期的默认值为1，小时、分钟、秒钟和毫秒的默认值都是0。

这些参数如果超出了正常范围，会被自动折算。比如，如果月设为15，就折算为下一年的4月。

> 参数还可以使用负数，表示过去的时间。

#### 7.3.日期的运算

类型自动转换时，`Date`实例如果转为数值，则等于对应的毫秒数；如果转为字符串，则等于对应的日期字符串。所以，两个日期实例对象进行减法运算时，返回的是它们间隔的毫秒数；进行加法运算时，返回的是两个字符串连接而成的新字符串。

```javascript
var d1 = new Date(2000, 2, 1);
var d2 = new Date(2000, 3, 1);

d2 - d1
// 2678400000
d2 + d1
// "Sat Apr 01 2000 00:00:00 GMT+0800 (CST)Wed Mar 01 2000 00:00:00 GMT+0800 (CST)"
```

#### 7.4.静态方法

##### 7.4.1 Date.now

`Date.now`方法返回当前时间距离时间零点（1970年1月1日 00:00:00 UTC）的毫秒数，相当于 Unix 时间戳乘以1000。

> 对于不支持`Date.now()`方法的浏览器，可以使用`+`操作符获取`Date`对象的时间戳，也可以达到同样的目的。

```javascript
var start = +new Date();
var startO = new Date();
start; //1527307494273
startO; //2018-05-26T04:04:54.273Z
```

##### 7.4.2 Date.parse

`Date.parse`方法用来解析日期字符串，返回该时间距离时间零点（1970年1月1日 00:00:00）的毫秒数。

日期字符串应该符合 RFC 2822 和 ISO 8061 这两个标准，即 `YYYY-MM-DDTHH:mm:ss.sssZ` 格式，其中最后的 `Z` 表示时区。但是，其他格式也可以被解析，请看下面的例子。

```javascript
Date.parse('Aug 9, 1995')
Date.parse('January 26, 2011 13:51:50')
Date.parse('Mon, 25 Dec 1995 13:30:00 GMT')
Date.parse('Mon, 25 Dec 1995 13:30:00 +0430')
Date.parse('2011-10-10')
Date.parse('2011-10-10T14:48:00')
```

如果解析失败，返回`NaN`。

> 注意日期对象及其在不同浏览器中的实现不同。其中一种倾向是将超出范围的值替换成当前值，以便输出。例如，在解析“January 32,2007”时，有的的浏览器会将其解释为“February 1,2007”。而Opera则倾向于插入当前月份的当前日期，返回“January 当前日期,2007”。目前，对于超出范围的均返回`Invalid Date`（2018/3/3）。

##### 7.4.3 Date.UTC

`Date.UTC`方法接受年、月、日等变量作为参数，返回该时间距离时间零点（1970年1月1日 00:00:00 UTC）的毫秒数。

```javascript
// 格式
Date.UTC(year, month[, date[, hrs[, min[, sec[, ms]]]]])

// 用法
Date.UTC(2011, 0, 1, 2, 3, 4, 567)
// 1293847384567
```

该方法的参数用法与`Date`构造函数完全一致，比如月从0开始计算，日期从1开始计算。区别在于`Date.UTC`方法的参数，会被解释为 UTC 时间（世界标准时间），`Date`构造函数的参数会被解释为当前时区的时间。

> `Date`构造函数也可以直接接受`Date.UTC()`的参数，但是其日期和时间都是基于本地时区而非GMT来创建。因此，若第一个参数是数值，`Date`构造函数就会假设该值是日期中的年份，余下参数以此类推。

#### 7.5.实例方法

与其他引用类型一样，`Date`类型也重写了`toLocaleString()`,`toString()`和`valueOf()`方法。`Date`类型的`toLocaleString()`会按照与浏览器设置的地区相适应的格式返回日期和时间。这大致意味着时间格式中包含着AM或PM，但不会包含时区信息。而`toString()`方法通常返回带有时区信息的日期和时间，其中时间一般以军用时间（0-23）表示。

```javascript
//chrome:
var day = new Date();
console.log(day.toLocaleString());
//2018/5/26 下午2:20:03
console.log(day.toString());
//Sat May 26 2018 14:20:03 GMT+0800 (中国标准时间)
console.log(day.valueOf());
//1527315603560
```

> 这两中方法在不同的浏览器上的格式可谓大相径庭。实际上，这两者的差别仅在调试代码时比较有用。

至于`Date`类型的`valueOf()`方法，不返回字符串，而是返回日期的毫秒数。因此，可以比较方便的使用比较操作符来比较日期。

```javascript
var da1=new Date(2007,0,1);
var da2=new Date(2007,1,1);
console.log(da1 < da2);//true
```

#### 7.6.日期格式化方法

##### 7.6.1 `toDateString()`

以特定于实现的格式显示周几，月，日，年

##### 7.6.2 `toTimeString()`

以特定于实现的格式显示时，分，秒，时区

##### 7.6.3 `toLocaleDateString()`

以特定于地区的格式显示周几，月，日，年

##### 7.6.4 `toLocaleTimeString()`

以特定于地区的格式显示时，分，秒

##### 7.6.5 `toUTCString()`

以特定于实现的格式显示完整的UTC日期

> 以上方法因浏览器而异。

```javascript
var yk=new Date();
console.log(yk.toDateString());//Sat Mar 03 2018
console.log(yk.toTimeString());//23:53:53 GMT+0800 (中国标准时间)
console.log(yk.toLocaleDateString());//2018/3/3
console.log(yk.toLocaleTimeString());//下午11:53:53
console.log(yk.toUTCString());//Sat, 03 Mar 2018 15:53:53 GMT
```