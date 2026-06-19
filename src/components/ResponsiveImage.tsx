import { type ResponsiveImageConfig } from '@/lib/responsive-images'
import { cn } from '@/lib/utils'

type ResponsiveImageProps = ResponsiveImageConfig &
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'width' | 'height'>

export function ResponsiveImage({
  src,
  width,
  height,
  className,
  alt,
  ...props
}: ResponsiveImageProps) {
  return (
    <img
      src={src}
      width={width}
      height={height}
      alt={alt ?? ''}
      className={cn(className)}
      {...props}
    />
  )
}
