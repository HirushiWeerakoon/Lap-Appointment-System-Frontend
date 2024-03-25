
// @mui material components
import Card from "@mui/material/Card";

import * as React from "react";
import {useTable} from "react-table";
import { useEffect, useState } from "react";
import axios from "axios";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// import Icon from "@mui/material/Icon";
import Basket from "examples/Icons/Basket";
import Settings from "examples/Icons/Settings";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

function List() {
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
                        <SoftButton variant="gradient" color="info" size="small">
                          Download
                        </SoftButton>&nbsp;
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

export default List;
