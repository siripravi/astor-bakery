import { fetchAxios } from "../../lib/axios";

export async function getProductsFromCategory(id) {
  const data = await fetchAxios(
     { pid:3 ,cid:id}
  );

  //return data?.productCategory;
  return data.filter(function (item) {
    return item.block_name == "ModuleBlock";
  })[0];
}
