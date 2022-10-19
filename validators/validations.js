/*  const validator = require("express-validator");
 const { body, validationResult } = validator;



  const validationRules = [
        body("name")
        .notEmpty().withMessage("Campo obligatorio")
        .isLength({ min:2, max: 30}).withMessage("minimo 2 caracteres, maximo 30 caracteres "),

        body("email")
        .notEmpty().withMessage("Campo obligatorio")
        .isEmail().withMessage("Debe ingresar un email valido"),

        body("message")
        .notEmpty()
        .isLength({min:10, max:500}),

        (req, res, next) => {
        const errors = validationResult(req)
       if (!errors.isEmpty()) {
       const formData = req.body    
       const arrWarnings = errors.array()
       res.render("registerUser", { arrWarnings, formData })
       }else return next()
    }
     ]
      
    



module.exports = validationRules  ; 

   */