
// import Table from 'react-bootstrap/Table';
import * as React from "react";
import {useTable} from "react-table";
import { useEffect, useState } from "react";
import axios from "axios";

import "./table.css";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";
import Basket from "examples/Icons/Basket";
import Settings from "examples/Icons/Settings";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfilesList from "examples/Lists/ProfilesList";

// Data
import appointmentData from "layouts/MyPages/techview/data/appointmentData";


// const columns = [
//   {
//     key: "name",
//     label: "NAME",
//   },
//   {
//     key: "role",
//     label: "ROLE",
//   },
//   {
//     key: "status",
//     label: "STATUS",
//   },
// ];


const Techview = () => {

  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState();
  const [searchStr, setSearch] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8080/appointments`)
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  const deleteEvent = (appointmentId) => {
    axios
      .delete(`http://localhost:8080/appointments${appointmentId}`)
      .then((response) => {
        console.log(response);
        // props.history.push('/admin');
      })
      .catch((error) => {
        console.log(error);
      });

    //refreshing
    window.location.reload(false);
  };

  const [exampleModal, setmodalDemo] = useState(false); 

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">View Appointment details</SoftTypography>
              <input
                      type="text"
                        placeholder="Search..."
                        style={{ borderWidth: "2.5px", width: "15rem", height: "2rem",  textAlign: "left", borderRadius: "15px" }}
                        onChange={(e) => {
                          setSearch(e.target.value);
                        }}              
                      />
              </SoftBox>
              <SoftBox className="outer-wrapper">
              <SoftBox className="table-wrapper" >
            {/* <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr key={columns.id} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th key={columns.id} {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr key={fakeData.appointmentId} {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td key={fakeData.appointmentId} {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table> */}


        <table>
                  <thead>
                    <tr>
                      <th scope="col">Tech ID</th>
                      {/* <th scope="col">Test ID</th> */}
                      <th scope="col">Test</th>
                      {/* <th scope="col">Patient ID</th> */}
                      <th scope="col">Patient Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Contact No</th>
                      <th scope="col">Age</th>
                      <th scope="col">Date</th>
                      <th scope="col">Time</th>
                      <th scope="col">Doctor Name</th>
                      <th scope="col">  </th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {/* {posts */}
                    

                    {
                       posts.filter(r => {
                          if(searchStr === ""){
                              return r;
                          } else if (r.name.toLowerCase().includes(searchStr.toLowerCase())){
                            return r
                          }
                      } )                      
                      .map((posts) => (
                      <tr key={posts.appointmentId}>
                        <td> {posts.techId} </td>
                        <td> {posts.test} </td>
                        <td> {posts.name} </td>
                        <td> {posts.email} </td>
                        <td> {posts.contactNo} </td>
                        <td> {posts.age} </td>
                        <td> {posts.date} </td>
                        <td> {posts.time} </td>
                        <td> {posts.doctorName} </td>
                        <td>
                          {" "}
                          {() => {
                            if (posts.name < currentDate) setStatus("Opend");
                            else setStatus("Closed");
                            console.log("ssssssssssssssssss");
                          }}{" "}
                          {status}{" "}
                        </td>
                        <td>
                        <SoftButton variant="gradient" color="info" iconOnly>
                          <Settings>Basket</Settings>
                        </SoftButton>&nbsp;
                        <SoftButton variant="gradient" color="info" iconOnly onClick={deleteEvent.bind(posts.appointmentId)}>
                          <Basket>Basket</Basket>
                        </SoftButton>
                          {/* <UncontrolledDropdown>
                            <DropdownToggle className="btn-icon-only text-light" href="#pablo" role="button" size="sm" color="" onClick={(e) => e.preventDefault()}>
                              <i className="fas fa-ellipsis-v" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                              <Link to={`/customer/event-display/${posts._id}`}>
                                <DropdownItem>View Event</DropdownItem>
                              </Link>
                              <Link to={`/customer/event-update/${posts._id}`}>
                                <DropdownItem>Update Event</DropdownItem>
                              </Link>
                              <DropdownItem onClick={() => toggleModal("exampleModal")}> Delete Event</DropdownItem>

                              <Modal className="modal-dialog-centered" isOpen={exampleModal} toggle={() => toggleModal("exampleModal")}>
                                <div className="modal-header">
                                  <h5 className="modal-title" id="exampleModalLabel">
                                    Confirm to delete this event
                                  </h5>
                                  <button aria-label="Close" className="close" data-dismiss="modal" type="button" onClick={() => toggleModal("exampleModal")}>
                                    <span aria-hidden={true}>×</span>
                                  </button>
                                </div>
                                <div className="modal-body">Do you want to delete this event?</div>
                                <div className="modal-footer">
                                  <Button color="primary" type="button" onClick={deleteEvent.bind(props.this, posts._id)}>
                                    Confirm Delete
                                  </Button>
                                  <Button color="secondary" data-dismiss="modal" type="button" onClick={() => toggleModal("exampleModal")}>
                                    Close
                                  </Button>
                                </div>
                              </Modal>
                            </DropdownMenu>
                          </UncontrolledDropdown> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

        </SoftBox>
        </SoftBox>

          </Card>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Techview;
