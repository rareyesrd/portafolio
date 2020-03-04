<template>
  <div class="Contact">
    <div class="wrapper">
        <h2>Let's get in touch, write me here 🖊</h2>
      <div class="form-container">
        <form @submit.prevent="contact">
            <input type="text" name="name" placeholder="Name" v-model="newMessages.name" required />
            <input type="text" name="company" placeholder="Company" v-model="newMessages.company" />
            <input type="email" name="email" placeholder="Email Address" v-model="newMessages.email" required
            />
            <input type="text" name="phone" placeholder="Phone Number" v-model="newMessages.phone" />
            <textarea name="message" rows="5" placeholder="Message" v-model="newMessages.message"></textarea>
            <button type="submit">Submit</button>
        </form>
        <div class="company-info">
          <ul>
            <li>
              <i class="fa fa-road"></i> 44 Something st
            </li>
            <li>
              <i class="fa fa-phone"></i> (555) 555-5555
            </li>
            <li>
              <i class="fa fa-envelope"></i> test@acme.test
            </li>
          </ul>
        </div>
      </div>
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
      toastr.success("Your message has been sent");
    }
  }
};
</script>

<style lang="scss" scoped>
.Contact {
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
</style>