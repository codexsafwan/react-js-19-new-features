import React from 'react'
import PageHeader from '../component/common/PageHeader'
import RefComparison from '../component/forward-ref/RefComparison'
import RealLifeExample from '../component/forward-ref/RealLifeExample'

const ForwardRefPage = () => {
    return (
        <>
            <PageHeader 
                title="React 19 forwardRef" 
                description="Refs are now props. No more forwardRef wrapper needed for functional components." 
            />

            <div className="row g-4 mb-5">
                <div className="col-lg-6">
                    <div className="d-flex flex-column gap-4">
                        <RefComparison />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="d-flex flex-column gap-4">
                        <RealLifeExample />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForwardRefPage