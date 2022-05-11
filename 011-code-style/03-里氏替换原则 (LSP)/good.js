/*
 * @Description:
 * @Author: alysalu@tencent.com
 * @Date: 2022-02-26 18:41:59
 */

class Sharp {
  setColor(color) {
    console.log('color :>> ', color);
  }

  render(area) {
    console.log('area :>> ', area);
  }
}
class Rectangle extends Sharp {
  constructor(width = 0, height = 0) {
    super();
    this.width = width;
    this.height = height;
  }
  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Sharp {
  constructor(length = 0) {
    super();
    this.length = length;
  }
  setLength(length) {
    this.length = length;
  }
  getArea() {
    return this.length * this.length;
  }
}

function renderLargeRectangles(rectangles) {
  rectangles.forEach((rectangle) => {
    const area = rectangle.getArea(); // BAD: Returns 25 for Square. Should be 20.
    rectangle.render(area);
  });
}

const rectangles = [new Rectangle(5, 4), new Rectangle(5, 4), new Square(5)];
renderLargeRectangles(rectangles);
