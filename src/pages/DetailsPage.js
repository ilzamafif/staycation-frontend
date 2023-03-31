import React, { Component } from "react";

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";

import itemDetails from "json/itemDetails.json";

export default class DetailsPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    window.title = "Details Page";
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle breadcrumb={breadcrumb} data={itemDetails} />
        <FeaturedImage data={itemDetails.imageUrls}></FeaturedImage>
        <div className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <PageDetailDescription data={itemDetails}></PageDetailDescription>
            </div>
            <div className="col-5">
              <p>Booking</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
