import { PerryAdminUi } from "./PerryAdminUi"
import { PerryWebUi } from "./PerryWebUi"

export class TemplateMethod {

    public static main = () => {
        const perryWebUi = new PerryWebUi()
        perryWebUi.makeUi()
        const perryAdminUI = new PerryAdminUi()
        perryAdminUI.makeUi()
    }
}