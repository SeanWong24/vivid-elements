/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { UIColor } from "./global/ui-color";
export namespace Components {
    interface SBadge {
        "color": UIColor;
    }
    interface SButton {
        "fill": 'default' | 'outline' | 'clear';
    }
    interface SCard {
    }
    interface SCollapse {
        "isHidden": boolean;
    }
    interface SGrid {
        "columnGap": string;
        "columns": string;
        "rowGap": string;
        "rows": string;
    }
    interface SGridItem {
        "column": number;
        "columnSpan": number;
        "row": number;
        "rowSpan": number;
    }
    interface SInput {
        "placeholder": string;
        "value": string;
    }
    interface SPopover {
        "isHidden": boolean;
    }
    interface SSelect {
        "placeholder": string;
        "value": string;
    }
    interface SSelectOption {
        "isSelected": boolean;
        "value": string;
    }
    interface SToggle {
        "checked": boolean;
        "scale": number;
    }
    interface SUi {
    }
}
declare global {
    interface HTMLSBadgeElement extends Components.SBadge, HTMLStencilElement {
    }
    var HTMLSBadgeElement: {
        prototype: HTMLSBadgeElement;
        new (): HTMLSBadgeElement;
    };
    interface HTMLSButtonElement extends Components.SButton, HTMLStencilElement {
    }
    var HTMLSButtonElement: {
        prototype: HTMLSButtonElement;
        new (): HTMLSButtonElement;
    };
    interface HTMLSCardElement extends Components.SCard, HTMLStencilElement {
    }
    var HTMLSCardElement: {
        prototype: HTMLSCardElement;
        new (): HTMLSCardElement;
    };
    interface HTMLSCollapseElement extends Components.SCollapse, HTMLStencilElement {
    }
    var HTMLSCollapseElement: {
        prototype: HTMLSCollapseElement;
        new (): HTMLSCollapseElement;
    };
    interface HTMLSGridElement extends Components.SGrid, HTMLStencilElement {
    }
    var HTMLSGridElement: {
        prototype: HTMLSGridElement;
        new (): HTMLSGridElement;
    };
    interface HTMLSGridItemElement extends Components.SGridItem, HTMLStencilElement {
    }
    var HTMLSGridItemElement: {
        prototype: HTMLSGridItemElement;
        new (): HTMLSGridItemElement;
    };
    interface HTMLSInputElement extends Components.SInput, HTMLStencilElement {
    }
    var HTMLSInputElement: {
        prototype: HTMLSInputElement;
        new (): HTMLSInputElement;
    };
    interface HTMLSPopoverElement extends Components.SPopover, HTMLStencilElement {
    }
    var HTMLSPopoverElement: {
        prototype: HTMLSPopoverElement;
        new (): HTMLSPopoverElement;
    };
    interface HTMLSSelectElement extends Components.SSelect, HTMLStencilElement {
    }
    var HTMLSSelectElement: {
        prototype: HTMLSSelectElement;
        new (): HTMLSSelectElement;
    };
    interface HTMLSSelectOptionElement extends Components.SSelectOption, HTMLStencilElement {
    }
    var HTMLSSelectOptionElement: {
        prototype: HTMLSSelectOptionElement;
        new (): HTMLSSelectOptionElement;
    };
    interface HTMLSToggleElement extends Components.SToggle, HTMLStencilElement {
    }
    var HTMLSToggleElement: {
        prototype: HTMLSToggleElement;
        new (): HTMLSToggleElement;
    };
    interface HTMLSUiElement extends Components.SUi, HTMLStencilElement {
    }
    var HTMLSUiElement: {
        prototype: HTMLSUiElement;
        new (): HTMLSUiElement;
    };
    interface HTMLElementTagNameMap {
        "s-badge": HTMLSBadgeElement;
        "s-button": HTMLSButtonElement;
        "s-card": HTMLSCardElement;
        "s-collapse": HTMLSCollapseElement;
        "s-grid": HTMLSGridElement;
        "s-grid-item": HTMLSGridItemElement;
        "s-input": HTMLSInputElement;
        "s-popover": HTMLSPopoverElement;
        "s-select": HTMLSSelectElement;
        "s-select-option": HTMLSSelectOptionElement;
        "s-toggle": HTMLSToggleElement;
        "s-ui": HTMLSUiElement;
    }
}
declare namespace LocalJSX {
    interface SBadge {
        "color"?: UIColor;
    }
    interface SButton {
        "fill"?: 'default' | 'outline' | 'clear';
    }
    interface SCard {
    }
    interface SCollapse {
        "isHidden"?: boolean;
    }
    interface SGrid {
        "columnGap"?: string;
        "columns"?: string;
        "rowGap"?: string;
        "rows"?: string;
    }
    interface SGridItem {
        "column"?: number;
        "columnSpan"?: number;
        "row"?: number;
        "rowSpan"?: number;
    }
    interface SInput {
        "onSChange"?: (event: CustomEvent<string>) => void;
        "onSInput"?: (event: CustomEvent<InputEvent>) => void;
        "placeholder"?: string;
        "value"?: string;
    }
    interface SPopover {
        "isHidden"?: boolean;
    }
    interface SSelect {
        "onSChange"?: (event: CustomEvent<string>) => void;
        "placeholder"?: string;
        "value"?: string;
    }
    interface SSelectOption {
        "isSelected"?: boolean;
        "value"?: string;
    }
    interface SToggle {
        "checked"?: boolean;
        "onSChange"?: (event: CustomEvent<boolean>) => void;
        "scale"?: number;
    }
    interface SUi {
    }
    interface IntrinsicElements {
        "s-badge": SBadge;
        "s-button": SButton;
        "s-card": SCard;
        "s-collapse": SCollapse;
        "s-grid": SGrid;
        "s-grid-item": SGridItem;
        "s-input": SInput;
        "s-popover": SPopover;
        "s-select": SSelect;
        "s-select-option": SSelectOption;
        "s-toggle": SToggle;
        "s-ui": SUi;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "s-badge": LocalJSX.SBadge & JSXBase.HTMLAttributes<HTMLSBadgeElement>;
            "s-button": LocalJSX.SButton & JSXBase.HTMLAttributes<HTMLSButtonElement>;
            "s-card": LocalJSX.SCard & JSXBase.HTMLAttributes<HTMLSCardElement>;
            "s-collapse": LocalJSX.SCollapse & JSXBase.HTMLAttributes<HTMLSCollapseElement>;
            "s-grid": LocalJSX.SGrid & JSXBase.HTMLAttributes<HTMLSGridElement>;
            "s-grid-item": LocalJSX.SGridItem & JSXBase.HTMLAttributes<HTMLSGridItemElement>;
            "s-input": LocalJSX.SInput & JSXBase.HTMLAttributes<HTMLSInputElement>;
            "s-popover": LocalJSX.SPopover & JSXBase.HTMLAttributes<HTMLSPopoverElement>;
            "s-select": LocalJSX.SSelect & JSXBase.HTMLAttributes<HTMLSSelectElement>;
            "s-select-option": LocalJSX.SSelectOption & JSXBase.HTMLAttributes<HTMLSSelectOptionElement>;
            "s-toggle": LocalJSX.SToggle & JSXBase.HTMLAttributes<HTMLSToggleElement>;
            "s-ui": LocalJSX.SUi & JSXBase.HTMLAttributes<HTMLSUiElement>;
        }
    }
}
