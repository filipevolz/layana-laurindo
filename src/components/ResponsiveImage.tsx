import { buildSrcSet, type ResponsiveImageConfig } from '@/lib/responsive-images'
import { cn } from '@/lib/utils'

type ResponsiveImageProps = ResponsiveImageConfig &
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'width' | 'height' | 'sizes'>

export function ResponsiveImage({
  src,
  width,
  height,
  sizes,
  widths = [400, 800, 1200],
  className,
  alt,
  ...props
}: ResponsiveImageProps) {
  return (
    <img
      src={src}
      srcSet={buildSrcSet(src, widths)}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt ?? ''}
      className={cn(className)}
      {...props}
    />
  )
}
