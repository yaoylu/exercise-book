// “简单版” 单例模式：
const Singleton = function (name) {
  this.name = name;
  this.instance = null;
};

Singleton.prototype.getName = function () {
  return this.name;
};

Singleton.getInstance = function (name) {
  if (this.instance) {
    return this.instance;
  }
  return this.instance = new Singleton(name);
};

const Winner = Singleton.getInstance('Winner');
const Looser = Singleton.getInstance('Looser');

console.log(Winner === Looser); // true
console.log(Winner.getName());  // 'Winner'
console.log(Looser.getName());  // 'Winner'

// “透明版” 单例模式：
// 实现 “透明版” 单例模式，意图解决：统一使用 new 操作符来获取单例对象，
// 而不是 Singleton.getInstance(...)。
const CreateSingleton = (function () {
  let instance;
  return function (name) {
    if (instance) {
      return instance;
    }
    this.name = name;
    return instance = this;
  };
}());
CreateSingleton.prototype.getName = function () {
  return this.name;
};

const Winner2 = new CreateSingleton('Winner');
const Looser2 = new CreateSingleton('Looser');

console.log(Winner2 === Looser2); // true
console.log(Winner2.getName());  // 'Winner'
console.log(Looser2.getName());  // 'Winner'

// “代理版“ 单例模式：
// 通过“代理”的形式，意图解决：将管理单例操作，
// 与对象创建操作进行拆分，实现更小的粒度划分，符合“单一职责原则”
const ProxyCreateSingleton = (function () {
  let instance;
  return function (name) {
    // 代理函数仅作管控单例
    if (instance) {
      return instance;
    }
    return instance = new Singleton(name);
  };
}());

// 独立的Singleton类，处理对象实例
const Singleton3 = function (name) {
  this.name = name;
};
Singleton3.prototype.getName = function () {
  return this.name;
};

const Winner3 = new ProxyCreateSingleton('Winner');
const Looser3 = new ProxyCreateSingleton('Looser');

console.log(Winner3 === Looser3); // true
console.log(Winner3.getName());  // 'Winner'
console.log(Looser3.getName());  // 'Winner'

// 惰性单例模式
// 惰性单例，意图解决：需要时才创建类实例对象。对于懒加载的性能优化，想必前端开发者并不陌生。惰性单例也是解决 “按需加载” 的问题。

// 需求：页面弹窗提示，多次调用，都只有一个弹窗对象，只是展示信息内容不同。

// 开发这样一个全局弹窗对象，我们可以应用单例模式。为了提升它的性能，我们可以让它在我们需要调用时再去生成实例，创建 DOM 节点。
const getSingleton = function (fn) {
  let result;
  return function () {
    return result || (result = fn.apply(this, arguments)); // 确定this上下文并传递参数
  };
};
const createAlertMessage = function (html) {
  const div = document.createElement('div');
  div.innerHTML = html;
  div.style.display = 'none';
  document.body.appendChild(div);
  return div;
};

const createSingleAlertMessage = getSingleton(createAlertMessage);
document.body.addEventListener('click', () =>  {
  // 多次点击只会产生一个弹窗
  const alertMessage = createSingleAlertMessage('您的知识需要付费充值！');
  alertMessage.style.display = 'block';
});


