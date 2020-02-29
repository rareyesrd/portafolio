<template>
  <div class="Contact">
      <div class="container">
    <h1 class="brand"><span>Acme</span> Web Design</h1>
    <div class="wrapper">
      <div class="company-info">
        <h3>Acme Web Design</h3>
        <ul>
          <li><i class="fa fa-road"></i> 44 Something st</li>
          <li><i class="fa fa-phone"></i> (555) 555-5555</li>
          <li><i class="fa fa-envelope"></i> test@acme.test</li>
        </ul>
      </div>
      <div class="contact">
        <h3>Email Us</h3>
        <div class="alert">Your message has been sent</div>
        <form @submit.prevent="contact">
          <p>
            <label>Name</label>
            <input type="text" name="name" v-model="newMessages.name" required>
          </p>
          <p>
            <label>Company</label>
            <input type="text" name="company" v-model="newMessages.company">
          </p>
          <p>
            <label>Email Address</label>
            <input type="email" name="email" v-model="newMessages.email" required>
          </p>
          <p>
            <label>Phone Number</label>
            <input type="text" name="phone" v-model="newMessages.phone">
          </p>
          <p class="full">
            <label>Message</label>
            <textarea name="message" rows="5" v-model="newMessages.message"></textarea>
          </p>
          <p class="full">
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
    </div>
  </div>>
  </div>
</template>

<script>
import Firebase from 'firebase';
import config from '../config';
import toastr from 'toastr'

let app = Firebase.initializeApp(config);
let messagesRef = app.database().ref('messages');
export default {
    name: 'Contact',
    firebase:{
      'Email from the portafolio webpage': messagesRef
    },
    data(){
      return{
        newMessages:{
          name: '',
          company: '',
          email: '',
          phone: '',
          message: ''
        }
      }
    },
    methods:{
      contact(){
        messagesRef.push(this.newMessages);
        this.newMessages.name = ''
        this.newMessages.company = ''
        this.newMessages.email = ''
        this.newMessages.phone = ''
        this.newMessages.message = ''
        toastr.success('Reseted')
      }
    }
}
</script>

<style>

</style>