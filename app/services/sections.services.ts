import { ISection, ISectionMenus } from "@/interface/ISectionPage";
import { supabase } from "../lib/supabase";
import { useAppStore } from "../shared/store/useAppStore";
import { IMenuCard } from "@/interface/IMenuCard";



const SECTION_PAGE_SIZE = 5;

const SECTION_MENUS_PAGE_SIZE = 10;



const defaultSection = useAppStore((state) => state.defaultSection)




export async function getRestaurantSections(restaurantId:string ,page?: number ) {

    

    const start = page || 0

 let query  =   supabase
    .from("sections")
    .select(`
      id,
      title:name,
      description,
      imageUrl:image_url
    `)
    .eq("restaurant_id" , restaurantId)
    .order("created_at", { ascending: false })
    .range(start, start + SECTION_PAGE_SIZE);


      




    const { data , error }  = await query;

   
 
   if (error) {
    console.log("section")
   
    throw error;

   } 
   


   
   const hasNextPage = data.length > SECTION_PAGE_SIZE;
     

   
console.log(hasNextPage)

   return {

      data: data  as ISection[],
      hasNextPage

   }




}







export const  getTopRatedMenus = async (page?: number) => {



        const start = page || 0;




    const { data, error } = await supabase
  .from("menu")
  .select(`
      id,
      title,
      oldPrice:old_price,
      price,
      category,
      description,
      image_url,
      average_rating,
      reviews_count
  `)
  .order("average_rating", { ascending: false })
  .range(start, start + SECTION_MENUS_PAGE_SIZE);



  



   
 
   if (error) {
    console.log("section")
   
    throw error;

   } 
   


   
   const hasNextPage = data.length > SECTION_PAGE_SIZE;




        if (hasNextPage) {
                data.pop()
     }
     

   

   return {

      data: data as IMenuCard[],
      hasNextPage

   }
        
}



export async function getSectionsMenus(sectionId:string ,page?: number ) {



     if (defaultSection.id === sectionId) {
           return getTopRatedMenus(page)
     }

    

    const start = page || 0

 let query  =   supabase
    .from("section_group")
    .select(`
        id,
     menu: menu(
      id,
      title,
      oldPrice:old_price,
      price,
      category,
      description,
      image_url,
      average_rating,
      reviews_count
    )


    `)
    .eq("section_id", sectionId)
    .order("created_at", { ascending: false })
    .range(start, start + SECTION_MENUS_PAGE_SIZE);



      




    const { data , error }  = await query;


    console.log(data)

    const newData = extractMenus(data as any)





   
 
   if (error) {
    console.log("section")
   
    throw error;

   } 
   




   
   const hasNextPage = data.length > SECTION_PAGE_SIZE;
     









      
   

   return {

      data: newData as IMenuCard[],
      hasNextPage

   }




}


function extractMenus(data:ISectionMenus[]): IMenuCard[] {
  return data.flatMap((item) => item.menu??null);
}
