export function VenuePreview() {
  return (
    <iframe
      className="block h-dvh w-full border-0 bg-background"
      src="/m-and-m-event-center/index.html"
      title="M & M Event Center website preview"
    />
  );
}

export const venueHomeHead = () => ({
  meta: [
    { title: 'M & M Event Center | Events in Abuja' },
    {
      name: 'description',
      content: 'Discover M & M Event Center in Garki, Abuja. Explore the venue and call for event enquiries.',
    },
    { property: 'og:title', content: 'M & M Event Center | Abuja' },
    {
      property: 'og:description',
      content: 'A setting for weddings, conferences and celebrations in Garki, Abuja.',
    },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
});

export const venueIndexHead = () => ({
  meta: [
    { title: 'M & M Event Center | Abuja Venue Preview' },
    {
      name: 'description',
      content: 'Preview the M & M Event Center venue page for weddings, conferences and celebrations in Abuja.',
    },
    { property: 'og:title', content: 'M & M Event Center | Venue Preview' },
    {
      property: 'og:description',
      content: 'Explore M & M Event Center in Garki, Abuja, and call for event enquiries.',
    },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
});