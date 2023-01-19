import { CMS_NAME } from '../lib/constants';
import Image from 'next/image';

import logo from '../public/assets/blog/logo/logo.png';

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <Image src={logo} alt="Logo" width={200} height={200} />

      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Blog Resmi Penerbit Major
      </h4>
    </section>
  );
};

export default Intro;

