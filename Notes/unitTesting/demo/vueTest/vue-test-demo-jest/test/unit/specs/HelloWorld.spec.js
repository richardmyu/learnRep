import Vue from "vue";
import HelloWorld from "@/components/HelloWorld";

xdescribe("HelloWorld.vue", () => {
  it("should render correct contents", () => {
    const Constructor = Vue.extend(HelloWorld);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector(".hello h1").textContent).toEqual(
      "Welcome to Your Vue.js App"
    );
  });

  // test jasmine
  // toBe：基本类型判断 ===
  it("toBe and .not.toBe", () => {
    expect(1).toBe(1);
    // expect(1).toBe('1');
    expect("a").not.toBe("b");
    expect(true).toBe(true);
    // expect({}).toBe({});
    // expect({ name: 'ok' }).toBe({ name: 'ok' });
  });

  // toEqual: toEqual 有两种用法，对于基本的类型，toEqual 相当于 toBe
  it("toEqual and not.toEqual for basic types", function() {
    expect(1).toEqual(1);
    // expect(1).toEqual('1');
    expect("a").not.toEqual("b");
  });

  // toEqual 还可以用来判断对象
  it("toEqual and not.toEqual for obj", () => {
    let obj1 = { name: "jack", age: 12 };
    let obj2 = { name: "jack", age: 12 };
    let obj3 = { name: "tom", age: 13 };
    let obj4 = {};
    let obj5 = {};
    let obj6 = obj2;

    let ary1 = [1];
    let ary2 = [1];
    let ary3 = [2];
    let ary4 = [];
    let ary5 = [];
    let ary6 = ary2;

    let f1 = function() {
      return "1";
    };
    let f2 = function() {
      return "1";
    };
    let f3 = function() {
      return "3";
    };
    let f4 = function() {};
    let f5 = function() {};
    let f6 = f2;

    function fn1() {
      return "1";
    }

    function fn2() {
      return "1";
    }

    function fn3() {
      return "3";
    }

    function fn4() {}

    function fn5() {}

    expect(obj1).toEqual(obj2);
    expect(obj1).not.toEqual(obj3);
    expect(obj4).toEqual(obj5);
    expect(obj2).toEqual(obj6);

    expect(ary1).toEqual(ary2);
    expect(ary1).not.toEqual(ary3);
    expect(ary4).toEqual(ary5);
    expect(ary2).toEqual(ary6);

    expect(f1).not.toEqual(f2);
    expect(f1).not.toEqual(f3);
    expect(f4).not.toEqual(f5);
    expect(f2).toEqual(f6);

    expect(fn1).not.toEqual(fn2);
    expect(fn1).not.toEqual(fn3);
    expect(fn4).not.toEqual(fn5);
  });

  // toMatch: 使用正则表达式判断
  it("toMatch and not.toMatch", () => {
    let str = "Michael Jackson";
    expect(str).toMatch(/michael/i);
    expect(str).not.toMatch(/michael/);
    expect(str).not.toMatch(/tom/i);
  });

  // toBeDefine: 判断是否是 undefined
  // 注释：解释未是否定义更合理吧
  // .toBeDefined() ---> true（已定义） ---> 不是 undefined
  // .not.toBeDefined() ---> false（未定义） ---> 是 undefined
  it("toBeDefine and not.toBeDefine", () => {
    let student = {
      name: "Jack",
      age: 12
    };
    let b = 2;
    let c;
    function fn() {}

    expect(student.name).toBeDefined();
    expect(student.gender).not.toBeDefined();
    // expect(a).not.toBeDefined();
    expect(window.a).not.toBeDefined();
    expect(b).toBeDefined();
    expect(window.b).not.toBeDefined();
    expect(c).not.toBeDefined();
    expect(fn).toBeDefined();
  });

  // toBeUndefined: 判断是否是undefined
  it("toBeUndefined and not.toBeUndefined", () => {
    let student = {
      name: "jack",
      age: 12
    };
    let b = 2;
    let c;
    function fn() {}

    expect(student.gender).toBeUndefined();
    expect(student.name).not.toBeUndefined();
    // expect(a).toBeUndefined();
    expect(window.a).toBeUndefined();
    expect(b).not.toBeUndefined();
    expect(window.b).toBeUndefined();
    expect(c).toBeUndefined();
    expect(fn).not.toBeUndefined();
    expect(undefined).toBeUndefined();
  });

  // toBeNull：判断是否是 null
  it("toBeNull and not.toBeNull", () => {
    let student = {
      name: "jack",
      age: 12,
      desk: null
    };
    let b = null;
    let c;
    function fn() {}

    expect(student.desk).toBeNull();
    expect(student.name).not.toBeNull();

    // 这里报错，是因为传入的 a = undefined
    // expect(a).toBeNull();
    // 这里报错，是因为  a is not defined
    // expect(a).not.toBeNull();
    expect(window.a).not.toBeNull();

    expect(b).toBeNull();
    expect(window.b).not.toBeNull();

    expect(c).not.toBeNull();
    expect(fn).not.toBeNull();
    expect(null).toBeNull();
  });

  // toBeTruthy：判断是否能转换成 bool 型，判断的是否是 True
  it("toBeTruthy and not.toBeTruthy", () => {
    let str1;
    let str2 = "tom";
    expect(true).toBeTruthy();
    expect(str1).not.toBeTruthy();
    expect(str2).toBeTruthy();
    expect(undefined).not.toBeTruthy();
    expect(null).not.toBeTruthy();
    expect("").not.toBeTruthy();
    expect(false).not.toBeTruthy();
    expect(NaN).not.toBeTruthy();
    expect([]).toBeTruthy();
    expect({}).toBeTruthy();
  });

  //  toBeTruthy：判断是否能转换成 bool 型，判断的是否是 False
  it("toBeFalsy and not.toBeFalsy", () => {
    let str1;
    let str2 = "tom";
    expect(true).not.toBeFalsy();
    expect(str1).toBeFalsy();
    expect(str2).not.toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(null).toBeFalsy();
    expect("").toBeFalsy();
    expect(false).toBeFalsy();
    expect(NaN).toBeFalsy();
    expect([]).not.toBeFalsy();
    expect({}).not.toBeFalsy();
  });

  // toContain： 判断集合是否包含（可以是普通类型，和可以是对象）
  it("toContain and not.toContain", () => {
    let arrStr = ["jack", "tom", "mary"];
    let arrObj = [{ name: "jack", age: 21 }, { name: "tom", age: 22 }];
    let aryAry = [[1], [2], [3]];

    expect(arrStr).toContain("jack");
    expect(arrStr).not.toContain("Jack");
    // ??? 不能用于对象类型
    // expect(arrObj).toContain({ name: "jack", age: 21 });
    expect(arrObj).not.toContain({ name: "jack", age: 21 });
    expect(arrObj).not.toContain({ name: "Jack", age: 21 });

    // ??? Expected array  To contain value
    // expect(aryAry).toContain([1]);
    expect(aryAry).not.toContain([4]);
  });

  // toBeLessThan: 判断值类型的大小，结果若小则为 True
  it("toBeLessThan and not.toBeLessThan", () => {
    expect(1).toBeLessThan(1.1);
    // Received value must be a number.
    // expect("a").toBeLessThan("b");
  });

  //  toBeGreaterThan: 判断值类型的大小，结果若大则为 True，与 toBeLessThan 相反
  it("toBeGreaterThan and not.toBeGreaterThan", () => {
    expect(1).not.toBeGreaterThan(1.1);
    // Received value must be a number.
    // expect("b").toBeGreaterThan("a");
  });

  // toBeCloseTo：判断数字是否相似
  it("toBeCloseTo and not.toBeCloseTo", function() {
    var a = 1.1;
    var b = 1.5;
    var c = 1.455;
    var d = 1.459;

    // pass :Math.abs(expected-actual) < (Math.pow(10,-precision)/2)
    // 0.4 < 0.5
    expect(a).toBeCloseTo(b, 0);
    // 0.4 < 0.05
    expect(a).not.toBeCloseTo(b, 1);

    // 0.045 < 0.05
    expect(b).toBeCloseTo(c, 1);

    // 0.355 < 0.05
    expect(a).not.toBeCloseTo(c, 1);

    // 0.004 < 0.005
    expect(c).toBeCloseTo(d);

    // 0.004 < 0.0005
    expect(c).not.toBeCloseTo(d, 3);
  });

  // toThrow： 判断是否抛出异常
  it("toThrow and not.toThrow", () => {
    let foo = function() {
      return 1 + 2;
    };
    let bar = function() {
      return a + 1;
    };

    expect(foo).not.toThrow();
    expect(bar).toThrow();
  });

  // toThrowError: 判断是否抛出了指定的错误
  it("toThrowError and not.toThrowError", () => {
    let foo = function() {
      throw new TypeError("foo bar baz");
    };
    expect(foo).toThrowError("foo bar baz");
    expect(foo).toThrowError(/bar/);
    expect(foo).not.toThrowError(/bak/);
    expect(foo).toThrowError(TypeError);
    expect(foo).toThrowError(TypeError, "foo bar baz");
    expect(foo).toThrowError(TypeError, /bar/);
  });
});

