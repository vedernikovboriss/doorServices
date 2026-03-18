import React from 'react';
import { PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react';

const ContactSubinfo = ({ description }: { description: string }) => {
  return (
    <div className="w-full flex flex-col gap-8 items-start justify-start">
      <div className="flex flex-col gap-4">
        <h3 className="subtitle">(Наши контакты)</h3>
        <p className="p-small">{description}</p>
      </div>
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 w-full">
        <ContactInfo icon={<MailIcon className="w-4 h-4 text-background" />}>
          info@example.com
        </ContactInfo>
        <ContactInfo icon={<PhoneIcon className="w-4 h-4 text-background" />}>
          +7 (999) 999-99-99
        </ContactInfo>
        <ContactInfo icon={<MapPinIcon className="w-4 h-4 text-background" />}>
          Москва, ул. Ленина, 1
        </ContactInfo>
      </div>
    </div>
  );
};

export default ContactSubinfo;

function ContactInfo({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-2 items-center p-2 bg-white rounded-sm">
      <div className="h-full aspect-square bg-(--accent) rounded-sm flex items-center justify-center p-3">
        {icon}
      </div>
      <span className="text-sm font-regular">{children}</span>
    </div>
  );
}
