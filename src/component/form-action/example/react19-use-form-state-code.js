export const react19UseFormStateCode = `
import { useFormState } from 'react-dom';

const submitAction = async (previousState, formData) => {
  const name = formData.get('name');
  await new Promise((resolve) => setTimeout(resolve, 1500));
  
  if (!name.trim()) return { error: 'Name is required' };
  return { success: \`Success! Hello \${name}\` };
};

const [state, formAction] = useFormState(submitAction, null);

return (
  <form action={formAction}>
    <input name="name" />
    <button type="submit">Submit</button>
    {state?.error && <p>{state.error}</p>}
  </form>
);
`;
