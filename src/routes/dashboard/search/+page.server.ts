import type { PageServerLoad } from './$types';
import { supabase } from "$lib/supabase.ts"

export const load: PageServerLoad = async ({ url }) => {
	const searchQuery = url.searchParams.get('q');

	const { data, error } = await supabase.from('FundWaves').select().like('name', `%${searchQuery}%`);
  if (error) {
    console.log('error: ', error);
  }
  console.log(data)
};