import { BindingKey } from '@loopback/core';
import { Middleware } from '@loopback/rest';
import { Loopback4DynamicDatasourceComponent } from './component';
import { DatasourceIdentifier, DatasourceIdentifierFn, DatasourceProviderFn, SetupDatasourceFn } from './types';
/**
 * Binding keys used by this component.
 */
export declare namespace Loopback4DynamicDatasourceComponentBindings {
    const COMPONENT: BindingKey<Loopback4DynamicDatasourceComponent>;
}
export declare namespace DynamicDatasourceBindings {
    const MIDDLEWARE: BindingKey<Middleware>;
    const DYNAMIC_DATASOURCE_ACTION: BindingKey<SetupDatasourceFn>;
    const CURRENT_INDETIFIER: BindingKey<DatasourceIdentifier>;
    const DATASOURCE_IDENTIFIER_PROVIDER: BindingKey<DatasourceIdentifierFn>;
    const DATASOURCE_PROVIDER: BindingKey<DatasourceProviderFn>;
}
export declare const DYNAMIC_DATASOURCE = "dynamic-datasource";