// Setup 和 Teardown
var globalCount;
xdescribe("Setup and Teardown suite 1", function() {
  var suiteGlobalCount;
  var eachTestCount;

  beforeAll(function() {
    globalCount = 0; // 试试注释这行代码，看看对运行结果的影响
    suiteGlobalCount = 0;
    eachTestCount = 0;
  });

  afterAll(function() {
    // globalCount = 0; // 试试取消这行代码的注释，看看对运行结果的影响
    suiteGlobalCount = 0;
  });

  beforeEach(function() {
    globalCount++;
    suiteGlobalCount++;
    eachTestCount++;
  });

  afterEach(function() {
    eachTestCount = 0;
  });

  it("Spec 1", function() {
    expect(globalCount).toBe(1);
    expect(suiteGlobalCount).toBe(1);
    expect(eachTestCount).toBe(1);
  });

  it("Spec 2", function() {
    expect(globalCount).toBe(2);
    expect(suiteGlobalCount).toBe(2);
    expect(eachTestCount).toBe(1);
  });
});

xdescribe("Setup and Teardown suite 2", function() {
  beforeEach(function() {
    globalCount += 2;
  });

  it("Spec 1", function() {
    expect(globalCount).toBe(4);
  });
});

xdescribe("Test 'this'", function() {
  beforeEach(function() {
    this.testCount = 0;
    this.testCount++;
  });

  afterEach(function() {
    this.testCount = 0;
    //无论是否有这行，结果是一样的，因为 this 指定的变量只能在每个 spec 的 beforeEach/it/afterEach 过程中传递
  });

  it("Spec 1", function() {
    expect(this.testCount).toBe(1);
  });

  it("Spec 2", function() {
    expect(this.testCount).toBe(2);
  });
});

