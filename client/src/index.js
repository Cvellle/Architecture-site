import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ScrollContext } from "react-router-scroll-4";
import { IntlProvider } from "react-redux-multilingual";
import "./index.scss";
import "animate.css/animate.min.css";

// Import custom components
import store from "./store";
import translations from "./constants/translations";

// Layouts
import Home1 from "./components/home-1";
import Home2 from "./components/home-2";
import Home3 from "./components/home-3";
import Home4 from "./components/home-4";
// Pages
import PageNotFound from "./components/404";

// Features
import Layout from "./app";
import AboutPage from "./components/pages/about/about";
import ContactPage from "./components/pages/contact/contact";
import BlogPage from "./components/pages/blog/blog";
import SingBlogPage from "./components/pages/blog/single-blog";
import FAQPage from "./components/pages/faq/faq";
import TypographyPage from "./components/pages/typography/typography";
import OurTeamPage from "./components/pages/our-team/our-team";
import { getAllData } from "./actions";
import OurServicesPage from "./components/pages/our-services/our-services";
import TheBuildingPage from "./components/pages/the-building/the-building";
import ApartmentsPage from "./components/pages/apartments/apartments";
import ApartmentSinglePage from "./components/pages/apartment-single/apartment-single";

class Root extends React.Component {
  render() {
    store.dispatch(getAllData());
    return (
      <Provider store={store}>
        <IntlProvider translations={translations} locale="en">
          <BrowserRouter basename={"/"}>
            <ScrollContext>
              <Switch>
                <Layout>
                  <Route exact path={`/`} component={Home2} />
                  <Route exact path={`/home-2`} component={Home2} />
                  <Route exact path={`/home-3`} component={Home3} />
                  <Route exact path={`/home-4`} component={Home4} />
                  {/*Pages*/}
                  <Route path={`/o-nama`} component={AboutPage} />
                  <Route path={`/our-team`} component={OurTeamPage} />
                  <Route path={`/our-services`} component={OurServicesPage} />
                  <Route path={`/typography`} component={TypographyPage} />
                  <Route path={`/faqs`} component={FAQPage} />
                  <Route path={`/kontakt`} component={ContactPage} />
                  {/* <Route path={`/kuce`} component={TheBuildingPage}/> */}
                  <Route path={`/kuce`} component={Home2} />

                  <Route path={`/stanovi`} component={ApartmentsPage} />
                  <Route
                    path={`/apartment/:title`}
                    component={ApartmentSinglePage}
                  />

                  {/* <Route path={`/garaze`} component={BlogPage}/> */}
                  <Route path={`/garaze`} component={Home2} />
                  <Route path={`/garaze/:id`} component={SingBlogPage} />
                </Layout>
              </Switch>
            </ScrollContext>
          </BrowserRouter>
        </IntlProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));

//${process.env.PUBLIC_URL}
