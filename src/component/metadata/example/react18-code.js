export const react18MetaCode = `// React 18: Requires external libraries like react-helmet
import { Helmet } from "react-helmet";

const MetaDataReact18 = () => {
  return (
    <div className="wrapper">
      <Helmet>
        <title>Dashboard - React 18</title>
        <meta name="description" content="Old way of handling metadata" />
        <meta property="og:title" content="Dashboard" />
      </Helmet>

      <h1>Dashboard</h1>
      {/* Content... */}
    </div>
  );
};

// OR: Manual DOM manipulation (messy)
// useEffect(() => {
//   document.title = "Dashboard";
//   const meta = document.createElement('meta');
//   meta.name = "description";
//   // ... cleanup logic required
// }, []);`;
