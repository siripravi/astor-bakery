import { fetchAxios } from "../../lib/axios";

export async function getSingleProduct(id) {
  const data = await fetchAxios(
   {}
  );

  return data?.product;
}
