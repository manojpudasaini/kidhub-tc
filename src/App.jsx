import { data } from "./termsData";

function App() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center max-w-screen-xl mx-auto bg-gray-50 font-inter px-4">
      <div className="flex items-center justify-center gap-8 w-full py-2">
        <img
          src="/kidhub.svg"
          height={250}
          width={250}
          alt="kidhub"
          draggable={false}
        />
        <div>
          <p className="font-semibold leading-9 text-3xl text-gray-700">
            Terms and Conditions
          </p>
          <p className="pt-2 px-1">Updated 1st Oct, 2023</p>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <p className="text-justify">
          Welcome to KidHub! These Terms and Conditions (&quot;Terms&quot;)
          outline the rules and regulations for using our mobile application,
          KidHub (referred to as &quot;the App&quot;). Please read these Terms
          carefully before using the App. By accessing or using the App, you
          agree to be bound by these Terms. If you do not agree to these Terms,
          please do not use the App.
        </p>
        <div className="flex flex-col space-y-2">
          {data.map((item) => (
            <div key={item.title}>
              <p className="text-xl text-gray-900 font-bold leading-7 text">
                {item.title}
              </p>
              <p className="pl-2">{item.description}</p>
              {item?.body?.map((bodyItem, key) => (
                <div key={bodyItem?.title + key} className="pl-2 py-1">
                  <p className="font-medium text-lg text-gray-900">
                    {bodyItem?.title}
                  </p>
                  <p className="pl-2 py-0.5">{bodyItem?.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <p>
          By using KidHub, you agree to these Terms and Conditions. Thank you
          for choosing KidHub to provide a safe and educational experience for
          children in two languages.
        </p>
      </div>
    </div>
  );
}

export default App;
