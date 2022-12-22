import { MutableRefObject, useEffect, useRef, useState } from 'react';
import styles from '../../styles/FadeInElement.module.css'


export default function FadeInElement(props: any) {
  const [isVisible, setVisible] = useState(false);
  const domRef: MutableRefObject<any> = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  return (
    <div
      className={isVisible ? styles.fadeInSectionVisible : styles.fadeInSectionInvisible}
      style={props.style}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}