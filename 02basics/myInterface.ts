interface User {
  email: string;
  useId: number;
  googleId?: string;
  readonly dbId: number;
  //   startTrial: () => string;
  startTrial(): string;
  getCoupon(couponName: string): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "learner" | "ta";
}

const sunny: Admin = {
  email: "s@s.com",
  useId: 12345,
  dbId: 294034,
  startTrial: () => {
    return "trial started";
  },
  getCoupon: () => {
    return 2345;
  },
  githubToken: "githubsunny",
  role: "learner",
};

sunny.email = "juli@juli.com";
// sunny.dbId = 5477698398;
