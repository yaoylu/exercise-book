/*
 * @Description:
 * @Author: alysalu@tencent.com
 * @Date: 2022-02-26 19:11:14
 */
class DOMTraverser {
  constructor(settings) {
    this.settings = settings;
    this.setup();
  }

  setup() {
    this.rootNode = this.settings.rootNode;
    this.settings.animationModule.setup();
  }

  traverse() {
    // ...
  }
}

const $ = new DOMTraverser({
  rootNode: document.getElementsByTagName('body'),
  animationModule() {}, // Most of the time, we won't need to animate when traversing.
  // ...
});
