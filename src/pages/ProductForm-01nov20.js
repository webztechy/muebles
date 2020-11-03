import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePageTitle } from './../actions';

const ProductForm = ( { initialValues, validate } ) => {

    const dispatch = useDispatch();
    dispatch( updatePageTitle('Product Form') );

    /*  useEffect( () => {
        dispatch( updatePageTitle('Product Form') );
    },[]);  */

    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});


    // change event handler
    const handleChange = evt => {
        const { name, value: newValue, type } = evt.target;

        // keep number fields as numbers
        const value = type === 'number' ? +newValue : newValue;

        // save field values
        setValues({
        ...values,
        [name]: value,
        });

        // was the field modified
        setTouched({
        ...touched,
        [name]: true,
        });

    };

    const handleBlur = evt => {
        const { name, value } = evt.target;
    
        // remove whatever error was there previously
        const { [name]: removedError, ...rest } = errors;
    
        // check for a new error
        const error = validate[name](value);
    
        // // validate the field if the value has been touched
        setErrors({
          ...rest,
          ...(error && { [name]: touched[name] && error }),
        });
      };
    
      // form submit handler
      const handleSubmit = evt => {
        evt.preventDefault();
    
        // validate the form
        const formValidation = Object.keys(values).reduce(
          (acc, key) => {
            const newError = validate[key](values[key]);
            const newTouched = { [key]: true };
            return {
              errors: {
                ...acc.errors,
                ...(newError && { [key]: newError }),
              },
              touched: {
                ...acc.touched,
                ...newTouched,
              },
            };
          },
          {
            errors: { ...errors },
            touched: { ...touched },
          },
        );
        setErrors(formValidation.errors);
        setTouched(formValidation.touched);
    
        if (
          !Object.values(formValidation.errors).length && // errors object is empty
          Object.values(formValidation.touched).length ===
            Object.values(values).length && // all fields were touched
          Object.values(formValidation.touched).every(t => t === true) // every touched field is true
        ) {
          alert(JSON.stringify(values, null, 2));
        }
      };

    return (
        <div className="card card-primary">
            <div className="card-header">
                <h3 className="card-title">Quick Example <small>jQuery Validation</small></h3>
            </div>
            <form role="form" id="quickForm" handleBlur={handleBlur}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                errors={errors}
                touched={touched}
                values={values}>
                <div className="card-body">
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" name="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"></input>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                    </div>
                    <div className="form-group mb-0">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" name="terms" className="custom-control-input" id="exampleCheck1"></input>
                            <label className="custom-control-label" for="exampleCheck1">I agree to the <a href="#">terms of service</a>.</label>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>

        </div>
    )
}

export default ProductForm;