const Counter = () => {
  const scrollTo = () => {
    if (typeof window === "object") {
      const to = document.querySelector(".youtube").offsetTop;
      window.scrollTo({ top: to, behavior: "smooth" });
    }
  };

  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      className="absolute left-2/4 bottom-0 w-16 h-16 -translate-x-1/2 cursor-pointer"
      onClick={scrollTo}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.0002 45.8331C13.5002 45.8331 4.16687 36.479 4.16687 24.9998C4.16687 13.4998 13.5002 4.16646 25.0002 4.16646C36.4794 4.16646 45.8335 13.4998 45.8335 24.9998C45.8335 36.479 36.4794 45.8331 25.0002 45.8331ZM33.3335 20.8748C32.7085 20.2706 31.7294 20.2706 31.1252 20.8956L25.0002 27.0415L18.8752 20.8956C18.271 20.2706 17.271 20.2706 16.6669 20.8748C16.0419 21.4998 16.0419 22.479 16.6669 23.0831L23.896 30.354C24.1877 30.6456 24.5835 30.8123 25.0002 30.8123C25.4169 30.8123 25.8127 30.6456 26.1044 30.354L33.3335 23.0831C33.646 22.7915 33.7919 22.3956 33.7919 21.9998C33.7919 21.5831 33.646 21.1873 33.3335 20.8748Z"
        fill="white"
      />
    </svg>
  );
};

export default Counter;
