// 与call方法的实现思路相同，只有参数处理不同

Function.prototype.myApply = function (o, arr) {
  const fn = this; // 获取被调用的目标函数
  let context = o || window;

  context.fn = fn;

  const res = context.fn(...arr);

  delete context.fn;

  return res;
};

export default Function

const obj = {
  value: 2,
};

function fn(a, b) {
  return this.value + a + b;
}

const r = fn.apply(obj, [1, 2]);

console.log(r)
