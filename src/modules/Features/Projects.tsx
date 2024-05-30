import styled from "styled-components";
import { PinkBlur, VioletBlur } from "../Home/1-Hero-Section";
import { GradientWord, Card } from "./Sorms";

import { BiSelectMultiple } from "react-icons/bi";
import { FaAward } from "react-icons/fa";
import { MdOutlinePublishedWithChanges } from "react-icons/md";

const features = [
  {
    icon: "Pay",
    title: "Privacy-Preserving",
    content:
      "The Proof of Identity protocol prioritizes user privacy by minimizing the amount of personal data exposed during identity verification. Through cryptographic techniques and decentralized storage, users can maintain control over their identity information while still proving their authenticity to third parties.",
    link: "",
  },
  {
    icon: "Kudos",
    title: "Interoperability",
    content:
      "The NFT-based identity tokens are designed to be interoperable across various applications and institutions. External entities can easily verify the authenticity of these tokens, allowing users to present them as proof of identity seamlessly across different platforms and services.",
    link: "",
  },
  {
    icon: "Customize",
    title: "Cryptographic Signature",
    content:
      "Each NFT issued to users is embedded with a cryptographic signature, providing a unique and verifiable proof of their identity. This signature ensures the authenticity and integrity of the identity token, enhancing trust and security in identity verification processes.",
    link: "",
  },
];

export function Projects() {
  return (
    <div className="relative mt-12">
      <VioletBlur className="absolute top-0 left-0 blur-xl" />
      <PinkBlur className="absolute right-0 bottom-48 h-1/6 w-1/6 opacity-50" />
      <div className="grid grid-cols-4 gap-4 p-12">
        <div className="lg:col-span-2 md:col-span-4 sm:col-span-4">
          <img
            src="/cards.jpeg"
            className="lg:h-[36rem] md:h-[22rem] sm:h-[22rem]"
          />
        </div>

        <div className="lg:col-span-2 md:col-span-4 sm:col-span-4 p-4 my-6 lg:mr-24">
          <p className="text-2xl lg:text-left sm:text-center md:text-center text-zinc-500  sm:mt-8 md:mt-8 lg:mt-12 lg:w-4/5">
            Introducing
          </p>
          <GradientWord className="lg:text-8xl md:text-5xl sm:text-5xl sm:text-center md:text-center lg:text-left font-bold my-4">
            Proof of identity
          </GradientWord>
          <p className="text-lg text-zinc-400 leading-normal lg:text-left sm:text-center md:text-center">
            Experience seamless identity verification with our Proof of Identity
            protocol. Users undergo KYC verification on our platform, receiving
            an NFT embedded with a cryptographic signature as irrefutable proof.
            External entities can effortlessly verify the authenticity of these
            NFTs, enabling users to present them confidently as proof of
            identity across various applications and institutions, ensuring
            trust, security, and privacy.
          </p>
          <div className="my-8 flex flex-row gap-4">
            <a href="">
              <button
                className="
              px-8
              py-3
              rounded-xl
              text-md
              text-zinc-400
              text-bold
              hover:bg-white
              hover:bg-opacity-5
              hover:text-white
              duration-700"
              >
                Learn More
              </button>
            </a>
            <a href="">
              <button
                className="
              px-8
              py-3
              rounded-xl
              text-md
              text-purple
              text-bold
              bg-purple
              bg-opacity-5
              hover:bg-opacity-25
              duration-700"
              >
                Try
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 lg:mx-60 sm:mx-6 md:mx-6">
        {features.map((feat) => (
          <Card
            onClick={() => {
              window.open(feat.link);
            }}
            className="lg:col-span-1 sm:col-span-3 md:col-span-3 rounded-xl hover:-translate-y-3 duration-700 text-center items-center"
          >
            <div className="text-purple p-2">
              {feat.icon == "Pay" && (
                <BiSelectMultiple
                  style={{
                    height: "2.5rem",
                    width: "2.5rem",
                    margin: "0px auto",
                  }}
                />
              )}
              {feat.icon == "Kudos" && (
                <FaAward
                  style={{
                    height: "2.5rem",
                    width: "2.5rem",
                    margin: "0px auto",
                  }}
                />
              )}
              {feat.icon == "Customize" && (
                <MdOutlinePublishedWithChanges
                  style={{
                    height: "2.5rem",
                    width: "2.5rem",
                    margin: "0px auto",
                  }}
                />
              )}
            </div>
            <h2 className="text-2xl text-zinc-200 mt-4 leading-normal">
              {feat.title}
            </h2>
            <div className="text-sm text-zinc-400 py-2">{feat.content}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
