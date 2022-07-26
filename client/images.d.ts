/// <reference types="react-scripts" />

declare module "*.svg" {
  const content: any;
  export default content;
}

interface StaticImageData {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
}

type Imgs = string || StaticImageData;

declare module "*.png" {
  const content: Imgs;
  export default content;
}

declare module "*.jpg" {
  const content: Imgs;
  export default content;
}

declare module "*.jpeg" {
  const content: Imgs;
  export default content;
}

declare module "*.gif" {
  const content: Imgs;
  export default content;
}

declare module "*.webp" {
  const content: Imgs;
  export default content;
}

declare module "*.ico" {
  const content: Imgs;
  export default content;
}

declare module "*.bmp" {
  const content: Imgs;
  export default content;
}
