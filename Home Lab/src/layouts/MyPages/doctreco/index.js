// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard React components
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Billing page components
import PaymentMethod from "layouts/billing/components/PaymentMethod";
import Invoices from "layouts/billing/components/Invoices";
import BillingInformation from "layouts/billing/components/BillingInformation";
import Transactions from "layouts/billing/components/Transactions";

function Doctreco() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mt={4}>
        <SoftBox mb={1.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} xl={12}>
                  <DefaultInfoCard
                    icon="account_balance"
                    title="Doctor recommandation"
                    description="From there, you can find hours of operation and schedule an appointment. When visiting a lab, you should bring the test request form from a health care professional requesting the laboratory testing."
                  />
                  <br></br>
                    
                    <SoftInput type="text" placeholder="Patient Name" value="Jone" />
                    <br></br>
                    <SoftInput type="text" placeholder="Doctor Name" value="Jone" />
                    <br></br>
                    <SoftInput type="text" placeholder="Reccomandended test" value="Jone" />
                    <br></br>
                    <SoftInput type="email" placeholder="Email" value="someone@gmail.com" />
                    <br></br>
                    <SoftInput type="tel" placeholder="Phone" value="+94 71 0268631 " />
                    <br></br>
                    <SoftInput type="age" placeholder="Patient Age" value="" />
                    <br></br>
                </Grid>
                <Grid item xs={12}>
                  <SoftButton variant="gradient" color="dark">
                  <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                  &nbsp;SEND
                  </SoftButton>
                </Grid>
              </Grid>
            </Grid>
            {/* <Grid item xs={12} lg={4}>
              <Invoices />
            </Grid> */}
          </Grid>
        </SoftBox>
        {/* <SoftBox my={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <BillingInformation />
            </Grid>
            <Grid item xs={12} md={5}>
              <Transactions />
            </Grid>
          </Grid>
        </SoftBox> */}
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Doctreco;
