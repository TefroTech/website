import styled from "styled-components";
import { PinkBlur, VioletBlur } from "../Home/1-Hero-Section";
import { FaEthereum } from "react-icons/fa";
import { SiHandshake } from "react-icons/si";
import { GiDiamondTrophy } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";

export const GradientWord = styled.h1`
  background: linear-gradient(180deg, #4200ff 0%, #ffffff 100%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

export const Card = styled.div`
  box-shadow: 0px 2px 10px rgb(0, 0, 0, 0.4);
  &:hover {
    box-shadow: 0px 1px 15px rgb(0, 0, 0, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.01);
  }
  min-height: 1rem;
  cursor: pointer;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const features = [
  {
    icon: "Gitcoin",
    title: "Decentralized Access Control",
    content:
      "Users retain control over their data and agreements, with decentralized access controls that allow them to manage permissions and determine who can view or modify specific documents.",
    link: "/",
  },
  {
    icon: "Token",
    title: "Improved lamport signatures security",
    content:
      "The combination of Merkle trees and improved Lamport signatures enhances security by adding an additional layer of cryptographic complexity, making it even more challenging for malicious actors to forge or tamper with signatures.",
    link: "",
  },
  {
    icon: "Creds",
    title: "Immutable Records",
    content:
      "Once agreements are signed and recorded on the decentralized ledger, they become immutable, ensuring tamper-proof records that cannot be altered or deleted.",
    link: "",
  },
  {
    icon: "Kudos",
    title: "Transparent Audit Trail",
    content:
      "A transparent audit trail is maintained for each agreement, documenting every step of the signing process, from creation to finalization, providing a transparent record of actions taken by all parties involved.",
    link: "",
  },
];

export function Sorms() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 p-12 relative">
        <VioletBlur className="absolute top-0 left-0 blur-xl" />
        <PinkBlur className="absolute right-0 bottom-48 h-1/6 w-1/6 opacity-50" />
        <div className="lg:col-span-2 md:col-span-4 sm:col-span-4 p-4 my-6 lg:ml-24">
          <p className="text-2xl lg:text-left sm:text-center md:text-center text-zinc-500  sm:mt-8 md:mt-8 lg:mt-12 lg:w-4/5">
            Introducing
          </p>
          <GradientWord className="lg:text-7xl md:text-5xl sm:text-3xl sm:text-center md:text-center lg:text-left font-bold my-4">
            Proof of agreement
          </GradientWord>
          <p className="text-lg text-zinc-400 leading-normal lg:text-left sm:text-center md:text-center">
            The platform that allows digital agreements between two parties.
            Users register, define agreements, and sign with unique Lamport
            signatures recorded on a blockchain for secure, verifiable contracts{" "}
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
        <div className="lg:col-span-2 md:col-span-4 sm:col-span-4 z-20">
          <img
            src="/sorms-mobile.png"
            className="lg:h-[36rem] md:h-[22rem] sm:h-[22rem]"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 lg:mx-96 sm:mx-6 md:mx-6">
        {features.map((feat) => (
          <Card
            onClick={() => {
              window.open(feat.link);
            }}
            className="lg:col-span-2 sm:col-span-4 md:col-span-4 rounded-xl hover:-translate-y-3 duration-700 text-center items-center"
          >
            <div className="text-purple p-2">
              {feat.icon == "Gitcoin" && (
                <MdSecurity
                  style={{
                    height: "2.5rem",
                    width: "2.5rem",
                    margin: "0px auto",
                  }}
                />
              )}
              {feat.icon == "Token" && (
                <FaEthereum
                  style={{
                    height: "2.5rem",
                    width: "2.5rem",
                    margin: "0px auto",
                  }}
                />
              )}
              {feat.icon == "Creds" && (
                <SiHandshake
                  style={{
                    height: "2.5rem",
                    width: "2.5rem",
                    margin: "0px auto",
                  }}
                />
              )}
              {feat.icon == "Kudos" && (
                <GiDiamondTrophy
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
    </>
  );
}
