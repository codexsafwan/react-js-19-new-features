import UseFetchExample from '../component/use-hook/UseFetchExample'
import UseContextExample from '../component/use-hook/UseContextExample'
import ContextReplacementExample from '../component/use-hook/ContextReplacementExample'
import ContextSimplifiedExample from '../component/use-hook/ContextSimplifiedExample'
import ErrorHandlingExample from '../component/use-hook/ErrorHandlingExample'
import UseHookInfo from '../component/use-hook/UseHookInfo'

export const UseHookPage = () => {
  return (
    <div className="container py-5">
      {/* Header */}
      <div className="text-center mb-5">
        <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
          <span className="badge bg-dark px-3 py-2">React 19</span>
          <a 
            href="https://github.com/codexsafwan/react-js-19-new-features" 
            target="_blank" 
            rel="noopener noreferrer"
            className="badge bg-secondary text-decoration-none px-3 py-2"
          >
            GitHub
          </a>
        </div>
        <h1 className="display-4 fw-bold mb-2">
          The <span className="text-primary">use()</span> Hook
        </h1>
        <p className="lead text-muted">
          Declarative data fetching and context reading in React 19
        </p>
      </div>

      {/* Main Grid */}
      <div className="row g-4 mb-5">
        <div className="col-lg-6">
          <div className="d-flex flex-column gap-4">
            <UseFetchExample />
            <UseContextExample />
            <ErrorHandlingExample />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="d-flex flex-column gap-4">
            <ContextSimplifiedExample />
            <ContextReplacementExample />
            <UseHookInfo />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 border-top">
        <a 
          href="https://github.com/codexsafwan/react-js-19-new-features" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-muted text-decoration-none"
        >
          View Source on GitHub
        </a>
      </footer>
    </div>
  )
}
