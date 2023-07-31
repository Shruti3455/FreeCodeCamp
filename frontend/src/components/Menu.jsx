import React from "react";
import "./Menu.css";
const Menu = () => {
  return (
    <>
      <div class="menu_3">
        <h1>Welcome to freeCodeCamp.org</h1>
        <p>
          "I have not failed. I've just found 10,000 ways
          <br />
          that won't work"
          <br />- Thomas A. Edison
        </p>
        <table className="center">
          <tr class="row1">
            <td>(new) Responsive web Design Certification (300 hours)</td>
          </tr>
          <tr className="row1">
            <td>Legacy Responsive Web Design Certification (300 hours)</td>
          </tr>
          <tr className="row1">
            <td>JavaScript Rsponsive Web Design Certification (300 hours)</td>
          </tr>
          <tr className="row1">
            <td>Front End Development Libraries Certification (300 hours)</td>
          </tr>
          <tr className="row1">
            <td>Data Visualization Certification (300 hours)</td>
          </tr>
          <tr className="row1">
            <td>Back End Development and APIs Certification (300 hours)</td>
          </tr>
          <tr className="row1">
            <td>Quality Assurance Certification (300 hours)</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Menu;
