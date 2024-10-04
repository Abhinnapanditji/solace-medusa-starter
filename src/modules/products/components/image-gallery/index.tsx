import Image from 'next/image'

import { cn } from '@lib/util/cn'
import { HttpTypes } from '@medusajs/types'

import { MAX_INITIAL_IMAGES } from './consts'
import { GalleryDialog } from './gallery-dialog'
import ImageCarousel from './image-carousel'

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
  title: string
}

const ImageGallery = ({ images, title }: ImageGalleryProps) => {
  return (
    <div className="flex flex-col justify-center gap-4">
      <div className="hidden grid-cols-2 gap-1 medium:grid">
        {images.slice(0, MAX_INITIAL_IMAGES).map((image, index) => (
          <div
            className={cn(
              'relative w-full shrink-0',
              index === 0
                ? 'col-span-2 aspect-[29/20] max-h-[540px]'
                : 'col-span-1 aspect-[29/34] max-h-[440px]'
            )}
            key={image.id}
          >
            <Image
              src={image.url}
              priority
              alt={`Product image`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 992px) 780px"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <GalleryDialog
        // images={images.slice(MAX_INITIAL_IMAGES, 10)}
        images={[...images, ...images, ...images].slice(MAX_INITIAL_IMAGES, 10)}
        title={title}
      />
      <ImageCarousel images={images} />
    </div>
  )
}

export default ImageGallery
