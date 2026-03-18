export const projectImages = [
  { src: '/projectsOptimized/pr1.avif', id: 'prImg1' },
  { src: '/projectsOptimized/pr2.avif', id: 'prImg2' },
  { src: '/projectsOptimized/pr3.avif', id: 'prImg3' },
  { src: '/projectsOptimized/pr4.avif', id: 'prImg4' },
  { src: '/projectsOptimized/pr5.avif', id: 'prImg5' },
  { src: '/projectsOptimized/pr6.avif', id: 'prImg6' },
  { src: '/projectsOptimized/pr7.avif', id: 'prImg7' },
  { src: '/projectsOptimized/pr8.avif', id: 'prImg8' },
  { src: '/projectsOptimized/pr9.avif', id: 'prImg9' },
  { src: '/projectsOptimized/pr10.avif', id: 'prImg10' },
  { src: '/projectsOptimized/pr11.avif', id: 'prImg11' },
  { src: '/projectsOptimized/pr12.avif', id: 'prImg12' },
] as const;

export type ProjectImage = (typeof projectImages)[number];
