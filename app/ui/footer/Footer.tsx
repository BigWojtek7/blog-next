import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { FaGithub as Github, FaTwitter as Twitter } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border py-6">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-4 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} MyBlog. Wszelkie prawa zastrzeżone.
        </p>
        <Separator className="w-full" />
        <div className="flex gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/myblog" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://twitter.com/myblog" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}