xdescribe("this 用法示例", function() {
  beforeEach(function() {
    this.foo = 0;
  });

  it("使用 this 共享状态", function() {
    expect(this.foo).not.toEqual(0);
    this.bar = "test pollution?";
  });

  it("下个 Spec 执行前 this 会被重置为空 Object", function() {
    expect(this.foo).not.toEqual(0);
    expect(this.foo).toBe(undefined);
    expect(this.foo).toBeUndefined();
    expect(this.bar).toBe(undefined);
  });
});

// xdescribe / xit
xdescribe("Test xdescribe", function() {
  it("Spec 1", function() {
    expect(1).toBe(1);
  });

  it("Spec 2", function() {
    expect(2).toBe(2);
  });
});

xdescribe("Test xit", function() {
  it("Spec 1", function() {
    expect(1).toBe(1);
  });

  xit("Spec 2", function() {
    expect(2).toBe(1);
  });

  xit("Spec 3", function() {
    expect(3).toBe(3);
  });
});

// spy
xdescribe("A spy", function() {
  let foo;
  let bar = null;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      }
    };

    spyOn(foo, "setBar"); // 在 foo 对象上添加 spy

    // 此时调用 foo 对象上的方法，均为模拟调用，因此不会执行实际的代码
    foo.setBar(123); // 调用 foo 的 setBar 方法
    foo.setBar(456, "another param");
  });

  it("tracks that the spy was called", function() {
    expect(foo.setBar).toHaveBeenCalled();
    //判断 foo 的 setBar 是否被调用
  });

  it("tracks all the arguments of its calls", function() {
    expect(foo.setBar).toHaveBeenCalledWith(123); //判断被调用时的参数
    expect(foo.setBar).toHaveBeenCalledWith(456, "another param");
  });

  it("stops all execution on a function", function() {
    expect(bar).toBeNull(); // 由于是模拟调用，因此 bar 值并没有改变
  });
});

