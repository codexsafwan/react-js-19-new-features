import UseFetchExample from '../component/use-hook/UseFetchExample'
import UseContextExample from '../component/use-hook/UseContextExample'
import ContextReplacementExample from '../component/use-hook/ContextReplacementExample'
import ContextSimplifiedExample from '../component/use-hook/ContextSimplifiedExample'
import ErrorHandlingExample from '../component/use-hook/ErrorHandlingExample'
import UseHookInfo from '../component/use-hook/UseHookInfo'
import PageHeader from '../component/common/PageHeader'

export const UseHookPage = () => {
  return (
    <div className="container py-5">
 
      <PageHeader title="React 19 Use Hook" description="Declarative data fetching and context reading in React 19" />

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

    </div>
  )
}
