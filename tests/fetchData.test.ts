import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { fetchData } from "../src/fetchData";

const mock = new MockAdapter(axios);

describe("test fetchData method", () => {
  const testUrl = 'https://jsonplaceholder.typicode.com/posts/1';
  const mockData = { id: 1, title: 'Test Post', body: 'This is a test post.' };

  afterEach(() => {
    mock.reset();
  })

  it("should fetch data from the API", async () => {
    mock.onGet(testUrl).reply(200, mockData)

    const data = await fetchData(testUrl)

    expect(data).toEqual(mockData)
  })

  it("should throw an Error for a failed request", async () => {
    mock.onGet(testUrl).reply(500)
    await expect(fetchData(testUrl)).rejects.toThrow("Failed to fetch data")
  })
})