xdescribe("A spy, when configured to call through", function() {
  var foo, bar, fetchedBar;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      },
      getBar: function() {
        return bar;
      }
    };

    // spyOn(foo, "setBar").and.callThrough();
    // spyOn(foo, "getBar").and.callThrough();
    // 与上例不同之处在于使用了 callThrough，这将时所有的函数调用为真实的执行

    // spyOn(foo, "setBar");
    spyOn(foo, "getBar");
    // 可以使用上例中的模拟方式，看看测试集执行的结果

    foo.setBar(123);
    fetchedBar = foo.getBar();
  });

  it("tracks that the spy was called", function() {
    // expect(foo.setBar).toHaveBeenCalled();
    expect(foo.getBar).toHaveBeenCalled();
  });

  it("should not effect other functions", function() {
    expect(bar).toEqual(123);
    // expect(bar).toBeUndefined();
    // 由于是真实调用，因此 bar 有了真实的值
  });

  it("when called returns the requested value", function() {
    // expect(fetchedBar).toEqual(123);
    expect(fetchedBar).toBeUndefined();
    // 由于是真实调用，fetchedBar 也有了真实的值
  });
});

// and.returnValue
xdescribe("A spy, when configured to fake a return value", function() {
  var foo, bar, fetchedBar;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      },
      getBar: function() {
        return bar;
      }
    };

    spyOn(foo, "getBar").and.returnValue(745);
    // 这将指定 getBar 方法返回值为 745

    foo.setBar(123);
    fetchedBar = foo.getBar();
  });

  it("tracks that the spy was called", function() {
    expect(foo.getBar).toHaveBeenCalled();
  });

  it("should not effect other functions", function() {
    expect(bar).toEqual(123);
  });

  it("when called returns the requested value", function() {
    expect(fetchedBar).toEqual(745);
  });
});

// and.callFake
xdescribe("A spy, when configured with an alternate implementation", function() {
  var foo, bar, fetchedBar;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      },
      getBar: function() {
        return bar;
      }
    };

    spyOn(foo, "getBar").and.callFake(function() {
      return 1001;
    });

    foo.setBar(123);
    fetchedBar = foo.getBar();
  });

  it("tracks that the spy was called", function() {
    expect(foo.getBar).toHaveBeenCalled();
  });

  it("should not effect other functions", function() {
    expect(bar).toEqual(123);
  });

  it("when called returns the requested value", function() {
    expect(fetchedBar).toEqual(1001);
  });
});

// and.throwError
xdescribe("A spy, when configured to throw an error", function() {
  var foo, bar;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      }
    };

    spyOn(foo, "setBar").and.throwError("quux");
  });

  it("throws the value", function() {
    expect(function() {
      foo.setBar(123);
    }).toThrowError("quux");
  });
});

