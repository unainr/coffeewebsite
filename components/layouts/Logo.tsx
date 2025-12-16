import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
		<Link href="/" className="flex items-center justify-center gap-2">
      <Image
        src="/main.png" // or your public path
        alt="Logo"
        width={70}
        height={50}
        priority
      />
    </Link>
  );
};

export default Logo;