import axios from "axios";

export async function fetchData(url: string): Promise<any> {
  try {
    const res = await axios.get(url)
    return res.data
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error}`)
  }
}