import { HTMLAttributes, useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../common/theme';

interface ScrollProgressProps extends HTMLAttributes<HTMLDivElement> {
  width?: number;
  height?: number;
  bgcolor?: string;
  duration?: string;
}

function ScrollProgress({
  width = 0,
  height = 3,
  bgcolor = theme.palette.main.orange,
  duration = theme.transition.onScroll,
  ...props
}: ScrollProgressProps) {
  const [scrollTop, setScrollTop] = useState<number>();

  useEffect(() => {
    try {
      window.addEventListener('scroll', scrolling);
      window.addEventListener('resize', scrolling);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const scrolling = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (height > 0) {
      setScrollTop(scrolled);
    } else {
      setScrollTop(0);
    }
  };

  // useEffect(() => {
  //   console.log(scrollTop);
  // }, [scrollTop]);

  return (
    <Progress
      width={scrollTop ?? 0}
      height={height}
      bgcolor={bgcolor}
      duration={duration}
    ></Progress>
  );
}

export default ScrollProgress;

const Progress = styled.div<{
  width: number;
  height: number;
  bgcolor: string;
  duration: string;
}>`
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 99;
  background-color: ${({ bgcolor }) => bgcolor};
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}%`};
  transition: ${({ duration }) => theme.transition.onScroll};
`;
