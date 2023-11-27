
export async function generateMetadata({ params, searchParams }, parent) {
    return {
      title: "blog",
      openGraph: {
        images: ['/some-specific-page-image.jpg'],
      },
    }
  }