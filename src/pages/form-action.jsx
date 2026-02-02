import React, { useActionState } from 'react';
import React18Form from '../component/form-action/React18Form';

// 2. React 19 Form (Simple Action Prop)
const React19Form = () => {
  // Action function automatically receives FormData
  const handleAction = (formData) => {
    const name = formData.get('name');
    const email = formData.get('email');
    console.log('React 19 Action Data:', { name, email });
    alert('React 19 Action: Check Console for data');
  };

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-header bg-success text-white">
        <h5 className="mb-0">React 19 Form</h5>
        <small>(action prop)</small>
      </div>
      <div className="card-body">
        {/* React 19 allows functions passed to action prop */}
        <form action={handleAction}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" name="name" className="form-control" placeholder="Enter name" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control" placeholder="Enter email" required />
          </div>
          <button type="submit" className="btn btn-success w-100">Submit (React 19)</button>
        </form>
      </div>
    </div>
  );
};

// 3. React 19 Form (useActionState)
// Define action outside component or use useCallback needed if stable reference required (though simple function works here)
const submitAction = async (previousState, formData) => {
  const name = formData.get('name');

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  if (name.trim() === '') {
    return { error: 'Name is required' };
  }

  // Return new state
  return { success: `Successfully registered ${name}!` };
};

const React19UseActionStateForm = () => {
  // useActionState(actionFn, initialState)
  const [state, formAction, isPending] = useActionState(submitAction, null);

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-header bg-dark text-white">
        <h5 className="mb-0">React 19 useActionState</h5>
        <small>(State management & Pending)</small>
      </div>
      <div className="card-body">
        <form action={formAction}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" name="name" className="form-control" placeholder="Enter name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control" placeholder="Enter email" />
          </div>

          <button type="submit" className="btn btn-dark w-100" disabled={isPending}>
            {isPending ? 'Submitting...' : 'Submit with State'}
          </button>

          {/* Display feedback based on returned state */}
          {state?.error && <div className="alert alert-danger mt-3">{state.error}</div>}
          {state?.success && <div className="alert alert-success mt-3">{state.success}</div>}
        </form>
      </div>
    </div>
  );
};

const FormActionPage = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">React 18 vs React 19 Form Comparison</h2>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <React18Form />
        </div>
        <div className="col-lg-4 col-md-6">
          <React19Form />
        </div>
        <div className="col-lg-4 col-md-6">
          <React19UseActionStateForm />
        </div>
      </div>
    </div>
  );
}

export default FormActionPage;