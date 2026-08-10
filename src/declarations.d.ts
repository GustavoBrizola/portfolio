/**
 * This file solves most of importing files with especific extensions not showing properly
 * VS Code thinks this is a TypeScript based project. Probably because of React, but i'm not sure. 
 */

// Ensures any .css won't show error import during development
// Rather solves false warnings than do something useful
declare module "*.css" 
{
  const content: { [className: string]: string };
  export default content;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.pdf' {
  const value: string;
  export default value;
}