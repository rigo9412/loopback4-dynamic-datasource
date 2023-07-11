import { Provider } from '@loopback/core';
import { DatasourceIdentifierFn } from '../types';
export declare class DatasourceIdentifierProvider implements Provider<DatasourceIdentifierFn> {
    constructor();
    value(): DatasourceIdentifierFn;
}
