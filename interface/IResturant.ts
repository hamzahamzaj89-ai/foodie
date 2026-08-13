export default interface IRestaurant {
  id: string;

  name: string;


  description: string | null;

  logo_url: string | null;


  address: string;





  delivery_fee: number;

  is_open: boolean;



}