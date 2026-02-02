export const react19UseFormStatusCode = `
import { useFormStatus } from 'react-dom';

// Child component needed for useFormStatus
const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
};

// Parent Component
const [state, formAction] = useFormState(submitAction, null);

return (
  <form action={formAction}>
    <input name="name" />
    <SubmitButton /> 
  </form>
);
`;
