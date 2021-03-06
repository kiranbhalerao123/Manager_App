import React from "react";
import { Scene, Router, ActionConst, Actions } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeCreate from "./components/EmployeeCreate";
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => (
  <Router>
    <Scene key="root">
      <Scene key="login" component={LoginForm} title="Login Here" />
      <Scene
        key="employeeList"
        component={EmployeeList}
        title="Employees"
        type="replace"
        rightTitle="Add"
        onRight={() => Actions.createEmployee()}
      />
      <Scene
        key="createEmployee"
        component={EmployeeCreate}
        title="Create Employee"
      />
      <Scene
        key="editEmployee"
        component={EmployeeEdit}
        title="Edit Employee"
      />
    </Scene>
  </Router>
);

// To disable back button

//renderBackButton={()=>(null)} renderLeftButton={()=>(null)}
//type="replace"
//type={ActionConst.RESET}

export default RouterComponent;
