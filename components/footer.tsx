import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    tentang: [
      { label: "Tentang Kami", href: "#" },
      { label: "Tim Kami", href: "#" },
      { label: "Karir", href: "#" },
      { label: "Blog", href: "#" },
    ],
    layanan: [
      { label: "Destinasi Populer", href: "#" },
      { label: "Paket Wisata", href: "#" },
      { label: "Pemandu Wisata", href: "#" },
      { label: "Jadi Mitra", href: "#" },
    ],
    bantuan: [
      { label: "Bantuan", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Kontak Kami", href: "#" },
      { label: "Syarat dan Ketentuan", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "GDPR", href: "/gdpr" },
      { label: "Refund Policy", href: "/refund" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  const contactInfo = [
    { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: Mail, text: "hello@company.com", href: "mailto:hello@company.com" },
    { icon: MapPin, text: "123 Business St, City, State 12345" },
  ];

  return (
    <footer className="w-full bg-neutral-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
          {/* Company Info */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="Company Logo"
                width={150}
                height={150}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-neutral-400 mb-6 leading-relaxed max-w-xs">
              We provide exceptional packages and services to help you achieve
              your goals. Trust us to deliver quality solutions tailored to your
              needs.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-opacity-50"
                    aria-label={social.label}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Tentang</h4>
            <ul className="space-y-3">
              {footerLinks.tentang.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-300 focus:outline-none focus:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Layanan</h4>
            <ul className="space-y-3">
              {footerLinks.layanan.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-300 focus:outline-none focus:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Bantuan</h4>
            <ul className="space-y-3">
              {footerLinks.bantuan.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-300 focus:outline-none focus:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Kontak</h4>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                const content = (
                  <div className="flex items-start gap-3 text-neutral-400 hover:text-white transition-colors duration-300">
                    <IconComponent size={20} className="mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{contact.text}</span>
                  </div>
                );

                return (
                  <li key={index}>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="focus:outline-none focus:text-white"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-neutral-800">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-neutral-400 text-sm flex items-center gap-1">
              © {currentYear} Your Company Name. Made with
              <Heart size={16} className="text-red-500 mx-1" />
              All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6">
              {footerLinks.legal.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-neutral-400 hover:text-white text-sm transition-colors duration-300 focus:outline-none focus:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
