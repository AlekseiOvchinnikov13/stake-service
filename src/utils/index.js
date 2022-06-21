export const isBrowser = () => typeof window !== 'undefined';

const MobileWidth = '850';
export const isMobile = () => isBrowser() && window.innerWidth <= MobileWidth;