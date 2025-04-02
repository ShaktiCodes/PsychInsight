"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Brain, FileText, Home, Settings, Upload, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface DashboardNavProps {
  isCollapsed?: boolean
}

export function DashboardNav({ isCollapsed }: DashboardNavProps) {
  const pathname = usePathname()

  const navItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: Home,
    },
    {
      title: "Upload Data",
      href: "/dashboard/upload",
      icon: Upload,
    },
    {
      title: "Personality",
      href: "/dashboard/personality",
      icon: User,
    },
    {
      title: "Emotions",
      href: "/dashboard/emotions",
      icon: BarChart3,
    },
    {
      title: "Reports",
      href: "/dashboard/reports",
      icon: FileText,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ]

  return (
    <div className={cn("group border-r bg-sidebar md:w-60", isCollapsed && "md:w-14")}>
      <div className="flex h-full flex-col gap-2 p-2">
        <div className="flex h-14 items-center justify-center border-b px-2">
          {!isCollapsed && (
            <div className="flex items-center gap-2 font-semibold">
              <Brain className="h-6 w-6 text-primary" />
              <span>PsychInsight</span>
            </div>
          )}
        </div>
        <nav className="grid gap-1 px-2 py-3 group-[[data-collapsed=true]]:justify-center">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-primary-50 hover:text-primary-700",
              )}
            >
              <item.icon className={cn("h-5 w-5", pathname === item.href ? "text-white" : "text-gray-500")} />
              {!isCollapsed && <span>{item.title}</span>}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