// and.stub
xdescribe("A spy stub", function() {
  let foo;
  let bar = null;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      },
      getBar: function() {
        return bar;
      }
    };

    spyOn(foo, "setBar").and.callThrough(); // 标记1
    spyOn(foo, "getBar").and.returnValue(999); // 标记2
  });

  it("can call through and then stub in the same spec", function() {
    foo.setBar(123);
    console.log('111', bar, getValue);

    expect(bar).toEqual(123);

    var getValue = foo.getBar();
    expect(getValue).toEqual(999);

    console.log('222', bar, getValue);

    foo.setBar.and.stub();
    console.log('333-1', bar, getValue);
    // 相当于'标记1'中的代码变为了 spyOn(foo, 'setBar')
    // ??? 什么叫相当于
    // ??? 等价于去除 add.callThrough add.returnValue 的影响
    foo.getBar.and.stub();
    console.log('333-2', bar, getValue);
    // 相当于'标记2'中的代码变为了 spyOn(foo, 'getBar')
    bar = null;
    console.log('444', bar, getValue);

    foo.setBar(123);//模拟执行
    console.log('555', bar, getValue);
    expect(bar).toBe(null);
    expect(foo.setBar).toHaveBeenCalled();
    // 函数调用追踪并没有被重置 ???

    getValue = foo.getBar();//模拟执行
    console.log('666', bar, getValue);
    expect(getValue).toEqual(undefined);
    expect(foo.getBar).toHaveBeenCalled();
    // 函数调用追踪并没有被重置 ???
  });
});

// calls
xdescribe("A spy calls", function() {
  var foo,
    bar = null;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      }
    };

    spyOn(foo, "setBar");
  });

  it("tracks if it was called at all", function() {
    expect(foo.setBar.calls.any()).toEqual(false);
    foo.setBar();

    // 被 Spy 的函数一旦被调用过，则返回 true，否则为 false；
    expect(foo.setBar.calls.any()).toEqual(true);
  });

  it("tracks the number of times it was called", function() {
    expect(foo.setBar.calls.count()).toEqual(0);
    foo.setBar();
    foo.setBar();

    // 返回被 Spy 的函数的被调用次数
    expect(foo.setBar.calls.count()).toEqual(2);
  });

  it("tracks the arguments of each call", function() {
    foo.setBar(123);
    foo.setBar(456, "baz");

    // 返回被 Spy 的函数的调用参数，以 index 来指定参数
    expect(foo.setBar.calls.argsFor(0)).toEqual([123]);
    expect(foo.setBar.calls.argsFor(1)).toEqual([456, "baz"]);
  });

  it("tracks the arguments of all calls", function() {
    foo.setBar(123);
    foo.setBar(456, "baz");

    // 返回被 Spy 的函数的所有调用参数;
    expect(foo.setBar.calls.allArgs()).toEqual([[123], [456, "baz"]]);
  });

  it("can provide the context and arguments to all calls", function() {
    foo.setBar(123);

    // 返回 calls 的上下文，这将返回当前 calls 的整个实例数据
    // ???
    expect(foo.setBar.calls.all()).toEqual([
      { object: foo, args: [123], returnValue: undefined }
    ]);
  });

  it("has a shortcut to the most recent call", function() {
    foo.setBar(123);
    foo.setBar(456, "baz");

    // 返回 calls 中追踪的最近一次的请求数据
    expect(foo.setBar.calls.mostRecent()).toEqual({
      object: foo,
      args: [456, "baz"],
      returnValue: undefined
    });
  });

  it("has a shortcut to the first call", function() {
    foo.setBar(123);
    foo.setBar(456, "baz");

    // 返回 calls 中追踪的第一次请求的数据
    expect(foo.setBar.calls.first()).toEqual({
      object: foo,
      args: [123],
      returnValue: undefined
    });
  });

  it("tracks the context", function() {
    var spy = jasmine.createSpy("spy");
    var baz = {
      fn: spy
    };
    var quux = {
      fn: spy
    };
    baz.fn(123);
    quux.fn(456);

    // 当调用 all() ，mostRecent() ，first()方法时
    // 返回对象的 object 属性返回的是当前上下文对象
    // ???
    expect(spy.calls.first().object).toBe(baz);
    expect(spy.calls.mostRecent().object).toBe(quux);
  });

  it("can be reset", function() {
    foo.setBar(123);
    foo.setBar(456, "baz");
    expect(foo.setBar.calls.any()).toBe(true);

    // 重置 Spy 的所有追踪数据
    // 追踪失效
    foo.setBar.calls.reset();
    expect(foo.setBar.calls.any()).toBe(false);
  });
});

