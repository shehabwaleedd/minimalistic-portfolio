import { ReactNode } from 'react';
export type CursorProps = {
    /** Enable cursor blinking animation */
    cursorBlinking?: boolean;
    /** Change cursor style */
    cursorStyle?: ReactNode;
    /** Change cursor color */
    cursorColor?: string;
};
export declare const Cursor: import("react").MemoExoticComponent<({ cursorBlinking, cursorStyle, cursorColor }: CursorProps) => JSX.Element>;
