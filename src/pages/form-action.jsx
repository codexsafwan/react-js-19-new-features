import React18Form from '../component/form-action/React18Form';
import React19Form from '../component/form-action/React19Form';

import React19UseFormStateForm from '../component/form-action/React19UseFormStateForm';
import React19UseFormStatusForm from '../component/form-action/React19UseFormStatusForm';
import React19UseActionStateForm from '../component/form-action/React19UseActionStateForm';
import FormComparison from '../component/form-action/FormComparison';

const FormActionPage = () => {
    return (
        <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '4rem 2rem',
            background: 'radial-gradient(circle at top right, hsl(var(--primary-light) / 0.5), transparent 40%), radial-gradient(circle at bottom left, hsl(var(--secondary-light) / 0.5), transparent 40%)',
            minHeight: '100vh'
        }}>
            <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <div className="badge badge-primary" style={{ marginBottom: '1rem', padding: '0.4rem 1.25rem', letterSpacing: '0.1em' }}>
                    CodexLab
                </div>
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                    fontWeight: '950',
                    marginBottom: '1rem',
                    letterSpacing: '-0.06em',
                    lineHeight: '0.9',
                    color: 'hsl(var(--foreground))'
                }}>
                    React 19 <span style={{
                        background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>Form</span> Actions
                </h1>
                <p style={{
                    fontSize: '1.25rem',
                    color: 'hsl(var(--foreground) / 0.7)',
                    maxWidth: '800px',
                    margin: '0 auto',
                    lineHeight: '1.4',
                    fontWeight: '400'
                }}>
                    Explore the new patterns for handling form state and actions natively in React 19.
                </p>
            </header>

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