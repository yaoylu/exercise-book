/*
 * @Description:
 * @Author: alysalu(alysalu@tencent.com)
 * @Date: 2022-03-30 11:32:20
 * @LastEditors: alysalu(alysalu@tencent.com)
 */
const element = {
  tagName: 'ul', // 节点标签名
  props: { // DOM的属性，用一个对象存储键值对
    id: 'list',
  },
  children: [ // 该节点的子节点
    { tagName: 'li', props: { class: 'item' }, children: ['Item 1'] },
    { tagName: 'li', props: { class: 'item' }, children: ['Item 2'] },
    { tagName: 'li', props: { class: 'item' }, children: ['Item 3'] },
  ],
};


function patch(oldVnode, vnode) {
  if (sameVnode(oldVnode, vnode)) {
    patchVnode(oldVnode, vnode);
  } else {
    const oEl = oldVnode.el;// 真实的dom
    const parentEle = document.parentNode(oEl);
    createEle(vnode);
    if (parentEle !== null) {
      document.insertBefore(parentEle, vnode.el, document.nextSibling(oEl));
      document.removeChild(parentEle, oEl);
      oldVnode = null;
    }
  }
  return vnode;
}
function sameVnode(a, b) {
  return (
    a.key === b.key // key
    && a.tag === b.tag // 标签名
    && a.isComment === b.isComment // 是否为注释节点
    && isDef(a.data) === isDef(b.data)// 是否都定义了一些具体信息. 例如onClick,style等
    && sameInputType(a, b)// 标签是input时，输入类型type要一致
  );
}
// 找到对应的真实dom，称为el
// 判断Vnode和oldVnode是否指向同一个对象，如果是，那么直接return
// 如果他们都有文本节点并且不相等，那么将el的文本节点设置为Vnode的文本节点。
// 如果oldVnode有子节点而Vnode没有，则删除el的子节点
// 如果oldVnode没有子节点而Vnode有，则将Vnode的子节点真实化之后添加到el
// 如果两者都有子节点，则执行updateChildren函数比较子节点，这一步很重要
// 其他几个点都很好理解，我们详细来讲一下updateChildren
function patchVnode(oldVnode, vnode) {
  const oEl = oldVnode.el;
  vnode.el = oEl;
  const i = 0;
  const oldCh = oldVnode.children;
  const ch = vnode.children;
  if (oldVnode === vnode) return;
  if (oldVnode.text !== null && vnode.text !== null && oldVnode.text != vnode.text) {
    api.setTextContent(oEl, vnode.text);
  } else {
    updateEle(oEl, vnode, oldVnode);
    if (oldCh && ch && oldCh !== ch) {
      updateChildren(oEl, oldCh, ch);
    } else if (ch) {
      createEle(vnode);
    } else if (oldCh) {
      api.removeChildren(oEl);
    }
  }
}
