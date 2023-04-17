declare global {
  namespace Express {
    interface Request {
      email: email;
      id: string;
      isGoodDeal: boolean;
    }
  }
}

export {};
