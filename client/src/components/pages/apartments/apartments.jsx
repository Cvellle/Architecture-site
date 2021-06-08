import React, { Component } from "react";
import Helmet from "react-helmet";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import ContentWrap from "../../common/content-wrap";
import { connect } from "react-redux";
import ApartmentArchiveBlock from "../../common/apartment/archive-apartment";

class ApartmentsPage extends Component {
  render() {
    return (
      <div className={`apartments-page-wrap`}>
        asd
        <Breadcrumb title={"Stanovi"} />
        <Helmet>
          <title>Rača residence | Stanovi</title>
          {/* <meta
            name="keywords"
            content="raca, stanovi, residences, racaresidences, prodaja stanova"
          />
          <meta name="description" content="Novi stanova Raca." /> */}
        </Helmet>
        asd
        <ContentWrap isBoxed={true}>
          <ApartmentArchiveBlock number={50} />
        </ContentWrap>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.apartments.apartments,
  };
};

export default connect(mapStateToProps)(ApartmentsPage);
