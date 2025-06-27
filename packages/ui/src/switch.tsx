"use client"

import * as React from "react"

export interface SwitchProps {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  className?: string
  id?: string
  children?: React.ReactNode // For custom thumb content
}

const Switch = React.forwardRef<
  React.ElementRef<"button">,
  SwitchProps
>(({ className = "", checked, onCheckedChange, disabled, id, children, ...props }, ref) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    data-state={checked ? "checked" : "unchecked"}
    disabled={disabled}
    style={{
      display: 'inline-flex',
      height: '24px',
      width: '44px',
      alignItems: 'center',
      borderRadius: '9999px',
      backgroundColor: checked ? '#2563eb' : '#d1d5db',
      position: 'relative',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      padding: '2px'
    }}
    className={className}
    id={id}
    ref={ref}
    onClick={() => onCheckedChange?.(!checked)}
    {...props}
  >
    <span
      data-state={checked ? "checked" : "unchecked"}
      style={{
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '20px',
        width: '20px',
        borderRadius: '50%',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        transform: checked ? 'translateX(20px)' : 'translateX(0px)',
        transition: 'transform 0.2s ease'
      }}
    >
      {children}
    </span>
  </button>
))

Switch.displayName = "Switch"

export { Switch }