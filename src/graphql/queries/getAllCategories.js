import { fetchAxios } from "../../lib/axios";
export async function getAllCategories() {
  const data = await fetchAxios(
    {
      pid: 1 ,
      cid: null
    }
  );

  // return data?.productCategories;

  return data.filter(function (item) {
    return item.block_name == "CategoryBlock";
  })[0];
}
