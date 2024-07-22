type CalloutProps = {
  image?: string;
  children: React.ReactNode;
};

/**
 * An indented callout with an optional image. If image fails to load, it will be hidden.
 */
export function Callout({ image, children }: CalloutProps) {
  return (
    <div className="flex items-start space-x-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-md prose-p:m-0 prose-img:mt-1.5 prose-img:mb-0">
      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt="Cedar Logo"
          className="h-8 w-8 rounded-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      )}
      <div className="flex-1 text-pretty">{children}</div>
    </div>
  );
}
