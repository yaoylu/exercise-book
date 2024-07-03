document.addEventListener("DOMContentLoaded", function() {
    const flowers = document.getElementById('flowers');
    const numPetals = 5; // 设置花瓣数量
  
    for (let i = 0; i < numPetals; i++) {
      const petal = document.createElement('div');
      petal.className = 'petal';
      petal.style.left = `${Math.random() * 100}vw`; // 在页面宽度范围内随机位置生成花瓣
      petal.style.top = `${Math.random() * 50}vw`; // 在页面高度范围内随机位置生成花瓣
      petal.style.animationDuration = `${Math.random() * 10 + 3}s`; // 设置花瓣下落速度
      flowers.appendChild(petal);
    }
  });
  