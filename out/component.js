"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loopback4DynamicDatasourceComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const keys_1 = require("./keys");
const providers_1 = require("./providers");
const types_1 = require("./types");
// Configure the binding for Loopback4DynamicDatasourceComponent
let Loopback4DynamicDatasourceComponent = class Loopback4DynamicDatasourceComponent {
    constructor(application, options = types_1.DEFAULT_LOOPBACK4_DYNAMIC_DATASOURCE_OPTIONS) {
        this.application = application;
        this.options = options;
        this.providers = {
            [keys_1.DynamicDatasourceBindings.DYNAMIC_DATASOURCE_ACTION.key]: providers_1.DynamicDatasourceActionProvider,
            [keys_1.DynamicDatasourceBindings.DATASOURCE_PROVIDER.key]: providers_1.DatasourceProvider,
            [keys_1.DynamicDatasourceBindings.DATASOURCE_IDENTIFIER_PROVIDER.key]: providers_1.DatasourceIdentifierProvider,
            [keys_1.DynamicDatasourceBindings.MIDDLEWARE.key]: providers_1.DynamicDatasourceMiddlewareProvider,
        };
    }
};
Loopback4DynamicDatasourceComponent = tslib_1.__decorate([
    core_1.injectable({
        tags: {
            [core_1.ContextTags.KEY]: keys_1.Loopback4DynamicDatasourceComponentBindings.COMPONENT,
        },
    }),
    tslib_1.__param(0, core_1.inject(core_1.CoreBindings.APPLICATION_INSTANCE)),
    tslib_1.__param(1, core_1.config()),
    tslib_1.__metadata("design:paramtypes", [core_1.Application, Object])
], Loopback4DynamicDatasourceComponent);
exports.Loopback4DynamicDatasourceComponent = Loopback4DynamicDatasourceComponent;
//# sourceMappingURL=component.js.map