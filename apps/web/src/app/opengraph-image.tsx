import { ImageResponse } from 'next/og'

export const alt = 'veidjz - Joao Victor Veidz, Software Engineer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 72,
        background: '#F4F2EF',
        color: '#1C1917',
      }}
    >
      <div
        style={{
          display: 'flex',
          fontSize: 88,
          fontWeight: 700,
          letterSpacing: '-0.04em',
          color: '#7A1F2E',
          lineHeight: 1,
        }}
      >
        veidjz
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div
          style={{
            display: 'flex',
            fontSize: 44,
            fontWeight: 600,
            lineHeight: 1.2,
          }}
        >
          Joao Victor Veidz
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 30,
            color: '#57534E',
            lineHeight: 1.3,
          }}
        >
          Software Engineer | Full Stack & Mobile
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  )
}
