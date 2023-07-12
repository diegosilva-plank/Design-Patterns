export abstract class Ui {
    
    makeUi = () => {

        this.makeHomePage()

        if (this.hasLoginPage()) this.makeLoginPage()
        if (this.hasDashboard()) this.makeDashboard()
        if (this.hasNavbar()) this.makeNavbar()
        if (this.hasModal()) this.makeModal()

        this.shipToProduction()
    }

    shipToProduction = () => console.log('Ready to ship')

    abstract makeHomePage: () => void
    abstract makeLoginPage: () => void
    abstract makeDashboard: () => void
    abstract makeNavbar: () => void
    abstract makeModal: () => void

    hasLoginPage = () => true
    hasDashboard = () => true
    hasNavbar = () => true
    hasModal = () => true
}