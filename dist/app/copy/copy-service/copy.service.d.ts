/**
 * A generic service for copying text to clipboard
 *
 * Usage:
 * <br/><code>import { CopyService } from 'patternfly-ng/copy';</code>
 *
 * Or:
 * <br/><code>import { CopyService } from 'patternfly-ng';</code>
 */
export declare class CopyService {
    private dom;
    private verbose;
    /**
     * The default constructor
     */
    constructor(dom: any);
    /**
     * Copy a value to the user's system clipboard
     */
    copy(value: string): boolean;
    /**
     * Set the verbose mode to on or off (default). During the verbose mode, each unsuccessful copy operation
     * will be printed to the console.
     * @param verbose Set to true for verbose mode
     */
    setVerbose(verbose: boolean): void;
    /**
     * Handles an unsuccessful copy operation.
     * @param error The error message to display in the console.
     */
    private handleError(error);
}