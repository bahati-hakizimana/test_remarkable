import React, { useState } from "react";

const UpdateHome = () => {
  
  const [secondaryTab, setSecondaryTab] = useState("formIV");
  const [primaryTab, setPrimaryTab] = useState("stdVII");
  const [examSeriesTab, setExamSeriesTab] = useState("formIII");
  const [regionalExamTab, setRegionalExamTab] = useState("formIV");
  const [primarySeriesTab, setPrimarySeriesTab] = useState("stdVII");
  const [secondarySubjectNotesTab, setSecondarySubjectNotesTab] = useState("formIV");
  const [primarySubjectTab, setPrimarySubjectTab] = useState("stdVII");

  const [secondaryDropdownOpen, setSecondaryDropdownOpen] = useState({});
  const [primaryDropdownOpen, setPrimaryDropdownOpen] = useState({});
  const [examSeriesDropdownOpen, setExamSeriesDropdownOpen] = useState({});
  const [regionalExamDropdownOpen, setRegionalExamDropdownOpen] = useState({});
  const [primarySeriesDropdownOpen, setPrimarySeriesDropdownOpen] = useState({});
  const [primarySubjectDropdownOpen, setPrimarySubjectDropdownOpen] = useState({});

  const formData = {
    formIV: [
      "HISTORY",
      "CIVICS",
      "GEOGRAPHY",
      "PHYSICS",
      "BIOLOGY",
      "CHEMISTRY",
      "MATHEMATICS",
      "COMMERCE",
      "BOOK KEEPING",
      "ENGLISH",
      "KISWAHILI",
      "ENG-LITERATURE",
    ],
    formII: [
      "CIVICS",
      "GEOGRAPHY",
      "PHYSICS",
      "BIOLOGY",
      "CHEMISTRY",
      "MATHEMATICS",
      "COMMERCE",
      "BOOK KEEPING",
      "ENGLISH",
      "KISWAHILI",
    ],
    formVI: ["HISTORY", "CIVICS", "GEOGRAPHY", "PHYSICS", "BIOLOGY", "CHEMISTRY", "MATHEMATICS", "COMMERCE", "BOOK KEEPING"],
    formVII: ["HISTORY", "CIVICS", "GEOGRAPHY", "PHYSICS", "BIOLOGY", "CHEMISTRY", "MATHEMATICS", "COMMERCE", "BOOK KEEPING"],
    formIII: ["HISTORY", "CIVICS", "GEOGRAPHY", "PHYSICS", "BIOLOGY", "CHEMISTRY", "MATHEMATICS", "COMMERCE", "BOOK KEEPING"],
    formI: ["HISTORY", "CIVICS", "GEOGRAPHY", "PHYSICS", "BIOLOGY", "CHEMISTRY", "MATHEMATICS", "COMMERCE", "BOOK KEEPING"],
    stdVII: [
      "SCIENCE",
      "SOCIAL STUDIES",
      "CIVIC & MORAL",
      "ENGLISH",
      "KISWAHILI",
      "MATHEMATICS",
      "HISABATI",
      "SAYANSI",
      "MAARIFA JAMII",
      "URAI NA MAADILI",
    ],
    stdVI: ["MATHEMATICS", "SCIENCE", "ENGLISH", "KISWAHILI"],
    stdV: ["SCIENCE", "MATHEMATICS", "KISWAHILI", "SOCIAL STUDIES"],
    stdIV: ["SCIENCE", "ENGLISH", "MATHEMATICS", "KISWAHILI"],
    stdIII: ["MATHEMATICS", "SCIENCE", "ENGLISH", "KISWAHILI"],
  
  };

  const primarySubjectData = {
    stdVII: [
      "SCIENCE",
      "SOCIAL STUDIES",
      "CIVIC & MORAL",
      "ENGLISH",
      "KISWAHILI",
      "MATHEMATICS",
      "HISABATI",
      "SAYANSI",
      "MAARIFA JAMII",
      "URAI NA MAADILI",
    ],
    stdVI: ["MATHEMATICS", "SCIENCE", "ENGLISH", "KISWAHILI"],
    stdV: ["SCIENCE", "MATHEMATICS", "KISWAHILI", "SOCIAL STUDIES"],
    stdIV: ["SCIENCE", "ENGLISH", "MATHEMATICS", "KISWAHILI"],
    stdIII: ["MATHEMATICS", "SCIENCE", "ENGLISH", "KISWAHILI"],
  };

  const toggleDropdown = (setDropdownState, dropdownState, subject) => {
    setDropdownState((prev) => ({
      ...prev,
      [subject]: !dropdownState[subject],
    }));
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Secondary NECTA Reviews */}
      <div className="bg-green-200 p-4 rounded-md shadow-md">
        <h2 className="text-lg font-bold mb-4 text-center">SECONDARY NECTA REVIEWS (OLEVEL & ALEVEL)</h2>
        <div className="flex space-x-2 border-b pb-2 justify-start overflow-x-auto">
          {["formIV", "formII", "formVI"].map((tab) => (
            <button
              key={tab}
              className={`py-1 px-3 text-sm font-semibold rounded-t-md ${
                secondaryTab === tab ? "bg-white text-blue-500 border-t border-l border-r" : "text-gray-600"
              }`}
              onClick={() => setSecondaryTab(tab)}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="bg-green-100 p-4 rounded-b-md shadow-md">
          <h3 className="text-md font-semibold mb-4 text-center">{secondaryTab.toUpperCase()} NECTA EXAMS</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {formData[secondaryTab]?.map((subject) => (
              <div key={subject} className="relative">
                <button
                  className="w-full py-2 px-3 text-xs sm:text-sm bg-blue-500 text-white font-medium rounded-md shadow hover:bg-blue-600 flex justify-between items-center"
                  onClick={() => toggleDropdown(setSecondaryDropdownOpen, secondaryDropdownOpen, subject)}
                >
                  {subject} <span>▼</span>
                </button>
                {secondaryDropdownOpen[subject] && (
                  <div className="absolute top-10 left-0 w-full bg-white border rounded-lg shadow-lg z-10">
                    {Array.from({ length: 23 }, (_, i) => 2003 + i).map((year) => (
                      <a
                        key={year}
                        href={`/content/${secondaryTab}/${subject.toLowerCase()}/${year}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                      >
                        {year}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Primary NECTA Reviews */}
      <div className="bg-green-200 mt-8 p-4 rounded-md shadow-md">
        <h2 className="text-lg font-bold mb-4 text-center">PRIMARY NECTA EXAMS REVIEWS (STD IV & STD VII)</h2>
        <div className="flex space-x-2 border-b pb-2 justify-start overflow-x-auto">
          {["stdVII", "stdIV"].map((tab) => (
            <button
              key={tab}
              className={`py-1 px-3 text-sm font-semibold rounded-t-md ${
                primaryTab === tab ? "bg-white text-blue-500 border-t border-l border-r" : "text-gray-600"
              }`}
              onClick={() => setPrimaryTab(tab)}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="bg-green-100 p-4 rounded-b-md shadow-md">
          <h3 className="text-md font-semibold mb-4 text-center">{primaryTab.toUpperCase()} NECTA EXAMS</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {formData[primaryTab]?.map((subject) => (
              <div key={subject} className="relative">
                <button
                  className="w-full py-2 px-3 text-xs sm:text-sm bg-blue-500 text-white font-medium rounded-md shadow hover:bg-blue-600 flex justify-between items-center"
                  onClick={() => toggleDropdown(setPrimaryDropdownOpen, primaryDropdownOpen, subject)}
                >
                  {subject} <span>▼</span>
                </button>
                {primaryDropdownOpen[subject] && (
                  <div className="absolute top-10 left-0 w-full bg-white border rounded-lg shadow-lg z-10">
                    {Array.from({ length: 19 }, (_, i) => 2005 + i).map((year) => (
                      <a
                        key={year}
                        href={`/content/${primaryTab}/${subject.toLowerCase()}/${year}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                      >
                        {year}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Secondary Exam Series */}
      <div className="bg-green-200 mt-8 p-4 rounded-md shadow-md">
        <h2 className="text-lg font-bold mb-4 text-center">SECONDARY EXAM SERIES</h2>
        <div className="flex space-x-2 border-b pb-2 justify-start overflow-x-auto">
          {["formIII", "formI", "formVII"].map((tab) => (
            <button
              key={tab}
              className={`py-1 px-3 text-sm font-semibold rounded-t-md ${
                examSeriesTab === tab ? "bg-white text-blue-500 border-t border-l border-r" : "text-gray-600"
              }`}
              onClick={() => setExamSeriesTab(tab)}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="bg-green-100 p-4 rounded-b-md shadow-md">
          <h3 className="text-md font-semibold mb-4 text-center">{examSeriesTab.toUpperCase()} EXAM SERIES</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {formData[examSeriesTab]?.map((subject) => (
              <div key={subject} className="relative">
                <button
                  className="w-full py-2 px-3 text-xs sm:text-sm bg-blue-500 text-white font-medium rounded-md shadow hover:bg-blue-600 flex justify-between items-center"
                  onClick={() => toggleDropdown(setExamSeriesDropdownOpen, examSeriesDropdownOpen, subject)}
                >
                  {subject} <span>▼</span>
                </button>
                {examSeriesDropdownOpen[subject] && (
                  <div className="absolute top-10 left-0 w-full bg-white border rounded-lg shadow-lg z-10">
                    {Array.from({ length: 23 }, (_, i) => 2003 + i).map((year) => (
                      <a
                        key={year}
                        href={`/content/${examSeriesTab}/${subject.toLowerCase()}/${year}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                      >
                        {year}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Secondary Regional Exams */}
      <div className="bg-green-200 mt-8 p-4 rounded-md shadow-md">
        <h2 className="text-lg font-bold mb-4 text-center">
          SECONDARY REGIONAL EXAMS (MOCKS, PRE-NATIONAL, etc.)
        </h2>
        <div className="flex space-x-2 border-b pb-2 justify-start overflow-x-auto">
          {["formIV", "formII"].map((tab) => (
            <button
              key={tab}
              className={`py-1 px-3 text-sm font-semibold rounded-t-md ${
                regionalExamTab === tab ? "bg-white text-blue-500 border-t border-l border-r" : "text-gray-600"
              }`}
              onClick={() => setRegionalExamTab(tab)}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="bg-green-100 p-4 rounded-b-md shadow-md">
          <h3 className="text-md font-semibold mb-4 text-center">{regionalExamTab.toUpperCase()} REGIONAL EXAMS</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {formData[regionalExamTab]?.map((subject) => (
              <div key={subject} className="relative">
                <button
                  className="w-full py-2 px-3 text-xs sm:text-sm bg-blue-500 text-white font-medium rounded-md shadow hover:bg-blue-600 flex justify-between items-center"
                  onClick={() => toggleDropdown(setRegionalExamDropdownOpen, regionalExamDropdownOpen, subject)}
                >
                  {subject} <span>▼</span>
                </button>
                {regionalExamDropdownOpen[subject] && (
                  <div className="absolute top-10 left-0 w-full bg-white border rounded-lg shadow-lg z-10">
                    {Array.from({ length: 23 }, (_, i) => 2003 + i).map((year) => (
                      <a
                        key={year}
                        href={`/content/${regionalExamTab}/${subject.toLowerCase()}/${year}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                      >
                        {year}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Primary Exam Series */}
      <div className="bg-green-200 mt-8 p-4 rounded-md shadow-md">
        <h2 className="text-lg font-bold mb-4 text-center">PRIMARY EXAMS SERIES</h2>
        <div className="flex space-x-2 border-b pb-2 justify-start overflow-x-auto">
          {["stdVII", "stdVI", "stdV", "stdIV", "stdIII"].map((tab) => (
            <button
              key={tab}
              className={`py-1 px-3 text-sm font-semibold rounded-t-md ${
                primarySeriesTab === tab ? "bg-white text-blue-500 border-t border-l border-r" : "text-gray-600"
              }`}
              onClick={() => setPrimarySeriesTab(tab)}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="bg-green-100 p-4 rounded-b-md shadow-md">
          <h3 className="text-md font-semibold mb-4 text-center">{primarySeriesTab.toUpperCase()} EXAMS SERIES</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {formData[primarySeriesTab]?.map((subject) => (
              <div key={subject} className="relative">
                <button
                  className="w-full py-2 px-3 text-xs sm:text-sm bg-blue-500 text-white font-medium rounded-md shadow hover:bg-blue-600 flex justify-between items-center"
                  onClick={() => toggleDropdown(setPrimarySeriesDropdownOpen, primarySeriesDropdownOpen, subject)}
                >
                  {subject} <span>▼</span>
                </button>
                {primarySeriesDropdownOpen[subject] && (
                  <div className="absolute top-10 left-0 w-full bg-white border rounded-lg shadow-lg z-10">
                    {Array.from({ length: 19 }, (_, i) => 2005 + i).map((year) => (
                      <a
                        key={year}
                        href={`/content/${primarySeriesTab}/${subject.toLowerCase()}/${year}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                      >
                        {year}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

       {/* Secondary Subject Notes */}
       <div className="bg-green-200 mt-8 p-4 rounded-md shadow-md">
        <h2 className="text-lg font-bold mb-4 text-center">SECONDARY SUBJECT NOTES</h2>
        <div className="flex space-x-2 border-b pb-2 justify-start overflow-x-auto">
          {["formI", "formII", "formIII", "formIV"].map((tab) => (
            <button
              key={tab}
              className={`py-1 px-3 text-sm font-semibold rounded-t-md ${
                secondarySubjectNotesTab === tab ? "bg-white text-blue-500 border-t border-l border-r" : "text-gray-600"
              }`}
              onClick={() => setSecondarySubjectNotesTab(tab)}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="bg-green-100 p-4 rounded-b-md shadow-md">
          <h3 className="text-md font-semibold mb-4 text-center">{secondarySubjectNotesTab.toUpperCase()} SUBJECT NOTES</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {formData[secondarySubjectNotesTab]?.map((subject) => (
              <div key={subject} className="relative">
                <button
                  className="w-full py-2 px-3 text-xs sm:text-sm bg-blue-500 text-white font-medium rounded-md shadow hover:bg-blue-600 flex justify-between items-center"
                  onClick={() => toggleDropdown(setSecondaryDropdownOpen, secondaryDropdownOpen, subject)}
                >
                  {subject} <span>▼</span>
                </button>
                {secondaryDropdownOpen[subject] && (
                  <div className="absolute top-10 left-0 w-full bg-white border rounded-lg shadow-lg z-10">
                    {Array.from({ length: 23 }, (_, i) => 2003 + i).map((year) => (
                      <a
                        key={year}
                        href={`/content/${secondarySubjectNotesTab}/${subject.toLowerCase()}/${year}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                      >
                        {year}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Primary Subject Notes Section */}
      <div className="bg-green-200 p-4 rounded-md shadow-md">
        <h2 className="text-lg font-bold mb-4 text-center">PRIMARY SUBJECT NOTES</h2>
        <div className="flex space-x-2 border-b pb-2 justify-start overflow-x-auto">
          {["stdVII", "stdVI", "stdV", "stdIV", "stdIII"].map((tab) => (
            <button
              key={tab}
              className={`py-1 px-3 text-sm font-semibold rounded-t-md ${
                primarySubjectTab === tab ? "bg-white text-blue-500 border-t border-l border-r" : "text-gray-600"
              }`}
              onClick={() => setPrimarySubjectTab(tab)}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="bg-green-100 p-4 rounded-b-md shadow-md">
          <h3 className="text-md font-semibold mb-4 text-center">{primarySubjectTab.toUpperCase()} SUBJECT NOTES</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {primarySubjectData[primarySubjectTab]?.map((subject) => (
              <div key={subject} className="relative">
                <button
                  className="w-full py-2 px-3 text-xs sm:text-sm bg-blue-500 text-white font-medium rounded-md shadow hover:bg-blue-600 flex justify-between items-center"
                  onClick={() => toggleDropdown(subject)}
                >
                  {subject} <span>▼</span>
                </button>
                {primarySubjectDropdownOpen[subject] && (
                  <div className="absolute top-10 left-0 w-full bg-white border rounded-lg shadow-lg z-10">
                    {Array.from({ length: 19 }, (_, i) => 2005 + i).map((year) => (
                      <a
                        key={year}
                        href={`/content/${primarySubjectTab}/${subject.toLowerCase()}/${year}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                      >
                        {year}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateHome;



