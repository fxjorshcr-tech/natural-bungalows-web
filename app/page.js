export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#f5f0eb',
      color: '#2d2d2d',
    }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: 300,
        letterSpacing: '0.1em',
        marginBottom: '0.5rem',
      }}>
        Natural Bungalows
      </h1>
      <p style={{
        fontSize: '1.2rem',
        color: '#6b6b6b',
        fontWeight: 300,
      }}>
        Proximamente
      </p>
    </main>
  )
}
