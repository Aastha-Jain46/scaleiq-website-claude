import PageHeader from './PageHeader';

// Listing template — Portfolio detail, Case Studies, Blog index, Whom We Serve, Our Services.
export default function ListingTemplate({ eyebrow, title, intro, size, children }) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} intro={intro} size={size} />
      <div className="listing-body wrap">{children}</div>
    </>
  );
}
