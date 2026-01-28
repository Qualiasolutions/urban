import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Urban Catering Nicosia',
  description: 'Get in touch with Urban Catering for your next event. Request a quote for weddings, corporate events, and private dining in Nicosia, Cyprus.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
