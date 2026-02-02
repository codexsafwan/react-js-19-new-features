export const react19UseActionStateCode = `
// Define action (async)
const submitAction = async (previousState, formData) => {
  const name = formData.get('name');
  await new Promise((resolve) => setTimeout(resolve, 1500));
  
  if (!name.trim()) return { error: 'Name is required' };
  return { success: \`Success! Hello \${name}\` };
};

// In Component
const [state, formAction, isPending] = useActionState(submitAction, null);

return (
  <form action={formAction}>
    <input name="name" />
    <button disabled={isPending}>
      {isPending ? 'Submitting...' : 'Submit'}
    </button>
    {state?.error && <p>{state.error}</p>}
  </form>
);
`;
