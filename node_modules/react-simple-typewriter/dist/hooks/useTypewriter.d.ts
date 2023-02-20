export type TypewriterProps = {
    /** Callback Function that is triggered when loops are completed. available if loop is > `0` */
    onLoopDone?: () => void;
    /** Callback Function that is triggered while typing with `typed` words count passed */
    onType?: (count: number) => void;
    /** Callback Function that is triggered while deleting */
    onDelete?: () => void;
    /** Callback Function that is triggered on typing delay */
    onDelay?: () => void;
    /** Array of strings holding the words */
    words: string[];
    /** Control how many times to run. `0 | false` to run infinitely */
    loop?: number | boolean;
    /** Character typing speed in Milliseconds */
    typeSpeed?: number;
    /** Character deleting speed in Milliseconds */
    deleteSpeed?: number;
    /** Delay time between the words in Milliseconds */
    delaySpeed?: number;
};
export type TypewriterHelper = {
    /** `true` if currently typing */
    isType: boolean;
    /** `true` if on delay */
    isDelay: boolean;
    /** `true` if currently deleting */
    isDelete: boolean;
    /** `true` if all loops are done */
    isDone: boolean;
};
export declare const useTypewriter: ({ words, loop, typeSpeed, deleteSpeed, delaySpeed, onLoopDone, onType, onDelete, onDelay }: TypewriterProps) => [string, TypewriterHelper];
