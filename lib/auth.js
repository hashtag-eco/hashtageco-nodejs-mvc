module.export = {
  isOwner: function (req, res) {
    if (req.session.login) {
      return true;
    } else {
      return false;
    }
  },
  statusUI: function (req, res) {
    var authStatusUI = '<a href="/login">Login</a>';
    if (this.isOwner(req, res)) {
      authStatusUI = `${req.session.name}| <a href="/logout">Logout</a>`;
    }
    return authStatusUI;
  },
};
