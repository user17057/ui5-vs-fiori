import MessageBox from "sap/m/MessageBox";
import Controller from "sap/ui/core/mvc/Controller";

/**
 * @namespace project2.controller
 */
export default class View1 extends Controller {

    public onInit(): void {
        MessageBox.show("here is a message");
    }
}