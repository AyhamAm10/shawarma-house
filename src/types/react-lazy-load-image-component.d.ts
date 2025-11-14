declare module 'react-lazy-load-image-component' {
  import { ComponentType, ImgHTMLAttributes } from 'react';

  export const LazyLoadImage: ComponentType<ImgHTMLAttributes<HTMLImageElement> & { effect?: 'blur' | 'opacity' }>;
}
