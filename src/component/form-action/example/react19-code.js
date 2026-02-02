export const react19ExampleCode = `
// No State needed for simple forms
const handleAction = (formData) => {
  const name = formData.get('name');
  const email = formData.get('email');
  console.log('Action Data:', { name, email });
};

// Return in component
<form action={handleAction}>
  <input name="name" />
  <button type="submit">Submit</button>
</form>
`;
