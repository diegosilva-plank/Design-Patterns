import { Ui } from "./Ui";

export class PerryAdminUi extends Ui {
    
    makeHomePage = () => this.makeDashboard()
    makeLoginPage = () => console.log('Login page for admin')
    makeDashboard = () => console.log('Dashboard for admin')
    makeNavbar = () => {}
    makeModal = () => {}

    hasNavbar = () => false;
    hasModal = () => false;
}