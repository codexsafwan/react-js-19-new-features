const PageHeader = ({title, description}) => {
  return (
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
                   {title}
                </h1>
                <p style={{
                    fontSize: '1.25rem',
                    color: 'hsl(var(--foreground) / 0.7)',
                    maxWidth: '800px',
                    margin: '0 auto',
                    lineHeight: '1.4',
                    fontWeight: '400'
                }}>
                    {description}
                </p>
            </header>  )
}

export default PageHeader