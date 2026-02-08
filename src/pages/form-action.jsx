import React18Form from '../component/form-action/React18Form';
import React19Form from '../component/form-action/React19Form';

import React19UseFormStateForm from '../component/form-action/React19UseFormStateForm';
import React19UseFormStatusForm from '../component/form-action/React19UseFormStatusForm';
import React19UseActionStateForm from '../component/form-action/React19UseActionStateForm';
import FormComparison from '../component/form-action/FormComparison';
import PageHeader from '../component/common/PageHeader';

const FormActionPage = () => {
    return (
        <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '4rem 2rem',
            background: 'radial-gradient(circle at top right, hsl(var(--primary-light) / 0.5), transparent 40%), radial-gradient(circle at bottom left, hsl(var(--secondary-light) / 0.5), transparent 40%)',
            minHeight: '100vh'
        }}>

         
            <PageHeader title="React 19 Form Actions" description="Explore the new patterns for handling form state and actions natively in React 19." />

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '2.5rem',
                marginBottom: '8rem'
            }}>
                <React18Form />
                <React19Form />
                <React19UseFormStateForm />
                <React19UseFormStatusForm />
                <React19UseActionStateForm />
                <FormComparison />
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

export default FormActionPage;