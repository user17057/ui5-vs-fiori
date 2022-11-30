sap.ui.define(["sap/ui/core/UIComponent", "./model/models"], function (BaseComponent, ___model_models) {
  const createDeviceModel = ___model_models["createDeviceModel"];
  /**
   * @namespace project2
   */
  const Component = BaseComponent.extend("project2.Component", {
    metadata: {
      manifest: "json"
    },
    init: function _init() {
      // call the base component's init function
      BaseComponent.prototype.init.call(this);

      // enable routing
      this.getRouter().initialize();

      // set the device model
      this.setModel(createDeviceModel(), "device");
    }
  });
  return Component;
});