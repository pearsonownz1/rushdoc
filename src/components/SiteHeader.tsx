import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Shield } from "lucide-react"; // Assuming Shield is used for logo placeholder

const SiteHeader = () => {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" to="/">
             <img src="/logo.png" alt="RushDoc Logo" className="h-6 w-6" />
             <span className="hidden font-bold sm:inline-block">RushDoc.com</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center transition-colors hover:text-foreground/80 text-foreground/60 focus:outline-none">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/service/divorce">Uncontested Divorce</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/service/trust">Estate Planning (Trusts)</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/service/will">Estate Planning (Wills)</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* Using anchor links for sections on HomePage, adjust if these become separate pages */}
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/#how-it-works">How It Works</a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/#pricing">Pricing</a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/#faq">FAQ</a>
          </nav>
        </div>
        {/* Mobile nav could be added here */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            {/* TODO: Implement actual Login functionality */}
            <Button variant="outline" size="sm">Login</Button>
            {/* TODO: Determine best "Get Started" destination - maybe questionnaire selection? */}
            <Button size="sm" onClick={() => navigate('/')}>Get Started</Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
