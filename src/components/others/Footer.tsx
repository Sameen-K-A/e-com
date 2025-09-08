import { ROUTE } from "@/constants/routes";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const defaultSections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
    ],
  },
  {
    title: "Other",
    links: [
      { name: "About", href: "#" },
      { name: "Terms", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
  { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
  { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
];

export const Footer = () => {
  return (
    <footer className="py-10 px-4 md:px-8 border-t">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row w-full justify-between gap-10">
          <div className="flex w-full items-center md:items-start flex-col gap-4">
            <div className="flex items-center gap-2 lg:justify-start">
              <Link href={ROUTE.HOME}>
                <h3 className='font-logo text-2xl font-bold'>
                  E-<span className="bg-gradient-to-l from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">Com</span>
                </h3>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Your one-stop shop for fashion, electronics, and lifestyle products. Quality and style delivered to your doorstep.
            </p>
            <ul className="flex items-center space-x-6 text-muted-foreground">
              {defaultSocialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-primary">
                  <Link href={social.href} aria-label={social.label}>
                    {social.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex w-full md:w-md justify-around gap-4">
            {defaultSections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-sm text-center">{section.title}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground text-center">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link href={link.href} className="font-medium hover:text-primary hover:underline hover:underline-offset-2">{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="my-10 flex flex-col items-center w-full gap-2 text-xs font-medium text-muted-foreground">
          <p>© ${new Date().getFullYear()} E-com All rights reserved.</p>
          <ul className="flex justify-center gap-4">
            <li className="hover:text-primary hover:underline hover:underline-offset-2">
              <Link href="">Terms and Conditions</Link>
            </li>
            <li className="hover:text-primary hover:underline hover:underline-offset-2">
              <Link href="">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};