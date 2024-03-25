
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

// import { useNavigate } from "react";
import {useNavigate} from 'react-router-dom';

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

import { Button, Form, FormGroup } from "reactstrap";
import { Input } from "reactstrap";

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
import { useState } from "react";

function Bin() {


  // const user = JSON.parse(localStorage.getItem("profile"));
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    // user_id: user?.result?._id,
    name: "",
    email: "",
    contactNo: "",
    age: "",
    date: "",
    time: "",
    doctorName: ""
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("*Required!"),
    email: Yup.string().email("*Invalid email!").required("*Required!"),
    contactNo: Yup.string().matches(phoneRegExp, "Phone number is not valid").required("*Required!").min(10, "Too short").max(10, "Too long"),
    age: Yup.string().required("*Required!"),
    date: Yup.string().required("*Required!"),
    time: Yup.string().required("*Required!"),
    doctorName: Yup.string().required("*Required!"),
    test: Yup.string().required("*Required!")
  });

  //using history
  // let history = useHistory();
  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log("Done");
    console.log("Form Date", values);
    //  values.date_of_the_event = event_date; //watch
    axios
      .post("http://localhost:8080/appointments", values)
      .then((res) => {
        console.log(res);
        console.log("Data", values);
        // history.push({
        //   pathname: `/bill`,
        // });
        // navigate(`/bill`);
        navigate('/payment');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mt={4}>
        <SoftBox mb={1.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={3}>
                <Form onSubmit={formik.handleSubmit}>
                <Grid item xs={12} xl={12}>
                  <DefaultInfoCard
                    icon="account_balance"
                    title="Make an appointment"
                    description="From there, you can find hours of operation and schedule an appointment. When visiting a lab, you should bring the test request form from a health care professional requesting the laboratory testing."
                  />
                  <br></br>

                   <FormGroup>
                    <SoftInput 
                    id="exampleFormControlInput1"
                    type="text" 
                    placeholder="Name"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? <div style={{ color: "red" }}>{formik.errors.name}</div> : null}
                    </FormGroup>
                    <br></br>

                    <SoftInput 
                    type="email" 
                    placeholder="Email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email} />
                    {formik.touched.email && formik.errors.email ? <div style={{ color: "red" }}>{formik.errors.email}</div> : null}
                    <br></br>

                    <SoftInput 
                    type="text" 
                    placeholder="Phone" 
                    name="contactNo"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.contactNo}/>
                    {formik.touched.contactNo && formik.errors.contactNo ? <div style={{ color: "red" }}>{formik.errors.contactNo}</div> : null}
                    <br></br>

                    <SoftInput 
                    type="text" 
                    placeholder="Age" 
                    name="age"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.age} />
                    {formik.touched.age && formik.errors.age ? <div style={{ color: "red" }}>{formik.errors.age}</div> : null}
                    <br></br>

                    <SoftInput 
                    type="date" 
                    placeholder="Date" 
                    name="date"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.date} />
                    {formik.touched.date && formik.errors.date ? <div style={{ color: "red" }}>{formik.errors.date}</div> : null}
                    <br></br>

                    <SoftInput 
                    type="time" 
                    placeholder="Time" 
                    name="time"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.time} />
                    {formik.touched.time && formik.errors.time ? <div style={{ color: "red" }}>{formik.errors.time}</div> : null}
                    <br></br>

                    <SoftInput 
                    type="text" 
                    placeholder="Doctor" 
                    name="doctorName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.doctorName} />
                    {formik.touched.doctorName && formik.errors.doctorName ? <div style={{ color: "red" }}>{formik.errors.doctorName}</div> : null}
                    <br></br>

                    {/* <SoftInput 
                    type="text" 
                    placeholder="Test" 
                    name="test"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.test} />
                    {formik.touched.test && formik.errors.test ? <div style={{ color: "red" }}>{formik.errors.test}</div> : null}
                    <br></br> */}
                    
                </Grid>
                <SoftBox mb={2} display="flex" px={2}>
                  <Input type="select" placeholder="Test Type" id="exampleSelect" name="select" width={100}>
                    <option>
                      Full Blood
                    </option>
                    <option>
                      Sugar
                    </option>
                    <option>
                     Dengue
                    </option>
                    <option>
                    Thyroid
                    </option>
                    <option>
                    Cortisol
                    </option>
                </Input>
              </SoftBox>
                <Grid item xs={12}>
                  <SoftButton variant="gradient" color="dark" type="submit">
                  <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                  &nbsp;Make Appointment
                  </SoftButton>
                </Grid>
                </Form>
              </Grid>
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Bin;
