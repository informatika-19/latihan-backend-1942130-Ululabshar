const userModel = require('../model/user')
const bcrypt = require('bcrypt')
exports.register = (data) =>
    new Promise ((resolve, reject) =>{
        userModel.findOne({
            name : data.name
        }).then(user => {
           if(user) {
               resolve({
                   status : false,
                   pesan : 'sudah ada'
               })
            }else{
                bcrypt.hash(data.password, 10, (err, hash) => {
                    data.password = hash
                    userModel.create(data)
                        .then (()=>{
                            //console.log('Berhasil')
                            resolve({
                                status : true,
                                pesan : 'Berhasil'
                            })
                        }).catch(()=>{
                            //console.log('gagal')
                            reject({
                                status : false,
                                pesan : 'Gagal'
                        })

                    })
                })
            }
    })   
        
})