// createSpy
xdescribe("A spy, when created manually", function() {
  var whatAmI;

  beforeEach(function() {
    whatAmI = jasmine.createSpy("whatAmI");

    whatAmI("I", "am", "a", "spy");
  });

  it("is named, which helps in error reporting", function() {
    expect(whatAmI.and.identity()).toEqual("whatAmI");
  });

  it("tracks that the spy was called", function() {
    expect(whatAmI).toHaveBeenCalled();
  });

  it("tracks its number of calls", function() {
    expect(whatAmI.calls.count()).toEqual(1);
  });

  it("tracks all the arguments of its calls", function() {
    expect(whatAmI).toHaveBeenCalledWith("I", "am", "a", "spy");
  });

  it("allows access to the most recent call", function() {
    expect(whatAmI.calls.mostRecent().args[0]).toEqual("I");
    expect(whatAmI.calls.argsFor(0)).toEqual(["I", "am", "a", "spy"]);
    // expect(whatAmI.calls.argsFor(0).args[0]).toEqual('I')
  });
});

// createSpyObj
xdescribe("Multiple spies, when created manually", function() {
  var tape;

  beforeEach(function() {
    console.log(jasmine);

    // TypeError: jasmine.createSpyObj is not a function
    tape = jasmine.createSpyObj("tape", ["play", "pause", "stop", "rewind"]);
    console.log(tape);


    tape.play();
    tape.pause();
    tape.rewind(0);
  });

  it("creates spies for each requested function", function() {
    expect(tape.play).toBeDefined();
    expect(tape.pause).toBeDefined();
    expect(tape.stop).toBeDefined();
    expect(tape.rewind).toBeDefined();
  });

  it("tracks that the spies were called", function() {
    expect(tape.play).toHaveBeenCalled();
    expect(tape.pause).toHaveBeenCalled();
    expect(tape.rewind).toHaveBeenCalled();
    expect(tape.stop).not.toHaveBeenCalled();
  });

  it("tracks all the arguments of its calls", function() {
    expect(tape.rewind).toHaveBeenCalledWith(0);
  });
});

// jasmine.any
xdescribe("jasmine.any", function() {
  it("matches any value", function() {
    expect({}).toEqual(jasmine.any(Object));
    expect(12).toEqual(jasmine.any(Number));
    expect("12").toEqual(jasmine.any(String));
  });

  describe("when used with a spy", function() {
    it("is useful for comparing arguments", function() {
      var foo = jasmine.createSpy("foo");
      foo(12, function() {
        return true;
      });

      expect(foo).toHaveBeenCalledWith(
        jasmine.any(Number),
        jasmine.any(Function)
      );
    });
  });
});

// jasmine.anything
xdescribe("jasmine.anything", function() {
  it("matches anything", function() {
    expect(1).toEqual(jasmine.anything());
  });

  describe("when used with a spy", function() {
    it("is useful when the argument can be ignored", function() {
      var foo = jasmine.createSpy("foo");
      foo(12, function() {
        return false;
      });

      expect(foo).toHaveBeenCalledWith(12, jasmine.anything());
    });
  });
});

// jasmine.objectContaining
xdescribe("jasmine.objectContaining", function() {
  var foo;

  beforeEach(function() {
    foo = {
      a: 1,
      b: 2,
      bar: "baz"
    };
  });

  it("matches objects with the expect key/value pairs", function() {
    expect(foo).toEqual(
      jasmine.objectContaining({
        bar: "baz"
      })
    );
    expect(foo).not.toEqual(
      jasmine.objectContaining({
        c: 37
      })
    );
  });

  describe("when used with a spy", function() {
    it("is useful for comparing arguments", function() {
      var callback = jasmine.createSpy("callback");

      callback({
        bar: "baz"
      });

      expect(callback).toHaveBeenCalledWith(
        jasmine.objectContaining({
          bar: "baz"
        })
      );
      expect(callback).not.toHaveBeenCalledWith(
        jasmine.objectContaining({
          c: 37
        })
      );
    });
  });
});

