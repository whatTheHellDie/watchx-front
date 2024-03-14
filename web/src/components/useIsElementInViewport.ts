import { useState, useEffect, useRef } from 'react';

// 自定义Hook用于检测元素是否在视口中
function useIsElementInViewport() {
  const [isElementVisible, setIsElementVisible] = useState(false);

  // 创建一个ref来引用要检查的元素
  const elementRef: any = useRef();

  useEffect(() => {
    function handleScroll() {
      const element: any = elementRef.current;
      if (element) {
        const elementRect = element.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        // 判断元素是否与视口相交（即刚碰到元素）
        const isIntersecting =
          elementRect.top <= windowHeight && elementRect.bottom >= 0;

        setIsElementVisible(isIntersecting);
      }
    }

    // 监听滚动事件
    window.addEventListener('scroll', handleScroll);

    // 在组件卸载时取消滚动事件监听
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // 传递空数组以确保只在组件加载和卸载时运行一次

  return [elementRef, isElementVisible, setIsElementVisible];
}

export default useIsElementInViewport;
