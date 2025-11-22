import type { LucideIcon } from "lucide-react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
export const NAVIGATION_ITEMS = [
    {
        label: "صفحه اصلی",
        href: "/", 
    },
    {
        label: "فروشگاه",
        href: "/products",
    },
    {
        label: "درباره ما",
        href: "/about",
    },
    {
        label: "تماس با ما",
        href: "/contact",
    },  
];

export const FOOTER_LINKS = [
    {
        label: "پاسخ به سوالات متداول",
        href: "/faq",
    },
    {
        label: 'رویه های بازگردادن کالا',
        href: '/'
    },
    {
        label: "حریم خصوصی",
        href: "/privacy",
    },
    {
        label: "قوانین و مقررات",
        href: "/terms",
    },
];

export const SOCIAL_LINKS = [
    {
        label: "فیسبوک",
        href: "https://www.facebook.com",
        icon: Facebook as LucideIcon
    },
    {
        label: "توییتر",
        href: "https://www.twitter.com",
        icon: Twitter as LucideIcon
    },
    {
        label: "لینکدین",
        href: "https://www.linkedin.com",
        icon: Linkedin as LucideIcon
    },
    {
        label: "اینستاگرام",
        href: "https://www.instagram.com",
        icon: Instagram as LucideIcon
    },
];