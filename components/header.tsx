import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  const address = useAddress();
  
  return (
    <header className="w-full p-4 mb-12 relative">
      <div className="max-w-5xl mx-auto flex justify-between items-center relative z-10">
        <div>
          <Link href="https://catattack.vercel.app/" passHref>
            <div className="your-button-styles">
              <Image
                className="md:hidden"
                width={48}
                height={48}
                src="/logo.png"
                alt="Joseph"
              />
              <Image
                className="hidden md:block"
                width={194}
                height={28}
                src="/logo.png"
                alt="thirdweb"
              />
            </div>
          </Link>
        </div>
        <div className="max-w-xs">{address ? <ConnectWallet /> : null}</div>
      </div>
    </header>
  );
};

export default Header;
