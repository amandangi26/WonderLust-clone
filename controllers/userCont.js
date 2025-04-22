const User = require("../models/user");


module.exports.renderSignupForm= (req, res) => {
    res.render("users/signup.ejs");
  }


module.exports.signup=async (req, res) => {
    try {
      let { username, email, password } = req.body;
      const newUser = new User({ email, username });
      console.log(newUser);
      const registeredUser = await User.register(newUser, password);
      console.log(registeredUser);
      req.login(registeredUser, (err) => {
        if (err) {
          console.log(err);
          return next();
        }
        req.flash("success", `Welcome back, ${username}!`);

        return res.redirect("/listings");
      });
    } catch (e) {
      req.flash("error", e.message);
      res.redirect("/signup");
    }
  }




module.exports.renderLoginForm=(req, res) => {
    res.render("users/login.ejs");
  }




module.exports.login=async (req, res) => {
    let { username } = req.body;
    req.flash("success", `Welcome back, ${username}!`);
    let redirectUrl=res.locals.redirectUrl || "/listings"
    res.redirect(redirectUrl);
    // res.send(`<h3>Wlecome Back ${username} !</h3>`)
  }


module.exports.logout= (req, res) => {
    req.logout((err) => {
      if (err) {
        next(err);
      }
      req.flash("success", "you are logged out !");
      res.redirect("/listings");
    });
  }