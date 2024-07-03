import {FooterLinkGroup} from "@/app/components/footerLinkGroup";
import React from "react";
import {ExternalLink, Github, Mail, Youtube} from "lucide-react";
import {links} from "@/shared/links";

const footerLinks = {
  support: [
    {
      icon: Mail,
      text: "Email: " + links.supportEmail,
      href: "mailto:" + links.supportEmail,
    },
    {
      icon: ExternalLink,
      text: "Telegram Support",
      href: links.supportTelegram,
    },
  ],
  run: [
    {
      icon: ExternalLink,
      text: "Run in browser",
      href: links.appBrowser,
    },
    {
      icon: ExternalLink,
      text: "Run in Telegram",
      href: links.appTelegram,
    },
  ],
  youtube: [
    {
      icon: Youtube,
      text: "YouTube Channel (EN)",
      href: links.youtubeChannelEn,
    },
    {
      icon: Youtube,
      text: "YouTube Channel (RU)",
      href: links.youtubeChannelRu,
    },
  ],
  other: [
    {
      icon: ExternalLink,
      text: "Telegram Channel",
      href: links.telegramChannel,
    },
    {
      icon: Github,
      text: "GitHub",
      href: links.github,
    },
  ],
};

export const Footer = () => {
  return <footer className="bg-gray-800 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <FooterLinkGroup title="Support" links={footerLinks.support}/>
        <FooterLinkGroup title="Run MemoCard" links={footerLinks.run}/>
        <FooterLinkGroup title="YouTube" links={footerLinks.youtube}/>
        <FooterLinkGroup title="Other" links={footerLinks.other}/>
      </div>
    </div>
  </footer>
}
