import PageLayout from "../../../Components/PageLayout";

export default function Login({handleLogin, setUserId, userId}) {
  return (
    <PageLayout title={"Login"} imgUrl={"/login/visual-cover.jpg"}>
      <div className="bg-background ShadowLarge pb-8">
        <div className="text-center md:px-8 pt-8 overflow-visible ">
          <p className="font-extrabold text-3xl md:text-5xl textShadow-md font-figtree overflow-visible">
            Login
          </p>
        </div>
        <div className="flex flex-col justify-center items-center px-4 md:px-8 py-8">
          <h2 className="font-semibold text-gray-600 font-figtree textShadow-sm text-xl md:text-2xl leading-normal mb-4">
            Please Enter Your User ID
          </h2>
          <input
            type="text"
            placeholder="Enter User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="border border-primary bg-transparent text-black font-kodeMono font-medium text-md px-4 py-2 mb-4 focus:outline-none"
          />
          <button
            onClick={handleLogin}
            className="px-6 md:px-8 py-2 ShadowBlur text-base md:text-xl rounded-md font-semibold text-gray-800 bg-primary border border-primary focus:outline-none text-center"
          >
            Login
          </button>
        </div>
      </div>
    </PageLayout>
  );
}
