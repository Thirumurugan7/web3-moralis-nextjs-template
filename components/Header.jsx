import { useMoralis } from "react-moralis";
import { useEffect } from "react";
export default function Header() {
  const { enableWeb3, account, isWeb3Enabled } = useMoralis();

  useEffect(() => {
    if (isWeb3Enabled) return;
    if (typeof window !== "undefined") {
      if (window.localStorage.getItem("connected")) {
        enableWeb3;
      }
    }

    console.log("Hello");
    console.log(isWeb3Enabled);
  }, [isWeb3Enabled]);

  return (
    <div>
      {account ? (
        <div>Connected to {account}</div>
      ) : (
        <button
          onClick={async () => {
            await enableWeb3();
            if (typeof window !== "undefined") {
              window.localStorage.setItem("connected", "injected");
            }
          }}
        >
          Connect
        </button>
      )}
    </div>
  );
}
