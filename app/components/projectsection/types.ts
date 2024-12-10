type TopBottom = "object-top" | "object-bottom" | "object-center";

export interface ThreeImage {
  src1: string;
  src2: string;
  src3: string;
}
export interface ThreePos {
  pos1: TopBottom;
  pos2: TopBottom;
  pos3: TopBottom;
}

export interface Project {
  name: string;
  description: string;
  link?: string;
  image: ThreeImage;
  position: ThreePos;
  bgColor: string;
}
