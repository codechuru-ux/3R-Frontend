import React, { useState, useEffect } from "react";
import { getSchoolById, getSchoolLeaderBoard } from "./form/api";
import { FaBackward } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { getThumbnailUrl } from "../utils/fileUtils";

export default function SchoolPage() {

  const [searchParams] = useSearchParams();
  const schoolId = searchParams.get('id');
  const [selectedSchool, setSelectedSchool] = useState();
  const [helpedCount, setHelpedCount] = useState(0);
  const [imgLoading, setImgLoading] = useState(false);

  useEffect(() => {
    if (schoolId) {
      const fetchSchoolData = async () => {
        try {
          const [schoolDetails, leaderboardData] = await Promise.all([
            getSchoolById(schoolId),
            getSchoolLeaderBoard(),
          ]);

          const schoolFromLeaderboard = leaderboardData.find((s) => s._id === schoolId);
          const totalProducts = schoolFromLeaderboard ? schoolFromLeaderboard.totalProducts : 0;
          const helped = schoolFromLeaderboard ? (schoolFromLeaderboard.helpedStudents ?? 0) : 0;
          setHelpedCount(helped);

          setSelectedSchool({ ...schoolDetails, totalProducts, helpedStudentsCount: helped });
        } catch (error) {
          console.error("Failed to fetch school details:", error);
        }
      };
      fetchSchoolData();
    }
  }, [schoolId]);

  useEffect(() => {
    if (selectedSchool) setImgLoading(true);
  }, [selectedSchool]);

  return(
    <>
      <div className="min-h-screen max-w-screen flex items-center flex-col pt-14 xl:pt-42">
      <div className="border-2 border-green-800 max-w-screen max-h-fit md:max-w-fit grow xl:border-none xl:bg-transparent bg-white rounded-4xl">
        <div className="xl:flex-row p-10 items-center gap-8 flex flex-col justify-between min-w-full">
        <div className="min-w-full lg:min-w-xl border-2 border-green-800 min-h-56 flex items-center bg-white/80 justify-center max-w-screen  md:max-w-3xl shrink xl:w-fit rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-700">
          <div className="relative">
            {imgLoading && (
              <div className="absolute inset-0 flex min-w-full text-green-900 font-bold font-serif md:text-2xl xl:text-4xl text-center animate-pulse items-center justify-center rounded-lg">
                Loading Image...
              </div>
            )}
            {selectedSchool?.schoolImage ? (
              <img
                className={`rounded-lg ${imgLoading ? 'opacity-0' : 'opacity-100'}`}
                src={getThumbnailUrl(selectedSchool.schoolImage)}
                alt="School"
                onLoad={() => setImgLoading(false)}
                onError={() => { console.error('School image failed to load'); }}
              />
            ) : null}
          </div>
        </div>
      <div className="md:text-4xl flex flex-col gap-4 font-serif bg-white px-8 py-3 rounded-xl xl:w-fit shadow-xl md:min-w-2xl hover:shadow-2xl max-w-2xl hover:scale-105 transition-all duration-700">

        <h1 className="text-green-800"><span className="text-black">School Name: </span>{selectedSchool?.schoolName ? String(selectedSchool.schoolName) : ''}</h1>
        <h1 className="text-green-800"><span className="text-black">Address: </span>{selectedSchool?.address}</h1>
        <h1 className="text-green-800"><span className="text-black">Sub-District: </span>{selectedSchool?.subDistrict}</h1>
        <h1 className="text-green-800"><span className="text-black">School Email: </span>{selectedSchool?.schoolEmail}</h1>
        <h1 className="text-green-800"><span className="text-black">School Number: </span>{selectedSchool?.schoolPhone}</h1>
        <h1 className="text-green-800"><span className="text-black">Incharge Name: </span>{selectedSchool?.inchargeName}</h1>
        <h1 className="text-green-800"><span className="text-black">Incharge Number: </span>{selectedSchool?.inchargePhone}</h1>
        <h1 className="text-green-800"><span className="text-black">Total Products: </span>{selectedSchool?.totalProducts}</h1>
        <h1 className="text-green-800"><span className="text-black">Helped Students: </span>{helpedCount}</h1>
      </div>
      </div>
      </div>
      <a href="/schoolContribution" className="bg-green-800 cursor-pointer text-white px-15 xl:mt-27 max-h-20 py-2 mt-7 border-2 shadow-xl border-white-800  inline-flex gap-2 font-semibold text-2xl md:text-4xl font-serif items-center transition-all duration-700 rounded-[9px] group hover:text-green-800 mb-10 hover:bg-white"><FaBackward /> GO BACK </a>
    </div>

    </>
  )

}
