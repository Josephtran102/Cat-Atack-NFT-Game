import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col space-y-2 w-full max-w-xs justify-center">
       
        <a
          href="https://github.com/Josephtran102/Cat-Atack-NFT-Game"
          target="_blank"
          className="p-3 text-xs font-semibold border border-white/20 rounded flex items-center justify-center space-x-1 hover:bg-white/10 transition"
          rel="noreferrer"
        >
          <Image src="/icons/github.svg" width={12} height={12} alt="Zap" />
          <span>Check out the code on github</span>
        </a>
      </div>
      <h4 className="font-semibold mt-12 mb-6">
        Created by 🐱{" "}
        <a
          href="https://twitter.com/josephtran102"
          target="_blank"
          className="text-blue-500 hover:no-underline"
          rel="noreferrer"
        >
          @JosephTran
        </a>
      </h4>
      <p className="font-semibold">No animals were hurt building this game.</p>
    </>
  );
};

export default Footer;
