import React from "react";
import DatePicker from "react-datepicker";
import { FormGroup, Label, Button } from "reactstrap";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class PortDate extends React.Component {
  state = {
    dateValue: new Date(),
    isHidden: false,
  };

  setFieldValueAndTouched(date, touched) {
    const { setFieldValue, setFieldTouched } = this.props.form;
    const { name } = this.props.field;
    setFieldValue(name, date, true);
    setFieldTouched(name, touched, true);
  }

  handleChange = (date) => {
    console.log("I am in handleChange");

    this.setState({
      dateValue: date,
    });
    this.setFieldValueAndTouched(date, true);
  };

  toogleDate(date) {
    this.setState({
      isHidden: !this.state.isHidden,
    });
    this.setFieldValueAndTouched(date, true);
  }

  render(props) {
    const {
      canBeDisabled,
      label,
      field,
      form: { touched, errors },
    } = this.props;
    const { isHidden, dateValue } = this.state;
    return (
      <FormGroup>
        <Label>{label}</Label>
        <div className="input-group">
          {!isHidden && (
            <DatePicker
              selected={dateValue}
              onChange={this.handleChange}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              maxDate={new Date()}
              dropdownMode="select"
            />
          )}
          {canBeDisabled && !isHidden && (
            <Button onClick={() => this.toogleDate(null)}>
              Still Working Here
            </Button>
          )}
          {canBeDisabled && isHidden && (
            <React.Fragment>
              <span>Still Working Here</span>
              <br />
              <Button onClick={() => this.toogleDate(dateValue)}>
                {" "}
                Set End Date
              </Button>
            </React.Fragment>
          )}
        </div>

        {touched[field.name] && errors[field.name] && (
          <div className="error">{errors[field.name]}</div>
        )}
      </FormGroup>
    );
  }
}
export default PortDate;
