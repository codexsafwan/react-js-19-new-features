import React from 'react';
import CommentReact19 from '../component/optimistic/CommentReact19';
import CommentReact18 from '../component/optimistic/CommentReact18';
import OptimisticComparison from '../component/optimistic/OptimisticComparison';
import PageHeader from '../component/common/PageHeader';

const OptimisticPage = () => {
    return (
        <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '4rem 2rem',
            background: 'radial-gradient(circle at top right, hsl(var(--primary-light) / 0.5), transparent 40%), radial-gradient(circle at bottom left, hsl(var(--secondary-light) / 0.5), transparent 40%)',
            minHeight: '100vh'
        }}>
  
           <PageHeader title="React 19 Optimistic" description="Native support for optimistic UI updates in React 19 using the new useOptimistic hook." />
            
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '2.5rem',
                marginBottom: '8rem'
            }}>
                <CommentReact18 />
                <CommentReact19 />
                <div style={{ gridColumn: '1 / -1' }}>
                    <OptimisticComparison />
                </div>
            </div>

            <style>{`
                @media (max-width: 1100px) {
                    div[style*="gridTemplateColumns: repeat(2, 1fr)"] {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default OptimisticPage;