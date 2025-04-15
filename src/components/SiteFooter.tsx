import React from "react";
import { Link } from "react-router-dom"; // Import Link for internal navigation

const SiteFooter = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Column */}
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
              {/* Placeholder links - replace # with actual paths when available */}
              <li><a href="#" className="text-muted-foreground hover:text-primary">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Offers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Become an Affiliate</a></li>
            </ul>
          </div>
          {/* Services Column */}
          <div>
            <h3 className="font-medium mb-4">Services</h3>
             <ul className="space-y-2 text-sm">
                <li><Link to="/service/trust" className="text-muted-foreground hover:text-primary">Estate Planning (Trusts)</Link></li>
                <li><Link to="/service/will" className="text-muted-foreground hover:text-primary">Estate Planning (Wills)</Link></li>
                <li><Link to="/service/divorce" className="text-muted-foreground hover:text-primary">Uncontested Divorce</Link></li>
              </ul>
          </div>
           {/* Legal Column */}
           <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-muted-foreground hover:text-primary">Terms of Use</Link></li>
               <li><a href="#" className="text-muted-foreground hover:text-primary">Disclaimer</a></li> {/* Placeholder */}
            </ul>
          </div>
          {/* Contact Column */}
          <div>
             <h3 className="font-medium mb-4">Contact</h3>
             <address className="text-sm text-muted-foreground not-italic space-y-1">
                <p>RushDoc.com</p>
                {/* TODO: Replace with actual address */}
                <p>123 Example St</p>
                <p>Newark, DE 19711</p>
             </address>
              {/* Social Media Icons Placeholder */}
              <div className="flex space-x-4 mt-4">
                 {/* TODO: Replace with actual SVG icons and links */}
                 <a href="#" aria-label="Instagram"><svg className="h-5 w-5 text-muted-foreground hover:text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/></svg></a>
                 <a href="#" aria-label="Facebook"><svg className="h-5 w-5 text-muted-foreground hover:text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/></svg></a>
                 <a href="#" aria-label="LinkedIn"><svg className="h-5 w-5 text-muted-foreground hover:text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/></svg></a>
              </div>
           </div>
         </div>
         {/* Copyright & Disclaimer */}
        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} RushDoc.com. All rights reserved.</p>
          <p className="mt-2">
            This website provides information about legal documents and access to document preparation services. We are not a law firm and do not provide legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
