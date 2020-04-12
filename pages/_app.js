import App, { Container } from "next/app";
import auth0Client from '../services/auth0';

// Stylings
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss";

class PortfolioApp extends App {
  
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    const user = process.browser ? await auth0Client.clientAuth() : await auth0Client.serverAuth(ctx.req);
    
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    const auth = { user, isAuthenticated: !!user }
    return { pageProps, auth }
  }
  render() {
    //Component holds page you are navigating to
    const { Component, pageProps, auth } = this.props;
    return (
      <React.Fragment
      >
        <Component {...pageProps} auth={auth} />
      </React.Fragment>
    );
  }
}

export default PortfolioApp;
