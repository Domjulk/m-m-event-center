import { createFileRoute } from '@tanstack/react-router';
import { VenuePreview, venueIndexHead } from '@/components/venue-preview';
export const Route = createFileRoute('/index')({ head: venueIndexHead, component: VenuePreview });
