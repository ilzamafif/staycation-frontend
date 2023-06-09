import React, { Component } from "react";
import InputDate from "components/Form/InputDate";
import Breadcrumb from "components/Breadcrumb";
export default class Example extends Component {
  render() {
    const breadcrumbList = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            <Breadcrumb data={breadcrumbList} />
          </div>
        </div>
      </div>
    );
  }
}
