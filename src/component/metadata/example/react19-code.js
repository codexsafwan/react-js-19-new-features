export const react19MetaCode = `// React 19: Native support!
// Just render them anywhere in your component tree.

const MetaDataReact19 = () => {
  return (
    <>
      {/* React hoists these to the <head> automatically */}
      <title>Dashboard - React 19</title>
      <meta name="description" content="Native metadata support is here!" />
      <meta name="keywords" content="react19, metadata, hoist" />
      
      {/* Open Graph works too */}
      <meta property="og:title" content="React 19 Dashboard" />
      <meta property="og:type" content="website" />

      <main>
        <h1>Dashboard</h1>
        {/* The tags above are NOT rendered here in the DOM.
            They are moved to <head> */ }
      </main>
    </>
  );
};`;
