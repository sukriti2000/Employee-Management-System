import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import EmployeeCreate from "./EmployeeCreate.jsx";
import EmployeeDetail from "./EmployeeDetails.jsx";
import EmployeeDirectory from "./EmployeeDirectory.jsx";
import Retirement from "./Retirement.jsx";

export default class Contents extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Redirect exact from="/" to="/directory" />
          <Route path="/directory" component={EmployeeDirectory} />
          <Route path="/empCreate" component={EmployeeCreate} />
          <Route path="/empEdit/:id" component={EmployeeDetail} />
          <Route path="/retired" component={Retirement} />
        </Switch>
      </>
    );
  }
}
