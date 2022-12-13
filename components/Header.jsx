import { useMoralis } from "react-moralis";
import { useEffect } from "react";
export default function Header() {
  const {
    enableWeb3,
    account,
    isWeb3Enabled,
    Moralis,
    deactivateWeb3,
    isWeb3EnableLoading,
  } = useMoralis();

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

  useEffect(() => {
    Moralis.onAccountChanged((account) => {
      console.log(`Account changed to ${account}`);
      if (account == null) {
        window.localStorage.removeItem("connected");
        deactivateWeb3();
        console.log("nothing there");
      }
    });
  });

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
          disabled={isWeb3Enabled}
        >
          Connect
        </button>
      )}
    </div>
  );
}
