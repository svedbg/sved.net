import * as RadixAvatar from "@radix-ui/react-avatar";
import { classNames } from "../lib/utils";

interface AvatarProps {
  className?: string;
  children?: React.ReactNode;
}

interface AvatarImageProps {
  src: string;
  alt: string;
  className?: string;
}

interface AvatarFallbackProps {
  className?: string;
  children?: React.ReactNode;
}

const Avatar = ({ className, children }: AvatarProps) => (
  <RadixAvatar.Root
    className={classNames("relative flex shrink-0 overflow-hidden rounded-full", className)}
  >
    {children}
  </RadixAvatar.Root>
);

const AvatarImage = ({ src, alt, className }: AvatarImageProps) => (
  <RadixAvatar.Image
    src={src}
    alt={alt}
    className={classNames("aspect-square h-full w-full object-cover", className)}
  />
);

const AvatarFallback = ({ className, children }: AvatarFallbackProps) => (
  <RadixAvatar.Fallback
    className={classNames("flex h-full w-full items-center justify-center rounded-full bg-neutral-800 text-neutral-200 font-medium", className)}
  >
    {children}
  </RadixAvatar.Fallback>
);

export { Avatar, AvatarImage, AvatarFallback };
