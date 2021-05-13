import React, { Component } from "react";
import Helmet from "react-helmet";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import { connect } from "react-redux";
import ContentWrap from "../../common/content-wrap";
import Slider from "react-slick";
import "./apartment-single.scss";

class ApartmentSinglePage extends Component {
  configSlider = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  render() {
    const { item } = this.props;
    return (
      <div className={`apartments-page-wrap apartment`}>
        <Breadcrumb
          title={item.title}
          parent={[{ path: "apartments", title: "Stanovi" }]}
        />
        <Helmet>
          <title>Gening | {item.title}</title>
        </Helmet>
        <ContentWrap isBoxed={true}>
          <div className="entry-image text-center">
            <div className="apartment__content">
              <div className="apartment__tableDiv col-12 col-md-6">
                <div className="apartment__tableBlock m-auto">
                  <table className="table-bordered col-12 col-md-11 col-lg-10 m-auto">
                    <thead>
                      <tr>
                        <th colspan="12" className="text-center p-3">
                          {item.description}
                        </th>
                      </tr>
                    </thead>
                    <tr>
                      <td>br.</td>
                      <td>PROSTORIJA</td>
                      <td>
                        P m<sup>2</sup>
                      </td>
                      <td>
                        O m<sup>1</sup>
                      </td>
                      <td>VRSTA PODA</td>
                    </tr>
                    {item.rooms.map((content, index) => (
                      <tr>
                        <td>0{index + 1}</td>
                        <td>{content.room}</td>
                        <td>{content.povrsina}</td>
                        <td>{content.obim}</td>
                        <td>{content.pod}</td>
                      </tr>
                    ))}
                    <tr>
                      <td colspan="6">&nbsp;</td>
                    </tr>
                    <tr>
                      <td colspan="2" className="text-left pl-2">
                        Neto zatvorena površina
                      </td>
                      <td>{item.netoPovrsina.zatvorena}</td>
                      <td>
                        {item.netoPovrsina.umanjenjeZ < 100
                          ? `-${item.netoPovrsina.umanjenjeZ}%`
                          : null}
                      </td>
                      <td>
                        {item.netoPovrsina.umanjenjeZ > 0
                          ? (
                              item.netoPovrsina.zatvorena *
                              ((100 - item.netoPovrsina.umanjenjeZ) / 100)
                            ).toFixed(2)
                          : item.netoPovrsina.zatvorena}
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2" className="text-left pl-2">
                        Neto otvorena površina
                      </td>
                      <td>{item.netoPovrsina.otvorena}</td>
                      <td>
                        {item.netoPovrsina.umanjenjeO > 0
                          ? `${item.netoPovrsina.umanjenjeO}`
                          : null}
                      </td>
                      <td>
                        {item.netoPovrsina.umanjenjeO > 0
                          ? (
                              item.netoPovrsina.otvorena *
                              ((100 - item.netoPovrsina.umanjenjeO) / 100)
                            ).toFixed(2)
                          : item.netoPovrsina.otvorena}
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2" className="text-left pl-2">
                        Ukupna neto površina
                      </td>
                      <td />
                      <td />
                      <td>
                        {(
                          (item.netoPovrsina.umanjenjeZ < 100
                            ? item.netoPovrsina.zatvorena -
                              item.netoPovrsina.zatvorena *
                                (item.netoPovrsina.umanjenjeZ / 100)
                            : item.netoPovrsina.zatvorena) +
                          item.netoPovrsina.otvorena
                        ).toFixed(2)}
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className=" col-12 col-md-6 m-5 m-md-0">
                <figure className="apartment__imageWrapper col-12 col-md-9 m-auto">
                  <img src={item.gallery[0]} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </ContentWrap>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let apartmentID = ownProps.match.params.title;
  return {
    item: state.apartments.apartments.find((el) => el.title == apartmentID),
  };
};

export default connect(mapStateToProps)(ApartmentSinglePage);
