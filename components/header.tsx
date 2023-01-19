import Link from 'next/link';
import Image from 'next/image';

import logo from '../public/assets/blog/logo/logo.png';

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        <Image src={logo} alt="Logo" width={200} height={200} />
      </Link>
    </h2>
  );
};

export default Header;

