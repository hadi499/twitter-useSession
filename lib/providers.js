import { getProviders } from "next-auth/react";

export const getDataProviders = async () => {
  const providers = await getProviders();
  console.log("providers");
  return providers;
};
