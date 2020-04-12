import React from "react";
import BaseLayout from "../layouts/BaseLayout";
import BasePage from "../BasePage";

const nameSpace= 'http://localhost:3000/';
export default function(role) {
  return function (Component) {
    return class withAuth extends React.Component {
  
      static async getInitialProps(args){ 
          const pageProps = await Component.getInitialProps && await Component.getInitialProps(args);
  
          return {...pageProps};
      }
  
      renderSecretPage() {
        const { isAuthenticated, user } = this.props.auth;
        const userRole = user && user[`${nameSpace}roles`];
        let isAuthorized = false;
  
        if(role){
          if(userRole && userRole === role){isAuthorized = true}
        }else{
          isAuthorized = true;
        }
        console.log(isAuthorized);
        
        if(!isAuthenticated){
          
          return(
             <BaseLayout {...this.props.auth}>
              <BasePage>
                <h1>You are not Authenticated. Please Login</h1>
              </BasePage>
            </BaseLayout>
          );
        }else if(!isAuthorized){
          return(
           <BaseLayout {...this.props.auth}>
              <BasePage>
                <h1>You are not Authorized. You dont have permission</h1>
              </BasePage>
            </BaseLayout>);
        }else{
          return (
            <Component {...this.props}/>
          );
        }
      }
      render() {
        return this.renderSecretPage();
      }
    };
  }
}


