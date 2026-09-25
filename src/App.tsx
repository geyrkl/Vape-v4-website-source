const products = [
  { name: 'V4 Core', detail: 'Compact pod system, 800 mAh', price: '$29' },
  { name: 'V4 Pro', detail: 'Adjustable airflow, 1500 mAh', price: '$49' },
  { name: 'V4 Max', detail: 'Dual coil, 2500 mAh, USB-C fast charge', price: '$79' },
]

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          padding: '20px 32px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <span style={{ fontWeight: 700, letterSpacing: '0.08em', fontSize: 18 }}>VAPE V4</span>
        <nav style={{ display: 'flex', gap: 24, color: 'var(--muted)', fontSize: 14 }}>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main style={{ flex: 1, width: '100%', maxWidth: 1080, margin: '0 auto', padding: '64px 32px' }}>
        <section style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 640 }}>
          <h1 style={{ margin: 0, fontSize: 44, lineHeight: 1.1 }}>The V4 lineup</h1>
          <p style={{ margin: 0, color: 'var(--muted)', fontSize: 18, lineHeight: 1.6 }}>
            A starter storefront for the Vape V4 website. Replace this copy and imagery with the
            real brand content whenever it is ready.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
            <a
              href="#products"
              style={{
                padding: '12px 20px',
                borderRadius: 8,
                background: 'var(--accent)',
                color: '#06120f',
                fontWeight: 600,
              }}
            >
              Browse products
            </a>
            <a
              href="#about"
              style={{
                padding: '12px 20px',
                borderRadius: 8,
                border: '1px solid var(--border)',
                color: 'var(--text)',
              }}
            >
              Learn more
            </a>
          </div>
        </section>

        <section id="products" style={{ marginTop: 72 }}>
          <h2 style={{ margin: '0 0 24px', fontSize: 24 }}>Products</h2>
          <div
            style={{
              display: 'grid',
              gap: 16,
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            }}
          >
            {products.map((p) => (
              <article
                key={p.name}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                  padding: 20,
                  borderRadius: 12,
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                }}
              >
                <h3 style={{ margin: 0, fontSize: 18 }}>{p.name}</h3>
                <p style={{ margin: 0, color: 'var(--muted)', fontSize: 14, lineHeight: 1.5 }}>
                  {p.detail}
                </p>
                <span style={{ marginTop: 8, fontWeight: 600, color: 'var(--accent)' }}>{p.price}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="about" style={{ marginTop: 72, maxWidth: 640 }}>
          <h2 style={{ margin: '0 0 16px', fontSize: 24 }}>About</h2>
          <p style={{ margin: 0, color: 'var(--muted)', fontSize: 16, lineHeight: 1.7 }}>
            This page exists so the repository boots to a meaningful frontend inside an Alloy
            session. Structure, sections and styling are intentionally minimal and ready to be
            reshaped.
          </p>
        </section>
      </main>

      <footer
        id="contact"
        style={{
          padding: '24px 32px',
          borderTop: '1px solid var(--border)',
          color: 'var(--muted)',
          fontSize: 14,
        }}
      >
        Vape V4 — placeholder site. Contact: hello@example.com
      </footer>
    </div>
  )
}
