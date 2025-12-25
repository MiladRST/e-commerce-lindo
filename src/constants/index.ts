import type { LucideIcon } from "lucide-react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
export const NAVIGATION_ITEMS = [
    {
        label: "Home",
        href: "/", 
    },
    {
        label: "Shop",
        href: "/products",
    },
    {
        label: "About Us",
        href: "/about",
    },
    {
        label: "Contact Us",
        href: "/contact",
    },  
    {
        label: "FAQ",
        href: "/faq",
    },
];

export const FOOTER_LINKS = [
    {
        label: "FAQ",
        href: "/faq",
    },
    {
        label: 'lorem epsum',
        href: '/'
    },
    {
        label: "Privacy Policy",
        href: "/privacy",
    },
    {
        label: "Terms & Conditions",
        href: "/terms",
    },
];

export const SOCIAL_LINKS = [
    {
        label: "Facebook",
        href: "https://www.facebook.com",
        icon: Facebook as LucideIcon
    },
    {
        label: "Twitter",
        href: "https://www.twitter.com",
        icon: Twitter as LucideIcon
    },
    {
        label: "Linkedin",
        href: "https://www.linkedin.com",
        icon: Linkedin as LucideIcon
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com",
        icon: Instagram as LucideIcon
    },
];