import { supabase } from "@/app/lib/supabase";
import { IMenuItem } from "../../interface/IMenu";
import { IMenuCard } from "../../interface/IMenuCard";

const PAGE_SIZE = 10;

export async function getResturantMenus(
  restaurantId: string,
  category: string,
  page?: number,
) {
  const start = page || 0;

  let query = supabase
    .from("menu")
    .select(
      `
      id,
      title,
      price,
      image_url,
      average_rating,
      reviews_count,
      created_at
    `,
    )
    .eq("restaurant_id", restaurantId)
    .order("created_at", { ascending: false })
    .range(start, start + PAGE_SIZE);

  if (category !== "") {
    query.eq("category", category);
  }

  const { data, error } = await query;

  if (error) {
    console.log("helo");

    throw error;
  }

  const hasNextPage = data.length > PAGE_SIZE;

  console.log(hasNextPage);

  if (hasNextPage) {
    data.pop();
  }

  return {
    data: data as IMenuCard[],
    hasNextPage,
  };
}

export async function getMenu(menuId: string) {
  const { data, error } = await supabase.rpc("get_menu", {
    p_menu_id: menuId,
  });

  if (error) {
    console.log(error);
    throw error;
  }

  if (!data) {
    throw new Error("menu item not found");
  }

  return data as IMenuItem;
}




export async function searchMenus(searchText: string, pageParam: number) {
  const start = pageParam ?? 0;
  const { data, error } = await supabase
    .from("menu")
    .select(
      `
       id,
      title,
      price,
      image_url,
      average_rating,
      reviews_count,
      created_at
    `,
    )
    .ilike("title", `%${searchText}%`)
    .order("title", { ascending: true })
    .range(start, start + PAGE_SIZE);

  if (error) {
    throw error;
  }

  const hasNextPage = data.length > PAGE_SIZE;


  if (hasNextPage) {
    data.pop();
  }

  console.log(hasNextPage)

  return {
    data: data as IMenuCard[],
    hasNextPage,
  };
}






export async function rateMenu ({menuId , rating}: {menuId:string , rating:number}) {


  console.log("clicked")


     console.log(menuId)


  const { data, error } = await supabase.rpc("add_menu_rating", {
  p_menu_id: menuId,
  p_rating: rating,
});

if (error) {
  console.error("Rating error:", error);
  return;
}

console.log("New average rating:", data);

}



