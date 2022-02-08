class Auth {
  constructor() {
    this.authenticated = false;
  }

  logout(cb) {
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    if (localStorage.getItem("loggedIn") === "true") {
      this.authenticated = true;
    } else {
      this.authenticated = false;
    }
    return this.authenticated;
  }
}

export default new Auth();
