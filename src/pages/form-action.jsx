import React, { useActionState } from 'react';
import React18Form from '../component/form-action/React18Form';
import React19Form from '../component/form-action/React19Form';

import React19UseFormStateForm from '../component/form-action/React19UseFormStateForm';
import React19UseFormStatusForm from '../component/form-action/React19UseFormStatusForm';
import React19UseActionStateForm from '../component/form-action/React19UseActionStateForm';

const FormActionPage = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">React 18 vs React 19 Form Comparison</h2>
      <div className="row g-4">
        <div className="col-lg-6 col-xl-3">
          <React18Form />
        </div>
        <div className="col-lg-6 col-xl-3">
          <React19Form />
        </div>
        <div className="col-lg-6 col-xl-3">
          <React19UseFormStateForm />
        </div>
        <div className="col-lg-6 col-xl-3">
          <React19UseFormStatusForm />
        </div>
        <div className="col-lg-6 col-xl-3">
          <React19UseActionStateForm />
        </div>
      </div>
    </div>
  );
}

export default FormActionPage;