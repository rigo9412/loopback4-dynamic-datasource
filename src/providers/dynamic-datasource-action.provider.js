"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicDatasourceMiddlewareProvider = exports.DynamicDatasourceActionProvider = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
const repository_1 = require("@loopback/repository");
const keys_1 = require("../keys");
let DynamicDatasourceActionProvider = class DynamicDatasourceActionProvider {
    constructor(application, getDatasourceIdentifier, getDatasourceProvider) {
        this.application = application;
        this.getDatasourceIdentifier = getDatasourceIdentifier;
        this.getDatasourceProvider = getDatasourceProvider;
    }
    value() {
        return (ctx) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.action(ctx);
        });
    }
    action(requestCtx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const datasourceIdentifier = yield this.bindDatabaseIdentifier(requestCtx);
            if (datasourceIdentifier == null)
                return;
            const datasourceProvider = yield this.getDatasourceProvider(datasourceIdentifier);
            const promises = Object.entries(datasourceProvider).map((value) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const [key, method] = value;
                const dbBindKey = `${repository_1.RepositoryBindings.DATASOURCES}.${key}.${datasourceIdentifier.id}`;
                if (!this.application.isBound(dbBindKey)) {
                    const datasource = yield method();
                    this.application
                        .bind(dbBindKey)
                        .to(datasource)
                        .tag(repository_1.RepositoryTags.DATASOURCE);
                }
                requestCtx
                    .bind(`${repository_1.RepositoryBindings.DATASOURCES}.${key}`)
                    .toAlias(dbBindKey);
            }));
            yield Promise.all(promises);
        });
    }
    bindDatabaseIdentifier(requestCtx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const datasourceIdentifier = yield this.getDatasourceIdentifier(requestCtx);
            if (datasourceIdentifier) {
                requestCtx
                    .bind(keys_1.DynamicDatasourceBindings.CURRENT_INDETIFIER)
                    .to(datasourceIdentifier);
            }
            return datasourceIdentifier;
        });
    }
};
DynamicDatasourceActionProvider = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject(core_1.CoreBindings.APPLICATION_INSTANCE)),
    tslib_1.__param(1, core_1.inject(keys_1.DynamicDatasourceBindings.DATASOURCE_IDENTIFIER_PROVIDER)),
    tslib_1.__param(2, core_1.inject(keys_1.DynamicDatasourceBindings.DATASOURCE_PROVIDER)),
    tslib_1.__metadata("design:paramtypes", [rest_1.RestApplication, Function, Function])
], DynamicDatasourceActionProvider);
exports.DynamicDatasourceActionProvider = DynamicDatasourceActionProvider;
let DynamicDatasourceMiddlewareProvider = class DynamicDatasourceMiddlewareProvider {
    constructor(setupDatasource) {
        this.setupDatasource = setupDatasource;
    }
    value() {
        return (ctx, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.setupDatasource(ctx);
            return next();
        });
    }
};
DynamicDatasourceMiddlewareProvider = tslib_1.__decorate([
    core_1.injectable(rest_1.asMiddleware({
        group: rest_1.RestMiddlewareGroups.MIDDLEWARE,
        downstreamGroups: rest_1.RestMiddlewareGroups.FIND_ROUTE,
    })),
    tslib_1.__param(0, core_1.inject(keys_1.DynamicDatasourceBindings.DYNAMIC_DATASOURCE_ACTION)),
    tslib_1.__metadata("design:paramtypes", [Function])
], DynamicDatasourceMiddlewareProvider);
exports.DynamicDatasourceMiddlewareProvider = DynamicDatasourceMiddlewareProvider;
//# sourceMappingURL=dynamic-datasource-action.provider.js.map