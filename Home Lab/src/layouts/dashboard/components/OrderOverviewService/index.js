
// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Images
import ivancik from "assets/images/ivancik4.jpg";

function OrderOverviewService() {
  return ( 
    <Card sx={{ height: "100%", width : "100%"}}>
      <SoftBox position="" height="100%" >
        <SoftBox
          display="flex"
          flexDirection="column"
          height="100%"
          py={2}
          px={2}
          borderRadius="lg"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${ivancik})`,
            backgroundSize: "cover",
          }}
        >
          <SoftBox mb={3} pt={1}>
            <SoftTypography variant="h5" color="black" fontWeight="bold"  align="center">
            Home Lab Services
            <br></br>
            </SoftTypography>
          </SoftBox>
          <SoftBox mb={2}>
            <SoftTypography variant="body2" color="black">
            <br></br>
            Home Laboratory Services is accredited with ISO 15189 and ISO 9001 standards. We aspire to provide the best clinical outcomes in the medical industry by adopting strong clinical standards and supported by passionate, well-trained, committed and motivated staff. Our philosophy will be to have an uncompromising commitment to provide the best customer experience to all patients who patronize our laboratories in an ultra-clean and modern environment.. 
              <br></br>
              <br></br>
              <br></br>
            </SoftTypography>
          </SoftBox>
          <SoftTypography
            component="a"
            href="#"
            variant="button"
            color="white"
            fontWeight="medium"
            sx={{
              mt: "auto",
              mr: "auto",
              display: "inline-flex",
              alignItems: "center",
              cursor: "pointer",

              "& .material-icons-round": {
                fontSize: "1.125rem",
                transform: `translate(2px, -0.5px)`,
                transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
              },

              "&:hover .material-icons-round, &:focus  .material-icons-round": {
                transform: `translate(6px, -0.5px)`,
              },
            }}
          >
            Read More
            <br></br>
            <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </Card>
    
  );
}

export default OrderOverviewService;
