import { Ui } from "./Ui";

export class PerryWebUi extends Ui {
    
    makeHomePage = () => console.log('Homepage for web')
    makeLoginPage = () => console.log('Login page for web')
    makeDashboard = () => {}
    makeNavbar = () => console.log('Navbar for web')
    makeModal = () => console.log('Modal for changing language')

    hasDashboard = () => false
}