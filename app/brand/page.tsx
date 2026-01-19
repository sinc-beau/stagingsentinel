import { Metadata } from 'next';
import BrandAssetsContent from './BrandAssetsContent';

export const metadata: Metadata = {
  title: 'Brand Assets | Sentinel Nexus',
  description: 'Official brand assets and guidelines for Sentinel Nexus',
  robots: {
    index: false,
    follow: false,
  },
};

export default function BrandAssetsPage() {
  return <BrandAssetsContent />;
}
