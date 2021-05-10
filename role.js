const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function () {
  ac.grant("user").readOwn("profile").updateOwn("profile");

  ac.grant("merchant")
    .readOwn("profile")
    .createOwn("product")
    .updateOwn("product");

  ac.grant("admin")
    .extend("user")
    .extend("merchant")
    .updateAny("profile")
    .deleteAny("profile")
    .updateAny("product")
    .createOwn("product")
    .deleteAny("product");

  return ac;
})();
