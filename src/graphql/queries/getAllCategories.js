import { fetchAxios } from "../../lib/axios";
export async function getAllCategories() {
  const data = await fetchAxios(`
  {
    productCategories(first: 20) {
      nodes {
        id
        databaseId
        name
        slug
      }
    }
  }  
    `);

  // return data?.productCategories;

  return data.filter(function (item) {
    return item.block_name == "CategoryBlock";
  })[0];
}
