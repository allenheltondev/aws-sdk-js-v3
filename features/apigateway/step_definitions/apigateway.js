const { Before } = require("cucumber");

Before({ tags: "@apigateway" }, function (scenario, callback) {
  const { APIGateway } = require("../../../clients/client-api-gateway");
  this.service = new APIGateway({});
  callback();
});
