const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        tpye: String,
        maxlength : 50
    },
    email : {
        type : String,
        trim : true, // 빈공간 방지
        unique : 1  //중복 아이디 
    },
    password : {
        tpye: String,
        minlength : 5
    },
    lastname : {
        type: String,
        maxlength : 50
    },
    // 일반 관리자 , 관리자 
    role: {
        type : Number,
        default : 0
    },
    image : String, // object 사용하지 않고 그냥 줄수있따
    token : {
        // 유효기간
        type: String
    },
    tokenExp : {
        tpye: Number
    }
})

// 감싸주기
const User = mongoose.model('User' , 'userSchema')

// 다른곳도 쓸수 있게 이 유져 ㅂ내기
module.exports = {User}