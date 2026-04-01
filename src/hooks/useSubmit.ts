import { useState } from "react";

export interface SubmitData {
  firstName: string;
  email: string;
  type: string;
  comment: string;
}

export interface SubmitResponse {
  type: "success" | "error";
  message: string;
}

const SIMULATED_DELAY_MS = 2000;

const wait = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Demo hook that simulates form submission.
 * Replace the body of `submit` with a real API call in production.
 */
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState<SubmitResponse | null>(null);

  const submit = async (data: SubmitData) => {
    setLoading(true);
    try {
      // TODO: replace with a real API call, e.g.:
      // const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) });
      await wait(SIMULATED_DELAY_MS);
      console.log("[Demo] Form submitted:", data);

      setResponse({
        type: "success",
        message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
      });
    } catch (error) {
      setResponse({
        type: "error",
        message: "Something went wrong, please try again later!",
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
