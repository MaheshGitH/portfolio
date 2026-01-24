import SectionHeader from "@/app/common-components/SectionHeader";
import Form from "./Form";
import SocialButton from "./SocialButton";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <div>
      <SectionHeader section="04." title="Contact" />
      <div className="flex flex-col gap-14 max-w-5xl mx-auto">
        <p className="text-secondary ~text-base/xl font-semibold lg:text-center ">
          I’m open to new opportunities and collaborations. If you’re looking
          for someone to{" "}
          <span className="text-primary">
            build or improve a web application
          </span>
          , let’s talk.
        </p>
        <Form />
        <div className="self-center flex gap-8">
          {socialButton.map((social, index) => (
            <SocialButton key={index} Icon={social.icon} href={social.href} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

const socialButton = [
  { icon: Github, href: "https://github.com/MaheshGitH/" },
  { icon: Linkedin, href: "https://linkedin.com/in/naanmaheshkrishnan/" },
  { icon: Mail, href: "mailto:maheshkrishnan1242@gmail.com" },
];
