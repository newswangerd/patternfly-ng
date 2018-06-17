import { DoCheck, ElementRef, EventEmitter, OnInit, TemplateRef } from '@angular/core';
import { ListBase } from '../list-base';
import { ListConfig } from './list-config';
/**
 * List component
 *
 * For items, use a template named itemTemplate to contain content for each item. For each item in the items array, the
 * expansion can be disabled by setting disabled to true on the item. If using actions, use a template named
 * actionTemplate to contain expandable content for the actions of each item. If using expand items, use a template
 * named itemExpandedTemplate to contain expandable content for each item.
 *
 * Cannot use both multi-select and double click selection at the same time
 * Cannot use both checkbox and click selection at the same time
 *
 * Unique IDs are generated for each list item, which can be overridden by providing an id for the pfng-list tag.
 *
 * Usage:
 * <br/><code>import { BasicListModule } from 'patternfly-ng/list';</code>
 *
 * Or:
 * <br/><code>import { BasicListModule } from 'patternfly-ng';</code>
 */
export declare class ListComponent extends ListBase implements DoCheck, OnInit {
    private el;
    /**
     * The name of the template containing action heading layout
     */
    actionHeadingTemplate: TemplateRef<any>;
    /**
     * The list config containing component properties
     */
    config: ListConfig;
    /**
     * The name of the template used to contain expandable content for each item
     */
    expandTemplate: TemplateRef<any>;
    /**
     * The name of the template containing item heading layout
     */
    itemHeadingTemplate: TemplateRef<any>;
    /**
     * The event emitted when an item pin has been changed
     */
    onPinChange: EventEmitter<{}>;
    private defaultConfig;
    private id;
    private prevConfig;
    /**
     * The default constructor
     */
    constructor(el: ElementRef);
    /**
     * Setup component configuration upon initialization
     */
    ngOnInit(): void;
    /**
     * Check if the component config has changed
     */
    ngDoCheck(): void;
    /**
     * Set up default config
     */
    protected setupConfig(): void;
    /**
     * Return component config
     *
     * @returns {} ListConfig The component config
     */
    protected getConfig(): ListConfig;
    /**
     * Return an ID for the given element prefix and index (e.g., 'pfng-list1-item0')
     *
     * Note: The ID prefix can be overridden by providing an id for the pfng-list tag.
     *
     * @param {string} suffix The element suffix (e.g., 'item')
     * @param {number} index The current item index
     * @returns {string}
     */
    protected getId(suffix: string, index: number): string;
    private closeExpandArea(item);
    /**
     * Toggles the list item expansion
     *
     * @param {MouseEvent} $event The event emitted when an item has been clicked
     * @param {Object} item The object associated with the current row
     */
    private toggleExpandArea($event, item);
    private togglePin($event, item);
}