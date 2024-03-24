import { apiConfig } from "../config";
import { IPosts } from "../models/posts";

export class API {
  private baseUrl: string = apiConfig.base_url;

  public async getPostsList(options: { limit: number; page: number } = { limit: 10, page: 1 }) {
    try {
      return await fetch(`${this.baseUrl}/posts?_limit=${options.limit}&_page=${options.page}`, { method: "GET" })
        .then((res) => res.json())
        .then((res: IPosts[]) => res);
    } catch (e) {
      throw new Error("Fail to get posts");
    }
  }

  public async getPost(id: number) {
    try {
      return await fetch(`${this.baseUrl}/posts/${id}`, { method: "GET" })
        .then((res) => res.json())
        .then((res: IPosts) => res);
    } catch (e) {
      throw new Error("Fail to get post");
    }
  }
}

export const api = new API();