// jasmine.arrayContaining
xdescribe("jasmine.arrayContaining", function() {
  var foo;

  beforeEach(function() {
    foo = [1, 2, 3, 4];
  });

  it("matches arrays with some of the values", function() {
    expect(foo).toEqual(jasmine.arrayContaining([3, 1]));
    // 直接在期望值中使用 jasmine.arrayContaining 达到目的
    expect(foo).not.toEqual(jasmine.arrayContaining([6]));
  });

  describe("when used with a spy", function() {
    it("is useful when comparing arguments", function() {
      var callback = jasmine.createSpy("callback");

      callback([1, 2, 3, 4]); // 将数组内容作为参数传入 Spy 中

      expect(callback).toHaveBeenCalledWith(jasmine.arrayContaining([4, 2, 3]));
      expect(callback).not.toHaveBeenCalledWith(
        jasmine.arrayContaining([5, 2])
      );
    });
  });
});

// jasmine.stringMatching
xdescribe("jasmine.stringMatching", function() {
  it("matches as a regexp", function() {
    expect({ foo: "bar" }).toEqual({ foo: jasmine.stringMatching(/^bar$/) });
    expect({ foo: "foobarbaz" }).toEqual({
      foo: jasmine.stringMatching("bar")
    });
  });

  describe("when used with a spy", function() {
    it("is useful for comparing arguments", function() {
      var callback = jasmine.createSpy("callback");

      callback("foobarbaz");

      expect(callback).toHaveBeenCalledWith(jasmine.stringMatching("bar"));
      expect(callback).not.toHaveBeenCalledWith(
        jasmine.stringMatching(/^bar$/)
      );
    });
  });
});

// asymmetricMatch
xdescribe("custom asymmetry", function() {
  var tester = {
    asymmetricMatch: function(actual) {
      var secondValue = actual.split(",")[1];
      return secondValue === "bar";
    }
  };

  it("dives in deep", function() {
    expect("foo,bar,baz,quux").toEqual(tester);
  });

  describe("when used with a spy", function() {
    it("is useful for comparing arguments", function() {
      var callback = jasmine.createSpy("callback");

      callback("foo,bar,baz");

      expect(callback).toHaveBeenCalledWith(tester);
    });
  });
});

// Jasmine Clock
xdescribe("Manually ticking the Jasmine Clock", function() {
  var timerCallback;

  beforeEach(function() {
    console.log(jasmine);

    timerCallback = jasmine.createSpy("timerCallback");
    // 开时间操作
    // jasmine.clock is not a function
    jasmine.clock().install();
  });

  afterEach(function() {
    // 关闭时间操作
    jasmine.clock().uninstall();
  });

  it("causes a timeout to be called synchronously", function() {
    setTimeout(function() {
      timerCallback();
    }, 100);

    expect(timerCallback).not.toHaveBeenCalled();

    // 时间
    jasmine.clock().tick(101);

    expect(timerCallback).toHaveBeenCalled();
  });

  it("causes an interval to be called synchronously", function() {
    setInterval(function() {
      timerCallback();
    }, 100);

    expect(timerCallback).not.toHaveBeenCalled();

    jasmine.clock().tick(101);
    expect(timerCallback.calls.count()).toEqual(1);

    jasmine.clock().tick(50);
    expect(timerCallback.calls.count()).toEqual(1);

    jasmine.clock().tick(50);
    expect(timerCallback.calls.count()).toEqual(2);
  });

  describe("Mocking the Date object", function() {
    it("mocks the Date object and sets it to a given time", function() {
      var baseTime = new Date(2013, 9, 23);

      jasmine.clock().mockDate(baseTime);

      jasmine.clock().tick(50);
      expect(new Date().getTime()).toEqual(baseTime.getTime() + 50);
    });
  });
});

xdescribe("Jasmine Clock 测试", function () {
  var timerCallback;

  beforeEach(function () {
    timerCallback = jasmine.createSpy("timerCallback");
    jasmine.clock().install();
  });

  afterEach(function () {
    jasmine.clock().uninstall();
  });

  it("同步触发setTimeout", function () {
    setTimeout(function () {
      timerCallback();
    }, 100);

    expect(timerCallback).not.toHaveBeenCalled();

    jasmine.clock().tick(101);

    expect(timerCallback).toHaveBeenCalled();
  });

  it("同步触发setInterval", function () {
    setInterval(function () {
      timerCallback();
    }, 100);

    expect(timerCallback).not.toHaveBeenCalled();

    jasmine.clock().tick(101);
    expect(timerCallback.calls.count()).toEqual(1);

    jasmine.clock().tick(50);
    expect(timerCallback.calls.count()).toEqual(1);

    jasmine.clock().tick(50);
    expect(timerCallback.calls.count()).toEqual(2);
  });
});

