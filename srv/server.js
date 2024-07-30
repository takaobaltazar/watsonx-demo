const cds = require("@sap/cds");
const v2proxy = require("@sap/cds-odata-v2-adapter-proxy");

cds.on("bootstrap", (app) => {
    app.use(v2proxy());
    if (process.env.NODE_ENV !== "production") {
        // eslint-disable-next-line
        const cdsSwagger = require("cds-swagger-ui-express");
        app.use(cdsSwagger());
    }
});

module.exports = cds.server; 