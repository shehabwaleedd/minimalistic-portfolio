/// <reference types="react" />
import { TypewriterProps } from '../hooks/useTypewriter';
import { CursorProps } from './Cursor';
type ComponentProps = {
    /** Show / Hide the cursor */
    cursor?: boolean;
} & TypewriterProps & CursorProps;
/**
 * A Simple React Component for adding a nice Typewriter effect to your project.
 */
export declare const Typewriter: ({ words, loop, typeSpeed, deleteSpeed, delaySpeed, cursor, cursorStyle, cursorColor, cursorBlinking, onLoopDone, onType, onDelay, onDelete }: ComponentProps) => JSX.Element;
export {};
