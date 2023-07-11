import { Provider } from '@loopback/core';
import { DatasourceProviderFn } from '../types';
export declare class DatasourceProvider implements Provider<DatasourceProviderFn> {
    constructor();
    value(): DatasourceProviderFn;
}
