import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'xl' | 'icon'
}

const getVariantClasses = (variant: string = 'default') => {
  const variants = {
    default: "bg-gray-900 text-white hover:bg-gray-800 shadow-sm",
    destructive: "bg-red-600 text-white hover:bg-red-700 shadow-sm",
    outline: "border border-gray-300 bg-white hover:bg-gray-50 shadow-sm",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 shadow-sm",
    ghost: "hover:bg-gray-100",
    link: "text-blue-600 underline-offset-4 hover:underline",
  }
  return variants[variant as keyof typeof variants] || variants.default
}

const getSizeClasses = (size: string = 'default') => {
  const sizes = {
    default: "h-9 px-6 py-2",
    sm: "h-8 px-4 text-sm",
    lg: "h-10 px-8",
    xl: "h-12 px-10 text-lg",
    icon: "h-9 w-9",
  }
  return sizes[size as keyof typeof sizes] || sizes.default
}

function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
        getVariantClasses(variant),
        getSizeClasses(size),
        className
      )}
      {...props}
    />
  )
}

export { Button }
