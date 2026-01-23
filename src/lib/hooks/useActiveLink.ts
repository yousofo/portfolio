import { usePathname } from "next/navigation";
import Link from "next/link";

/**
 * @description This hook returns a function that returns a class name when the link is active
 */
export default function useActiveLink(className: string = " active " ) {
  const pathname = usePathname();
  console.log(pathname);
  return (href: string ) => (pathname === href ? ` ${className} ` : "");
}
