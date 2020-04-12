// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from 'reactstrap';
import PortInput from '../form/PortInput';
import PortDate from '../form/PortDate';
import moment from "moment";

const validateInputs = (values) => {
  const errors = {};
  
  Object.entries(values).forEach(([key, value]) => {
    console.log(values);
    
    if (!values[key] && key!='endDate' ) {
      errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required!`
    }
  });
  const startDate = values.startDate;
  const endDate = values.endDate;
  if( startDate && endDate && (startDate >= endDate && endDate!=null)){
    errors.endDate = 'End date cannot be before Start day';
  }
  return errors;
};

const INITIAL_VALUES = {
  title: "",
  company: "",
  location: "",
  position: "",
  description: "",
  startDate: "",
  endDate: "",
};
const PortfolioCreateForm = (props) => (
  <div>
    <Formik
      initialValues={INITIAL_VALUES}
      validate={validateInputs}
      onSubmit={props.onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="title"  label="Title" component={PortInput} />
          <Field type="text" name="company" label="Company" component={PortInput} />
          <Field type="text" name="location" label="Location" component={PortInput} />
          <Field type="text" name="position" label="Position" component={PortInput} />
          <Field type="textarea" name="description" label="Description" component={PortInput} />
          <Field name="startDate" label="Start Date" component={PortDate} />
          <Field canBeDisabled={true} name="endDate" label="End Date" component={PortDate} />
          <Button outline color='success' size='lg' type="submit" disabled={isSubmitting}>
            Create
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioCreateForm;

// import React from "react";

// class PortfolioCreateForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { title: "", description: "", language: "" };

//     this.handleChange = this.handleNameChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleNameChange(event, ) {
//     const field = event.target.name;
//     this.setState({ [field]: event.target.value });
//   }
//   handleSubmit(event) {
//     const { title, language, description } = this.state;
//     alert(title + " " + language + " " + description);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input
//             name='title'
//             type="text"
//             value={this.state.title}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Description:
//           <textarea
//             name='description'
//             value={this.state.description}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Pick your favourite language
//           <select
//             name='language'
//             value={this.state.language}
//             onChange={this.handleChange}
//           >
//             <option value="javascript">Javascript</option>
//             <option value="java">Java</option>
//             <option value="c++">C++</option>
//             <option value="c#">C#</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// export default PortfolioCreateForm;
