"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { toast } from "sonner"
import {
  FileText,
  FolderKanban,
  Github,
  Home,
  Linkedin,
  Mail,
  Moon,
  Sparkles,
  Sun,
  User,
} from "lucide-react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { projects } from "@/data/projects"

const EMAIL = "gregorytemwa1212@gmail.com"
const GITHUB_URL = "https://github.com/youneedgreg"
const LINKEDIN_URL = "https://www.linkedin.com/in/gregory-temwa-718339245/"

type CommandPaletteContextValue = {
  open: boolean
  setOpen: (open: boolean) => void
}

const CommandPaletteContext = React.createContext<CommandPaletteContextValue | null>(null)

export function useCommandPalette() {
  const context = React.useContext(CommandPaletteContext)
  if (!context) {
    throw new Error("useCommandPalette must be used within a CommandPaletteProvider")
  }
  return context
}

export function CommandPaletteProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()
  const { resolvedTheme, setTheme } = useTheme()

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setOpen((value) => !value)
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false)
    command()
  }, [])

  return (
    <CommandPaletteContext.Provider value={{ open, setOpen }}>
      {children}
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Command palette"
        description="Search pages, projects, and quick actions"
      >
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
              <Home />
              Home
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/about"))}>
              <User />
              About
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/projects"))}>
              <FolderKanban />
              Projects
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/fun"))}>
              <Sparkles />
              Fun
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/cv"))}>
              <FileText />
              CV
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/#contact"))}>
              <Mail />
              Contact
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Projects">
            {projects.map((project) => (
              <CommandItem
                key={project.slug}
                value={`${project.title} ${project.tags.join(" ")}`}
                onSelect={() => runCommand(() => router.push(`/projects/${project.slug}`))}
              >
                <FolderKanban />
                {project.title}
                <CommandShortcut>{project.year}</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Actions">
            <CommandItem
              onSelect={() =>
                runCommand(() => setTheme(resolvedTheme === "dark" ? "light" : "dark"))
              }
            >
              {resolvedTheme === "dark" ? <Sun /> : <Moon />}
              Toggle theme
            </CommandItem>
            <CommandItem
              onSelect={() =>
                runCommand(() => {
                  navigator.clipboard.writeText(EMAIL)
                  toast.success("Email copied to clipboard")
                })
              }
            >
              <Mail />
              Copy email address
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => window.open(GITHUB_URL, "_blank", "noopener,noreferrer"))}
            >
              <Github />
              Open GitHub profile
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => window.open(LINKEDIN_URL, "_blank", "noopener,noreferrer"))}
            >
              <Linkedin />
              Open LinkedIn profile
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/cv"))}>
              <FileText />
              View CV
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </CommandPaletteContext.Provider>
  )
}
