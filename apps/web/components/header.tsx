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
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-medium" style={{ color: 'var(--foreground)' }}>
            Mauricio Acosta
          </h2>
        </div>
        <ThemeToggle />
      </div>
    </header>
  )
}