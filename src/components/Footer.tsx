import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/dhruv-varachhiya-a94a43297/", label: "LinkedIn" },
    { icon: <Github className="w-5 h-5" />, href: "https://github.com", label: "GitHub" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:dhruvofficial0108@gmail.com", label: "Email" },
  ];

  return (
    <footer className="py-16 px-6 border-t border-border/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-sm text-muted-foreground font-inter">
            © 2024 Journey Portfolio. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-3 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;