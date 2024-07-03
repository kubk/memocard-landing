import { FooterLinkGroup } from "@/components/landing-page/footerLinkGroup";
import React from "react";
import { ExternalLink, Github, Mail, Youtube } from "lucide-react";
import { links } from "@/shared/links";
import { Translation } from "@/shared/translations";

export const Footer = (props: { translation: Translation }) => {
  const { translation } = props;

  const footerLinks = {
    support: [
      {
        icon: Mail,
        text: links.supportEmail,
        href: "mailto:" + links.supportEmail,
      },
      {
        icon: ExternalLink,
        text: translation.footer.links.tgSupport,
        href: links.supportTelegram,
      },
    ],
    run: [
      {
        icon: ExternalLink,
        text: translation.footer.links.runInBrowser,
        href: links.appBrowser,
      },
      {
        icon: ExternalLink,
        text: translation.footer.links.runInTelegram,
        href: links.appTelegram,
      },
    ],
    youtube: [
      {
        icon: Youtube,
        text: translation.footer.links.youtubeChannelEn,
        href: links.youtubeChannelEn,
      },
      {
        icon: Youtube,
        text: translation.footer.links.youtubeChannelRu,
        href: links.youtubeChannelRu,
      },
    ],
    other: [
      {
        icon: ExternalLink,
        text: translation.footer.links.telegramChannel,
        href: links.telegramChannel,
      },
      {
        icon: Github,
        text: "GitHub",
        href: links.github,
      },
    ],
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FooterLinkGroup
            title={translation.footer.groupTitles.support}
            links={footerLinks.support}
          />
          <FooterLinkGroup
            title={translation.footer.groupTitles.run}
            links={footerLinks.run}
          />
          <FooterLinkGroup title="YouTube" links={footerLinks.youtube} />
          <FooterLinkGroup
            title={translation.footer.groupTitles.other}
            links={footerLinks.other}
          />
        </div>
      </div>
    </footer>
  );
};
