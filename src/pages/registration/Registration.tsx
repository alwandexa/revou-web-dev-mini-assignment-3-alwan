import Layout, { Content } from "antd/es/layout/layout";
import SideInfo from "../../side-info/SideInfo";
import RegistrationForm from "../../form/registration-form/RegistrationForm";

const Registration = () => {
    return (
        <Layout>
            <Content>
                <div className="main-content">
                    <SideInfo />
                    <RegistrationForm />
                </div>
            </Content>
        </Layout>
    );
};

export default Registration;