// 异步支持
describe("Asynchronous specs", function() {
  var value;

  beforeEach(function(done) {
    setTimeout(function() {
      value = 0;
      done();
    }, 10);
  });

  // 在上面 beforeEach 的 done() 被执行之前，这个测试用例不会被执行
  it("should support async execution of test preparation and expectations", function(done) {
    value++;
    expect(value).toBeGreaterThan(0);
    console.log('111');

    done(); // 执行完 done() 之后，该测试用例真正执行完成
    console.log('222');
  });

  // Jasmine 异步执行超时时间默认为 5 秒，超过后将报错 ？？？
  describe("long asynchronous specs", function() {
    // 如果要调整指定用例的默认的超时时间，可以在 beforeEach，it 和 afterEach 中传入一个时间参数
    beforeEach(function(done) {
      console.log('333');
      setTimeout(function() {}, 2000);
      // 可以试试如果该方法执行超过 1 秒时 js 会报错
      // 没有报错
      console.log('444');
      done();
      console.log('555');
    }, 2000);

    it("takes a long time", function(done) {
      setTimeout(function() {
        console.log('666');
        done();
        console.log('777');
      }, 9000);
    }, 10000);

    afterEach(function(done) {
      console.log('888');
      done();
      console.log('999');
    }, 2000);
  });
});

xdescribe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});

xdescribe("测试嵌套describe：level1", function () {
  var foo;

  beforeEach(function () {
    window.console.log("level1：Setup");
  });

  afterEach(function () {
    window.console.log("level1：Teardown");
  });

  it("level1：测试", function () {
    window.console.log("level1：测试");
  });

  describe("测试嵌套describe:level2", function () {
    beforeEach(function () {
      window.console.log("level2：Setup");
    });

    afterEach(function () {
      window.console.log("level2：Teardown");
    });

    it("level2：测试", function () {
      window.console.log("level2：测试");
    });
  });
});

xdescribe("Pending specs", function () {
  xit("can be declared 'xit'", function () {
    expect(true).toBe(false);
  });

  it("can be declared with 'it' but without a function");

  it("can be declared by calling 'pending' in the spec body", function () {
    expect(true).not.toBe(false);
    // 挂起
    // pending();
  });
});

// 自定义 Matcher
var customMatchers = {
  toBeGoofy: function (util, customEqualityTesters) {
    return {
      compare: function (actual, expected) {
        if (expected === undefined) {
          expected = "";
        }
        var result = {};
        // TypeError: Cannot read property 'equals' of null
        result.pass = util.equals(
          actual.hyuk,
          "gawrsh" + expected,
          customEqualityTesters
        );
        if (result.pass) {
          result.message = "通过了，通过了，通过了...";
        } else {
          result.message = "没通过，没通过，没通过...";
        }
        return result;
      }
    };
  }
};

xdescribe("测试自定义错误信息", function () {
  beforeEach(function () {
    jasmine.addMatchers(customMatchers);
  });

  it("这是个失败的测试", function () {
    expect({
      hyuk: "gawrsh"
    }).toBeGoofy(123);
  });
});

xdescribe("A spy, when configured to call through", function () {
  var foo, bar, fetchedBar;

  beforeEach(function () {
    foo = {
      setBar: function (value) {
        bar = value;
      },
      getBar: function () {
        return bar;
      }
    };

    spyOn(foo, 'getBar');

    foo.setBar(123);
    fetchedBar = foo.getBar();
  });

  it("tracks that the spy was called", function () {
    expect(foo.getBar).toHaveBeenCalled();
  });

  it("should not effect other functions", function () {
    expect(bar).toEqual(123);
  });

  it("when called returns the requested value", function () {
    expect(fetchedBar).not.toEqual(123);
  });
});
