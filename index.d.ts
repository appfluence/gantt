// Type definitions for frappe-gantt 0.5
// Types updated based on new changes applied on this fork by Appfluence LLC
// Forked from:
// Project: https://github.com/frappe/gantt
// Definitions by: Sam Alexander <https://github.com/samalexander>, Elijah Lucian <https://github.com/eli7vh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Gantt;

declare class Gantt {
    constructor(
        wrapper: string | HTMLElement | SVGElement,
        tasks: Gantt.Task[],
        options?: Gantt.Options
    );

    change_view_mode(mode: Gantt.viewMode): void;
    refresh(tasks: Gantt.Task[], updateScroll: boolean): void;
    focus_on_today(): void;
}

declare namespace Gantt {
    interface Task {
        id: string;
        name: string;
        start: string | Date;
        end: string | Date;
        progress: number;
        dependencies: string | string[];
        custom_class?: string;
    }

    interface EnrichedTask extends Task {
        _start: Date;
        _end: Date;
        _cyclic: boolean;
        _index: number;
    }

    interface Options {
        header_height?: number;
        column_width?: number;
        step?: number;
        view_modes?: viewMode[];
        bar_height?: number;
        bar_corner_radius?: number;
        arrow_curve?: number;
        padding?: number;
        view_mode?: viewMode;
        date_format?: string;
        custom_popup_html?: string | ((task: EnrichedTask) => string);
        language?: string;
        on_click?: (task: EnrichedTask) => void;
        on_contextmenu?: (task: EnrichedTask, event: MouseEvent) => void;
        on_date_change?: (task: EnrichedTask, start: Date, end: Date) => void;
        on_progress_change?: (task: EnrichedTask, progress: number) => void;
        on_view_change?: (mode: viewMode) => void;
        sticky_header: boolean;
        can_click_ghost_task: boolean;
    }

    type viewMode =
        | 'Quarter Day'
        | 'Half Day'
        | 'Day'
        | 'Week'
        | 'Month'
        | 'Year';
}
