<template>
  <div>
    <div
      class="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover"
      style="background-image:url('https://source.unsplash.com/1L71sPT5XKc');"
    >
      <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
        <!--Main Col-->
        <div
          id="profile"
          class="w-full lg:w-5/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0 h-screen"
        >
          <div class="p-4 md:p-12 text-center lg:text-left">
            <h1 class="text-3xl font-bold pt-8 lg:pt-0">{{profile.firstName}} {{profile.lastName}}</h1>
            <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-teal-500 opacity-25"></div>
            <div></div>
            <div></div>
            <div></div>
            <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
             <svg class="h-4 text-teal-700 pr-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
             </svg> My Email - {{email}}
            </p>
            <p
              class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"
            >
             <svg class="h-4 text-teal-700 pr-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg> My Location - {{profile.location}}
            </p>
            <p  class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              <svg class="h-4 text-teal-700 pr-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg> Telephone - {{profile.telephone}}
            </p>
            <br>
            <div class="pt-12 pb-8">
              <router-link
                to="/userbook"
                class="bg-teal-700 hover:bg-teal-900 no-underline text-white font-bold py-2 px-4 rounded-full"
              >Place you Booking</router-link>
              <!-- <router-link
                to="/payment"
                class="bg-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded-full"
              >Get a Trainer</router-link> -->
              <button
                @click="logout()"
                class="bg-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded-full"
              >Sign Out</button>
            </div>
          </div>
        </div>

        <!--Img Col-->
        <div class="w-full lg:w-2/5">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb, db } from "../firebase";
export default {
  data() {
    return {
      photos: [],
      Profile: {
        firstName: null,
        lastName: null,
        location: null,
        city: null,
        telephone: null,
      },
      email: null
    };
  },
  created() {
    var user = fb.auth().currentUser;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.telephone = user.telephone;
    this.city = user.city;
    this.location = user.location;
    this.email = user.email;
  },
  firestore() {
    const user = fb.auth().currentUser;
    return {
      profile: db.collection("profiles").doc(user.uid)
    };
  },
  methods: {
    logout() {
      fb.auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        })
        // .catch(err => {
        //   console.log(err);
        // });
    },
   
  }
          
};
</script>

<style lang="scss" scoped>
</style>