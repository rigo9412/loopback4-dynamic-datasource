import { Provider } from '@loopback/core';
import { Middleware, RequestContext, RestApplication } from '@loopback/rest';
import { DatasourceIdentifierFn, DatasourceProviderFn, SetupDatasourceFn } from '../types';
export declare class DynamicDatasourceActionProvider implements Provider<SetupDatasourceFn> {
    private application;
    private readonly getDatasourceIdentifier;
    private readonly getDatasourceProvider;
    constructor(application: RestApplication, getDatasourceIdentifier: DatasourceIdentifierFn, getDatasourceProvider: DatasourceProviderFn);
    value(): SetupDatasourceFn;
    action(requestCtx: RequestContext): Promise<void>;
    private bindDatabaseIdentifier;
}
export declare class DynamicDatasourceMiddlewareProvider implements Provider<Middleware> {
    private readonly setupDatasource;
    constructor(setupDatasource: SetupDatasourceFn);
    value(): Middleware;
}
