import { createFileRoute } from '@tanstack/react-router';
import { VenuePreview, venueHomeHead } from '@/components/venue-preview';
export const Route = createFileRoute('/')({ head: venueHomeHead, component: VenuePreview });
