import { ThemeToggle } from './theme-toggle'

export function Header() {
  return (
    <header 
      className="w-full border-b" 
      style={{ 
        backgroundColor: 'var(--background)',
        borderColor: 'var(--gray-alpha-200, rgba(0, 0, 0, 0.08))'
      }}
    >
      <div className="flex h-16 items-center justify-center px-4">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-medium" style={{ color: 'var(--foreground)' }}>
            Mauricio Acosta
          </h2>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}