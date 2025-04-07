// app/layout.tsx
export const metadata = {
    title: 'Biblioteca Dois em Dois',
    description: 'E-books por R$2 com impacto social ❤️📚',
  }
  
  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="pt-br">
        <body style={{ fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
          {children}
        </body>
      </html>
    )
  }

  