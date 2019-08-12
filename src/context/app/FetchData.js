import axios from '../../assets/js/axios'

export default async (url) => {
   const {data: imgs} = await axios.get(url)
   return imgs
}