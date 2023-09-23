sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.demo.zflight.controller.View1", {
            onInit: function () {
                
                var oModel = this.getOwnerComponent().getModel("FlightModel");
                var fullEntityPath = "/CarrierCollection";
                oModel.read(fullEntityPath, {
                    success: function(oRetrievedResult) {
                        console.log(JSON.stringify(oRetrievedResult));
                         /* do something */ 
                    },
                    error: function(oError) {
                        console.log(oError);
                         /* do something */ 
                    }
                });
            }
        });
    });
