"use client";
import { setDevsToHistory } from "@/RTK/slices/devsHistorySlice";
import { useDispatch, useSelector } from "react-redux";
import { COOKIESCONSENT } from "@/constant";
import { useState, useEffect } from "react";
import { RootState } from "@/RTK/store";
import cookiePermission from "@/utils/cookiePermission";

const CookiesPermission = () => {
  const [showCookiesBanner, setShowCookiesBanner] = useState(false);
  const history = useSelector((state: RootState) => state.devsHistory.history);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Updating RTK start");
    const devHistory = localStorage.getItem("devHistory");
    if (devHistory && history.length === 0) {
      dispatch(setDevsToHistory(JSON.parse(devHistory)));
    }
    console.log("Updating RTK end");

    if (!cookiePermission()) {
      // If no consent, show the cookies banner after a delay
      const timer = setTimeout(() => {
        setShowCookiesBanner(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [history.length]);

  const handleConsent = () => {
    // Set the consent in localStorage
    localStorage.setItem(COOKIESCONSENT, "true");
    // Hide the cookies banner
    setShowCookiesBanner(false);
  };

  return (
    <div
      className={`${
        showCookiesBanner
          ? "fixed bottom-0 w-full p-4 bg-blue-800 text-white"
          : "hidden"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">
          We use cookies to enhance your experience. By continuing to visit this
          site, you agree to our use of cookies.
        </p>
        <button
          type="button"
          onClick={handleConsent}
          className="bg-white text-blue-800 px-4 py-2 rounded hover:bg-blue-700 hover:text-white"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookiesPermission;
