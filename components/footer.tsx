import Container from './container';
import { EXAMPLE_PATH } from '../lib/constants';
import Image from 'next/image';

import logo from '../public/assets/blog/logo/logo.png';

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <div className="w-full">
            <Image src={logo} alt="Logo" width={200} height={200} />
            <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
              Blog resmi Penerbit Major
            </h3>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href={`mailto:email@gmail.com`}
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Follow
            </a>
            <a
              href={`mailto:email@gmail.com`}
              className="mx-3 font-bold hover:underline"
            >
              email@gmail.com
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

