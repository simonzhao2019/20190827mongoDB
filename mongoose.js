const mongoose = require("mongoose")
const md5 = require("blueimp-md5")
mongoose.connect("mongodb://localhost:27017/test2", {
  useNewUrlParser: true
})
.then(()=>{
  console.log("连接数据库成功")
})
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true, //必须的
      unique: true //唯一的
    },
    pwd: {
      type: String,
      required: true
    },
    age: Number,
    sex: String,
    phone: String,
    likes: {
      // 值应该是数组
      type: Array,
      default: []
    },
    time: {
      // 值是对象, 且包含下面2个属性
      create_time: {
        type: Date,
        default: Date.now // 默认值为当前时间
      },
      update_time: {
        type: Date,
        default: Date.now
      }
    },
    info: Schema.Types.Mixed // 混合数据类型，所有类型都接受
  },
  {
    versionKey: false
  }
)

const userModule = mongoose.model("users", userSchema)

// function testAdd() {
//   let simon={
//     name: 'simon',
//       pwd: md5('123'),
//       age: 21,
//       sex: '男',
//       phone: '13712341234',
//       likes: ['吃吃吃', '睡睡睡', '喝喝喝'],
//       info: '看着不像女的'
//   }
//   let simon2= {
//     name: 'sadsimon',
//     pwd: md5('234'),
//     age: 21,
//     sex: '男',
//     phone: '13312341234',
//     likes: ['吃吃吃', '睡睡睡', '喝喝喝'],
//     info: '本人男爱好女'
//   }
//    userModule.create([simon,simon2]).then(
//      userDocs=>{
//        console.log("数据库写入成功",userDocs)
//      },
//      error=>{
//        console.log(error)
//      }
//    )
// }
//  testAdd()
function testFind() {
  userModule.findOne({
      age: 21
    }).then(
      userDoc => {
        console.log('查询1成功', userDoc)
      },
      error => {
        console.log('查询1失败', error)
      },

    )
    
  }
  testFind()

