import { Application, Component, ProviderMap } from '@loopback/core';
import { Loopback4DynamicDatasourceComponentOptions } from './types';
export declare class Loopback4DynamicDatasourceComponent implements Component {
    private application;
    private options;
    providers: ProviderMap;
    constructor(application: Application, options?: Loopback4DynamicDatasourceComponentOptions);
}
