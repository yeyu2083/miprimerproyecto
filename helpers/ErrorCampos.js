const Handlebars = require("handlebars");

Handlebars.registerHelper("filtro", function(errores, name) {
    if (errores !== undefined)
  { 
      let list = []
      errores.forEach(campo => {
        if(campo.param === name) {
            list+= [campo.msg] ;
            return list

        }  
      })
  }
} 
)
 