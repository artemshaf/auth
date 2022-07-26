import { IUser } from "../models/dtos/IUser";
import { makeAutoObservable } from "mobx";
import AuthService from "../services/auth/AuthService";
import axios, { AxiosError } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import { API_URL } from "../api";

export default class Store {
  user = {} as IUser;
  isAuth = false;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setUser(user: IUser) {
    this.user = user;
  }

  setLoading(bool: boolean) {
    this.isLoading = bool;
  }

  async login(email: string, password: string) {
    this.setLoading(true);
    try {
      const response = await AuthService.login(email, password);
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.log((e.response?.data as AxiosError).message);
      }
    } finally {
      this.setLoading(false);
    }
  }

  async registration(email: string, password: string) {
    this.setLoading(true);
    try {
      const response = await AuthService.registration(email, password);
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.log((e.response?.data as AxiosError).message);
      }
    } finally {
      this.setLoading(false);
    }
  }

  async logout(): Promise<void> {
    this.setLoading(true);
    try {
      const response = await AuthService.logout();
      localStorage.removeItem("token");
      this.setAuth(false);
      this.setUser({} as IUser);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.log((e.response?.data as AxiosError).message);
      }
    } finally {
      this.setLoading(false);
    }
  }

  async checkAuth() {
    this.setLoading(true);
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.log((e.response?.data as AxiosError).message);
      }
    } finally {
      this.setLoading(false);
    }
  }
}
