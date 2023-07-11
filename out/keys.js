"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DYNAMIC_DATASOURCE = exports.DynamicDatasourceBindings = exports.Loopback4DynamicDatasourceComponentBindings = void 0;
const core_1 = require("@loopback/core");
/**
 * Binding keys used by this component.
 */
var Loopback4DynamicDatasourceComponentBindings;
(function (Loopback4DynamicDatasourceComponentBindings) {
    Loopback4DynamicDatasourceComponentBindings.COMPONENT = core_1.BindingKey.create(`${core_1.CoreBindings.COMPONENTS}.Loopback4DynamicDatasourceComponent`);
})(Loopback4DynamicDatasourceComponentBindings = exports.Loopback4DynamicDatasourceComponentBindings || (exports.Loopback4DynamicDatasourceComponentBindings = {}));
var DynamicDatasourceBindings;
(function (DynamicDatasourceBindings) {
    DynamicDatasourceBindings.MIDDLEWARE = core_1.BindingKey.create('middleware.dynamic-datasource');
    DynamicDatasourceBindings.DYNAMIC_DATASOURCE_ACTION = core_1.BindingKey.create('dynamic-datasource.action');
    DynamicDatasourceBindings.CURRENT_INDETIFIER = core_1.BindingKey.create('dynamic-datasource.currentIdentifier');
    DynamicDatasourceBindings.DATASOURCE_IDENTIFIER_PROVIDER = core_1.BindingKey.create('dynamic-datasource.action.databaseIdentifier');
    DynamicDatasourceBindings.DATASOURCE_PROVIDER = core_1.BindingKey.create('dynamic-datasource.action.datasourceProvider');
})(DynamicDatasourceBindings = exports.DynamicDatasourceBindings || (exports.DynamicDatasourceBindings = {}));
exports.DYNAMIC_DATASOURCE = 'dynamic-datasource';
//# sourceMappingURL=keys.js.map