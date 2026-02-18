import React from 'react';
import MetaDataReact18 from '../component/metadata/MetaDataReact18';
import MetaDataReact19 from '../component/metadata/MetaDataReact19';
import MetaDataComparison from '../component/metadata/MetaDataComparison';
import PageHeader from '../component/common/PageHeader';

export default function MetaData() {
  return (
    <>
      <PageHeader title="React 19 Metadata" description="No more react-helmet. React 19 natively renders and hoists title and meta tags." />

        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2.5rem',
            marginBottom: '8rem'
        }}>
            <MetaDataReact18 />
            <MetaDataReact19 />
            <div style={{ gridColumn: '1 / -1' }}>
                <MetaDataComparison />
            </div>
        </div>

        <style>{`
            @media (max-width: 1100px) {
                div[style*="gridTemplateColumns: repeat(2, 1fr)"] {
                    grid-template-columns: 1fr !important;
                }
            }
        `}</style>
    </>
  );
}
