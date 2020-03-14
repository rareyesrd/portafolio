<template>
  <div class="Contact">
    <div class="form-container">
      <form @submit.prevent="contact">
        <div class="inputs">
          <h2>Let's get in touch, write me here 🖊</h2>
          <div class="single-input">
            <input type="text" name="name" placeholder="Name" v-model="newMessages.name" required />
          </div>
          <div class="single-input">
            <input type="text" name="company" placeholder="Company" v-model="newMessages.company" />
          </div>
          <div class="single-input">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              v-model="newMessages.email"
              required
            />
          </div>
          <div class="single-input">
            <input type="text" name="phone" placeholder="Phone Number" v-model="newMessages.phone" />
          </div>
          <textarea name="message" rows="5" placeholder="Message" v-model="newMessages.message"></textarea>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Firebase from "firebase";
import config from "../config";
import toastr from "toastr";
let app = Firebase.initializeApp(config);
let messagesRef = app.database().ref("messages");
export default {
  name: "Contact",
  firebase: {
    "Email from the portafolio webpage": messagesRef
  },
  components: {},
  data() {
    return {
      newMessages: {
        name: "",
        company: "",
        email: "",
        phone: "",
        message: ""
      }
    };
  },
  methods: {
    contact() {
      messagesRef.push(this.newMessages);
      this.newMessages.name = "";
      this.newMessages.company = "";
      this.newMessages.email = "";
      this.newMessages.phone = "";
      this.newMessages.message = "";
      toastr.success("Your message has been sent", { timeOut: 3000 });
    }
  }
};
</script>

<style lang="scss" scoped>
.Contact {
  background: url('../assets/bg-project.png') no-repeat center center/cover;
  // position: absolute;
  // margin: auto;
  // top: 0;
  // left: 0;
  // right: 0;
  // bottom: 0;
  // padding-top: 400px;
  h2 {
    font-size: 3.3rem;
    color: #000;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  .form-container {
  width: 80%;
  margin: 0 auto;
    form {
      height: 100vh;
      display: grid;
      place-items: center;
      .inputs {
        width: 100%;
        margin: 0 auto;
        h2 {
          margin-bottom: 20px;
        }
        .single-input {
          background-color: #fff;
          border-radius: 20px;
          margin-bottom: 30px;
          input {
            outline: none;
            border: none;
            height: 62px;
            padding: 0 20px 0 23px;
            display: block;
            width: 100%;
            background: transparent;
            font-family: SourceSansPro-Bold;
            font-size: 16px;
            color: #4b2354;
            line-height: 1.2;
            border-radius: 20px;
            box-shadow: 0 5px 20px 0px rgba(226, 194, 197, 0.61);
            -moz-box-shadow: 0 5px 20px 0px rgba(201, 171, 173, 0.616);
            transition: all 0.3s ease 0.2s;
            &:focus {
              box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.05);
              -moz-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.05);
            }
          }
        }
        textarea {
          outline: none;
          border: none;
          height: 62px;
          padding: 0 20px 0 23px;
          display: block;
          width: 100%;
          background: #fff;
          font-family: SourceSansPro-Bold;
          font-size: 16px;
          color: #4b2354;
          line-height: 1.2;
          border-radius: 20px;
          box-shadow: 0 5px 20px 0px rgba(250, 66, 81, 0.1);
          -moz-box-shadow: 0 5px 20px 0px rgba(250, 66, 81, 0.1);
          margin-bottom: 30px;
          transition: all 0.2s ease;
          &:focus {
            box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.05);
            -moz-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.05);
          }
        }
        button {
          float: right;
          outline: none !important;
          border: none;
          background: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 20px;
          min-width: 160px;
          height: 42px;
          background-color: #bd59d4;
          border-radius: 21px;
          font-family: JosefinSans-Bold;
          font-size: 14px;
          color: #fff;
          line-height: 1.2;
          text-transform: uppercase;
          padding-top: 5px;
          -webkit-transition: all 0.4s;
          -o-transition: all 0.4s;
          -moz-transition: all 0.4s;
          transition: all 0.4s;
          box-shadow: 0 10px 30px 0px rgba(189, 89, 212, 0.5);
          -moz-box-shadow: 0 10px 30px 0px rgba(189, 89, 212, 0.5);
          -webkit-box-shadow: 0 10px 30px 0px rgba(189, 89, 212, 0.5);
          -o-box-shadow: 0 10px 30px 0px rgba(189, 89, 212, 0.5);
          -ms-box-shadow: 0 10px 30px 0px rgba(189, 89, 212, 0.5);
        }
      }
    }
  }
}
</style>