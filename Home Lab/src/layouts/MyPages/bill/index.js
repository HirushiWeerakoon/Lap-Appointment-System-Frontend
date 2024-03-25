
 import { useFormik } from "formik";
 import * as Yup from "yup";
 import axios from "axios";
 
 // import services
 import emailjs from "emailjs-com";
 
 // import { useNavigate } from "react";
 import {useNavigate} from 'react-router-dom';
 import { useState } from "react";
 import Swal from 'sweetalert2';
 import withReactContent from 'sweetalert2-react-content';
 
 // @mui material components
 import Grid from "@mui/material/Grid";
 import Icon from "@mui/material/Icon";
 import { Button, Form, FormGroup } from "reactstrap";
 
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
 import { Alert } from 'reactstrap';
 
 
 const validationSchema = Yup.object({
   holderName: Yup.string().required("*Required!"),
   cardNumber: Yup.string().required("*Required!"),
   amount: Yup.string().required("*Required!"),
   expDate: Yup.string().required("*Required!"),
   csv: Yup.string().required("*Required!"),
   email: Yup.string().email("*Invalid email!").required("*Required!")
 })
 
 function Bill() {
 
   const navigate = useNavigate();
 
   const buttonClick = (e) => {
     // console.log(e);
     // setTimeout(() => {
     //   setShowAlert(true)
     // }, 2000);
     // withReactContent(Swal).fire({
     //   title: <i>Enter a valid Email</i>,
     //   input: 'email',
     //   inputValue,
     //   preConfirm: () => {
     //     setInputValue(Swal.getInput()?.value || '')
     //   },
     // }).then(sendEmail)
   };
 
   const initialValues = {
     enableReinitialize: true,
     validateOnMount: true,
     holderName: "",
     cardNumber: "",
     amount: "",
     expDate: "",
     csv: "",
     email: ""
   }
 
   // const onSubmit = (e, values) => {
   //   console.log("Done");
   //   console.log("Form Date", values);
   //   //  values.date_of_the_event = event_date; //watch
   //   axios
   //     .post("http://localhost:8080/payments", values)
   //     .then((res) => {
   //       console.log(res);
   //       console.log("Data", values);
 
   //       // navigate('/bill');
   //     })
   //     .catch((error) => {
   //       console.log(error);
   //     });
   // };
 
   const sendEmail = (e, values) => {
     e.preventDefault();
     emailjs.sendForm('service_20uay2r', 'template_eokti4o', e.target, 'user_fPD13QAVpGNDHZOSiKSLb'
     ).then(res=>{
       // axios.post("http://localhost:8080/payments", values);
       console.log(res);
       alert("Tha payment confirmation details sent to email");
     })
     .catch(err=>console.log(err));
   };
 
   const formik = useFormik({
     initialValues,
     // onSubmit,
     // sendEmail,
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
             <Form onSubmit={(formik.handleSubmit, sendEmail)}>
             <Grid item xs={12} xl={12}>
                   <DefaultInfoCard
                     icon="account_balance"
                     title="Payment Information"
                     description="Taking Control of Your Health Journey, You can easily manage and pay your test report bills here. When visiting a lab, you should bring the payment bill from a health care professional requesting the laboratory testing."
                   />
                   <br></br>
               <SoftInput 
                     type="text" 
                     name="holderName" 
                     placeholder="Card Holder Name"  
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur} 
                     value={formik.values.holderName} />
                     {formik.touched.holderName && formik.errors.holderName ? <div style={{ color: "red" }}>{formik.errors.holderName}</div> : null}
               <br></br>
               <SoftInput 
                     type="text"
                     name="cardNumber"
                     placeholder="Card Num"  
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur} 
                     value={formik.values.cardNumber} />
                     {formik.touched.cardNumber && formik.errors.cardNumber ? <div style={{ color: "red" }}>{formik.errors.cardNumber}</div> : null}
               <br></br>
               <SoftInput
                     type="text"
                     name="amount"
                     placeholder="Amount"
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur} 
                     value={formik.values.amount} />
                     {formik.touched.amount && formik.errors.amount ? <div style={{ color: "red" }}>{formik.errors.amount}</div> : null}
               <br></br>
               <SoftInput
                     type="text"
                     name="expDate"
                     placeholder="Expire date" 
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur} 
                     value={formik.values.expDate} />
                     {formik.touched.expDate && formik.errors.expDate ? <div style={{ color: "red" }}>{formik.errors.expDate}</div> : null}
               <br></br>
               <SoftInput
                     type="text" 
                     name="csv" 
                     placeholder="Csv"                     
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur} 
                     value={formik.values.csv}/>
                     {formik.touched.csv && formik.errors.csv ? <div style={{ color: "red" }}>{formik.errors.csv}</div> : null}
               <br></br>
               <SoftInput 
                     type="email" 
                     name="email"
                     placeholder="Email"
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     value={formik.values.email} />
                     {formik.touched.email && formik.errors.email ? <div style={{ color: "red" }}>{formik.errors.email}</div> : null}
                     <br></br>
             {/* </Grid>       */}
             </Grid>     
             {/* <Grid item xs={12}>
               <SoftButton variant="gradient" color="dark">
               <Icon sx={{ fontWeight: "bold" }}>add</Icon>
               &nbsp;PAY
               </SoftButton>
             </Grid> 
 
             <br></br> */}
 
             <Grid item xs={12}>
               <SoftButton variant="gradient" color="dark" type="submit">
               <Icon sx={{ fontWeight: "bold" }}>add</Icon>
               &nbsp;Confirm Payment
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
 
 export default Bill;
 