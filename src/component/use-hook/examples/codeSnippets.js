// Lesson 01: Declarative Data Fetching
export const useFetchCode = `// BEFORE (React 18)
function OldFetch() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData().then(res => setData(res));
  }, []);
  return <div>{data?.text}</div>;
}

// AFTER (React 19)
function NewFetch({ promise }) {
  const data = use(promise);
  return <div>{data.text}</div>;
}`;

// Lesson 02: Conditional Context
export const useContextCode = `// BEFORE (React 18)
function BadTheme() {
  const theme = useContext(ThemeContext);
  if (!shouldShow) return null;
  return <div>{theme}</div>;
}

// AFTER (React 19)
function GoodTheme() {
  if (!shouldShow) return null;
  const theme = use(ThemeContext);
  return <div>{theme}</div>;
}`;

// Lesson 03: Error Handling
export const errorHandlingCode = `// React 19 Error Handling
<ErrorBoundary fallback={err => <ErrorUI />}>
  <Suspense fallback={<Loading />}>
    <Resource promise={fetchPromise} />
  </Suspense>
</ErrorBoundary>

function Resource({ promise }) {
  const data = use(promise);
  return <div>{data}</div>;
}`;

// Lesson 04: Simplified Context
export const contextSimplifiedCode = `// BEFORE: Deeply nested providers
<ThemeContext.Provider value={theme}>
  <UserContext.Provider value={user}>
    <App />
  </UserContext.Provider>
</ThemeContext.Provider>

// AFTER: use() reads anywhere
function Component() {
  const theme = use(ThemeContext);
  const user = use(UserContext);
  return <div>{theme}</div>;
}`;

// Lesson 05: Context Replacement
export const contextReplacementCode = `// BEFORE (React 18)
function OldComponent() {
  const context = useContext(MyContext);
  return <div>{context.value}</div>;
}

// AFTER (React 19)
function NewComponent({ shouldRead }) {
  if (shouldRead) {
    const context = use(MyContext);
    return <div>{context.value}</div>;
  }
  return null;
}`;
