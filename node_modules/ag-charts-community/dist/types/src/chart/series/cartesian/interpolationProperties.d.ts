import { BaseProperties } from '../../../util/properties';
export declare class InterpolationProperties extends BaseProperties {
    type: 'linear' | 'smooth' | 'step';
    tension: number;
    position: 'start' | 'middle' | 'end';
}
