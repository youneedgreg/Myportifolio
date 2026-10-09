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
  PenLine,
  Route,
  Clock,
  Wrench,
  FlaskConical,
  Compass,
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
import { getSortedPosts } from "@/data/blog"
import { projects } from "@/data/projects"
import { exploreNav } from "@/data/navigation"
import XLogo from "@/components/icons/x-logo"

const exploreIcons: Record<string, React.ComponentType> = {
  "/journey": Route,
  "/now": Clock,
  "/uses": Wrench,
  "/lab": FlaskConical,
}

const EMAIL = "gregorytemwa1212@gmail.com"
const GITHUB_URL = "https://github.com/youneedgreg"
const LINKEDIN_URL = "https://www.linkedin.com/in/youneedgreg/"
const X_URL = "https://x.com/youneedgreg"

const posts = getSortedPosts()

export default function CommandPaletteDialog({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: (open: boolean) => void
}) {
  const router = useRouter()
  const { resolvedTheme, setTheme } = useTheme()

  const runCommand = React.useCallback(
    (command: () => void) => {
      setOpen(false)
      command()
    },
    [setOpen],
  )

  return (
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
          <CommandItem onSelect={() => runCommand(() => router.push("/blog"))}>
            <PenLine />
            Blog
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Get lost">
          {exploreNav.map((link) => {
            const Icon = exploreIcons[link.href] ?? Compass
            return (
              <CommandItem
                key={link.href}
                value={`${link.label} ${link.teaser ?? ""}`}
                onSelect={() => runCommand(() => router.push(link.href))}
              >
                <Icon />
                {link.label}
                <CommandShortcut>g {link.shortcut}</CommandShortcut>
              </CommandItem>
            )
          })}
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
        <CommandGroup heading="Blog">
          {posts.map((post) => (
            <CommandItem
              key={post.slug}
              value={`${post.title} ${post.tags.join(" ")}`}
              onSelect={() => runCommand(() => router.push(`/blog/${post.slug}`))}
            >
              <PenLine />
              {post.title}
              <CommandShortcut>{post.date.slice(0, 4)}</CommandShortcut>
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
          <CommandItem
            onSelect={() => runCommand(() => window.open(X_URL, "_blank", "noopener,noreferrer"))}
          >
            <XLogo />
            Open X (Twitter) profile
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/cv"))}>
            <FileText />
            View CV
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
