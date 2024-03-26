export function SearchPanel() {
    return (
      <div className="hidden items-start justify-start bg-black sm:flex sm:flex-1 sm:flex-col">
        <div
          className={
            "hidden w-full max-w-[20rem] gap-y-4 bg-black p-4 lg:flex lg:flex-col"
          }
        >
          <div
            className={
              "flex w-full flex-col items-start space-y-2 rounded-2xl bg-[#242424] p-3"
            }
          >
            <p className={"text-xl font-bold"}>Subscribe to Premium</p>
            <p className={"text-sm font-light"}>
              Subscribe to unlock new features and if eligible, receive a share of
              ads revenue.
            </p>
            <button
              type="submit"
              className={
                "w-fit max-w-36 rounded-full bg-blue-50 px-4 py-2 font-bold text-black"
              }
            >
              Subscribe
            </button>
          </div>
          <div
            className={
              "flex w-full flex-col items-start space-y-2 rounded-2xl bg-[#242424] p-3"
            }
          >
            <p className={"text-xl font-bold"}>Whats Happening</p>
            <p className={"text-sm font-light"}>#EndTheFed</p>
            <p className={"text-sm font-light"}>#Bitcoin</p>
            <p className={"text-sm font-light"}>#buybitcoin</p>
            <p className={"text-sm font-light"}>#bitcoinnotshitcoin</p>
          </div>
        </div>
      </div>
    );
  }