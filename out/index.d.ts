export interface Bits {
    [key: string]: boolean;
}
export declare class BitField {
    private map;
    set(key: string): void;
    has(number: number, key: string): boolean;
    all(number: number): Bits;
    get(key: string): number;
    number(bits: Bits): number;
}
