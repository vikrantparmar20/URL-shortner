import React, { useEffect } from "react";
import ShortenItem from "./ShortenItem";
import { FaLink } from "react-icons/fa";

const ShortenUrlList = ({ data, isLoading }) => {
  const [deleteUrl, setDeleteUrl] = React.useState(null);
  const [urlList, setUrlList] = React.useState(data);
  useEffect(() => {
    setUrlList((urls) => urls?.filter((item) => item?.shortUrl != deleteUrl));
  }, [deleteUrl]);
  console.log(data);
  return urlList?.length !== 0 ? (
    <div className="my-6 space-y-4">
      {urlList?.map((item) => (
        <ShortenItem key={item.id} {...item} setDeleteUrl={setDeleteUrl} />
      ))}
    </div>
  ) : (
    <div className="flex justify-center pt-16">
      <div className="flex gap-2 items-center justify-center  py-6 sm:px-8 px-5 rounded-md   shadow-lg  bg-gray-50">
        <h1 className="text-slate-800 font-montserrat   sm:text-[18px] text-[14px] font-semibold mb-1 ">
          You haven't created any short link yet
        </h1>
        <FaLink className="text-blue-500 sm:text-xl text-sm " />
      </div>
    </div>
  );
};

export default ShortenUrlList;
