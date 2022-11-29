sap.ui.define([
  "./BaseController",
  "sap/m/MessageBox"
], function (BaseController, MessageBox) {
  "use strict";

  return BaseController.extend("project3.project3.controller.Main", {
    sayHello: function() {
      MessageBox.show("Hello World!");
    }
  });

});
