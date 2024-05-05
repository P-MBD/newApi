const User = require('app/models/users');
const validator = require('validator');
const resolvers = {
    Query: {
        user : () => {
            return "ali"
        }
    } ,
    Mutation: {
        register : async (param, args) => {
            const errors = [];
            if(validator.isEmpty(args.phone)){
              errors.push({message : 'شماره همراه نمی تواند خالی باشد ' })
            }
            console.log(errors);
            return;
            await User.create({
                    phone: args.phone,
                    password : args.password,
            })
            return{
                    status: 200,
                    message: 'اطلاعات شما در سیستم ذخیره شد.'
            }
        }
    }
    

}
module.exports = resolvers