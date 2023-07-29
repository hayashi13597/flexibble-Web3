import React from "react";
import { v4 as uuidv4 } from "uuid";
import FundCard from "./FundCard";
import { useRouter } from "next/navigation";

const DisplayCampaigns = ({ title, isLoading, campaigns }: any) => {
  const router = useRouter();

  const handleNavigate = (campaign: any) => {
    localStorage.setItem("campaigns", JSON.stringify(campaign));
    router.push(`/web3/campaign-details/${campaign.title}`);
  };

  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">
        {title} ({campaigns.length})
      </h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <img
            src="/web3/loader.svg"
            alt="loader"
            className="w-[100px] h-[100px] object-contain"
          />
        )}

        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any campaigns yet
          </p>
        )}

        {!isLoading &&
          campaigns.length > 0 &&
          campaigns.map((campaign: any) => (
            <FundCard
              key={uuidv4()}
              {...campaign}
              handleClick={() => handleNavigate(campaign)}
            />
          ))}
      </div>
    </div>
  );
};

export default DisplayCampaigns;
