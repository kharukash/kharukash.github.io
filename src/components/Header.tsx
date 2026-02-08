import { Moon, Sun, Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ResumeModal from "@/components/ResumeModal";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="w-full px-[20px] h-16 flex items-center justify-between">
          <a href="#home" className="text-2xl font-heading font-bold text-foreground transition-all tracking-tight">
            ɑsh
          </a>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Others Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-base font-medium text-muted-foreground hover:text-foreground transition-colors outline-none">
                  Others
                  <ChevronDown size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-background border border-border z-50">
                  <DropdownMenuItem onClick={() => setIsResumeOpen(true)} className="cursor-pointer">
                    Resume
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/books")} className="cursor-pointer">
                    Books
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <button
                onClick={toggleTheme}
                className="p-2 text-foreground transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun size={20} strokeWidth={2} />
                ) : (
                  <Moon size={20} strokeWidth={2} fill="currentColor" />
                )}
              </button>
            </nav>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
            </button>
          )}
        </div>
      </header>

      {/* Mobile Slide-in Menu */}
      {isMobile && (
        <div 
          className={`fixed inset-0 z-40 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Background overlay */}
          <div className="absolute inset-0 bg-background" />
          
          {/* Spacer for header height */}
          <div className="h-16" />
          
          {/* Menu content */}
          <nav className="relative flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-2xl font-heading text-foreground hover:text-accent transition-colors"
              >
                {item.label}
              </button>
            ))}
            
            {/* Others section for mobile */}
            <button
              onClick={() => {
                setIsResumeOpen(true);
                setIsMenuOpen(false);
              }}
              className="text-2xl font-heading text-foreground hover:text-accent transition-colors"
            >
              Resume
            </button>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/books");
              }}
              className="text-2xl font-heading text-foreground hover:text-accent transition-colors"
            >
              Books
            </button>
            <button
              onClick={toggleTheme}
              className="mt-4 p-3 text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={24} /> : <Moon size={24} fill="currentColor" />}
            </button>
          </nav>
        </div>
      )}

      {/* Resume Modal */}
      <ResumeModal open={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
};

export default Header;
