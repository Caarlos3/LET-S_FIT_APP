import type { DOMManager } from '../../dom/domManager';
import type { UpdateService } from '../updateService';
export declare class FontManager {
    private readonly domManager;
    private readonly updateService;
    private observers;
    constructor(domManager: DOMManager, updateService: UpdateService);
    updateFonts(fonts?: Set<string>): void;
    destroy(): void;
    private loadFonts;
    private observeFontStatus;
}
