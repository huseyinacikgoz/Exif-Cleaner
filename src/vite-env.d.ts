/// <reference types="vite/client" />

declare module 'piexifjs' {
    export function load(dataUrl: string): object;
    export function dump(exifObj: object): string;
    export function insert(exifBytes: string, dataUrl: string): string;
    export function remove(dataUrl: string): string;
}
